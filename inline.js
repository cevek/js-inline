const tests = {
    simpleInline: {
        source: 'map()',
        output: '{var arr,_mapResult;_map:{"use strict";const len=arr.length;const newArr=new Array(len);for(var i=0;i<len;i++){newArr[i]=arr[i];}_mapResult=newArr;break _map;}}_mapResult;'
    },
    withUsingVars: {
        source: 'var i, _i, arr, len, newArr; map(1)',
        output: 'var i,_i,arr,len,newArr;{var _arr=1,_mapResult;_map:{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}_mapResult=_newArr;break _map;}}_mapResult;'
    },
    withUsingVarsAndAssignment: {
        source: 'var i, _i, arr, len, newArr; const foo = map(1)',
        output: 'var i,_i,arr,len,newArr;{var _arr=1,_mapResult;_map:{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}_mapResult=_newArr;break _map;}}const foo=_mapResult;'
    },
    insideFunctionWithUsingVars: {
        source: 'var i, len, newArr; function abc(){let arr, _i; return map(1)}',
        output: 'var i,len,newArr;function abc(){let arr,_i;{var _arr=1,_mapResult;_map:{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}_mapResult=_newArr;break _map;}}return _mapResult;}'
    },
    xmap: {
        source: 'var len; var data = xmap()',
        output: 'var len;{var arr,_xmapResult;_xmap:{const _len=arr.length;function foo(){return _len;}_xmapResult=_len+1;break _xmap;}}var data=_xmapResult;'
    },
    _fooArguments: {
        source: 'foo()',
        output: ''
    },
    fooMap: {
        source: 'var i; bar()',
        output: 'var i;{var _barResult;_bar:{let sum,_i;{var arr,_mapResult;_map:{"use strict";const len=arr.length;const newArr=new Array(len);for(var _i2=0;_i2<len;_i2++){newArr[_i2]=arr[_i2];}_mapResult=newArr;break _map;}}_barResult=_mapResult;break _bar;}}_barResult;'
    },

};



function printCode(title, nodePath, ast) {
    console.log(title, Babel.transformFromAst(ast || nodePath.hub.file.ast, '', {compact: true}).code);
}


function formatAst(ast) {
    return JSON.stringify(ast, (k, v) => k == 'start' || k == 'end' || k == 'loc' ? void 0 : v, 3);
}


const globReplace = {
    'map': `
       function map(arr) {
            "use strict";
            const len = arr.length;
            const newArr = new Array(len);
            for (var i = 0; i < len; i++) {
                newArr[i] = arr[i];    
            }       
            return newArr;
       }

     `,
    'xmap': `
       function xmap(arr) {
            const len = arr.length;
            function foo(){
                return len;             
            }
            return len + 1;
       }

     `,
    'foo': `
       function foo() {
          var sum = 0;
          for (var i=0; i<arguments.length; i++) sum+=arguments[i];
          return sum;
       }
     `,
    'bar': `
       function bar() {
          let sum, i; 
          return map();
       }
     `
};

const _limit = {};
function checkLimitCall(name) {
    if (!_limit[name]) {
        _limit[name] = 0;
    }
    if (_limit[name]++ > 100) {
        throw new Error(`over ${name} call`);
    }
}

const inlinerPlugin = (parentPath)=>function (obj) {
    var t = obj.types;
    window.t = t;
    window.pluginObj = obj;
    const parentScope = parentPath.scope;


    let resultIdentifier;
    let labelIdentifier;
    let functionEntered = false;
    return {
        visitor: {
            FunctionDeclaration: {
                enter(path) {
                    if (functionEntered) {
                        return;
                    }
                    functionEntered = true;
                    const body = path.get('body');
                    const scope = body.scope;

                    checkLimitCall('SourcePreparerFunctionEnter');
                    labelIdentifier = parentScope.generateUidIdentifier(path.node.id.name);
                    resultIdentifier = parentScope.generateUidIdentifier(path.node.id.name + 'Result');

                    if (path.getAncestry().filter(path => t.isFunction(path)).length > 1) {
                        return;
                    }

                    const vars = path.node.params.map((id, i) => t.variableDeclarator(id, parentPath.node.arguments[i]));
                    vars.push(t.variableDeclarator(resultIdentifier));
                    const args = t.variableDeclaration('var', vars);

                    const allBindings = scope.getAllBindings();
                    const keys = Object.keys(allBindings);
                    scope.rename('arguments', '_arguments');

                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        /*
                         if (key == 'arguments') {
                         // todo: if change arguments[x] its change named argument value
                         const props = path.node.params.map((id, i) => t.objectProperty(t.numericLiteral(i), parentPath.node.arguments[i]));
                         vars.push(t.variableDeclarator(t.identifier('arguments'), t.objectExpression(props)));
                         }
                         */
                        if (parentScope.hasBinding(key)) {
                            const newKey = parentScope.generateUid(key);
                            scope.rename(key, newKey);
                        }
                    }
                    path.replaceWith(t.blockStatement([args, t.labeledStatement(labelIdentifier, body.node)]));


                    const parentStatement = parentPath.getStatementParent();
                    parentStatement.insertBefore(path.node);
                    parentPath.replaceWith(resultIdentifier);
                }
            },
            ReturnStatement: {
                enter(path) {
                    checkLimitCall('SourcePreparerReturnEnter');
                    if (path.getAncestry().filter(path => t.isFunction(path)).length > 0) {
                        return;
                    }

                    const assignResult = t.expressionStatement(t.assignmentExpression('=', resultIdentifier, path.node.argument));
                    path.replaceWithMultiple([assignResult, t.breakStatement(labelIdentifier)]);
                }
            }
        }
    }
};

function inlinePath(source, path) {
    const output = Babel.transform(source, {plugins: [inlinerPlugin(path)], compact: true, presets: ['stage-0']});
    return output.ast;
}

const plugin = function (obj) {
    var t = obj.types;
    window.t = t;
    window.pluginObj = obj;

    return {
        visitor: {
            CallExpression: {
                exit(nodePath) {
                    console.log("exit", nodePath.node.callee.name);
                },
                enter(path, plugPass) {
                    checkLimitCall('InlineCallExpEnter');
                    // console.log("enter", path.node.callee.name);
                    const inlineSource = globReplace[path.node.callee.name];
                    if (inlineSource) {
                        inlinePath(inlineSource, path);
                    }
                },

                exit(nodePath) {
                }
            }
        }
    }
};

function test(testName) {
    const test = tests[testName];
    const output = Babel.transform(test.source, {plugins: [plugin], compact: true, presets: ['stage-0']});
    if (test.output !== output.code) {
        console.error(`Test ${testName} is not passed. \nResult:   ${output.code}\nExpected: ${test.output}`);
    }
}

const keys = Object.keys(tests);
const onlyKeys = keys.filter(key => key[0] == '$');
const testKeys = onlyKeys.length ? onlyKeys : keys.filter(key => key[0] !== '_');
testKeys.forEach(test);
console.log(`${testKeys.length} tests done`);
