const tests = {
    simpleInline: {
        inline: {
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
            `
        },
        source: 'map()',
        output: '{var arr,_mapResult;_map:{"use strict";const len=arr.length;const newArr=new Array(len);for(var i=0;i<len;i++){newArr[i]=arr[i];}_mapResult=newArr;break _map;}}_mapResult;'
    },
    withUsingVars: {
        inline: {
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
            `
        },
        source: 'var i, _i, arr, len, newArr; map(1)',
        output: 'var i,_i,arr,len,newArr;{var _arr=1,_mapResult;_map:{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}_mapResult=_newArr;break _map;}}_mapResult;'
    },
    withUsingVarsAndAssignment: {
        inline: {
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
            `
        },
        source: 'var i, _i, arr, len, newArr; const foo = map(1)',
        output: 'var i,_i,arr,len,newArr;{var _arr=1,_mapResult;_map:{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}_mapResult=_newArr;break _map;}}const foo=_mapResult;'
    },
    insideFunctionWithUsingVars: {
        inline: {
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
            `
        },
        source: 'var i, len, newArr; function abc(){let arr, _i; return map(1)}',
        output: 'var i,len,newArr;function abc(){let arr,_i;{var _arr=1,_mapResult;_map:{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}_mapResult=_newArr;break _map;}}return _mapResult;}'
    },
    xmap: {
        inline: {
            'xmap': `
               function xmap(arr) {
                    const len = arr.length;
                    function foo(){
                        return len;             
                    }
                    return len + 1;
               }
            `,
        },
        source: 'var len; var data = xmap()',
        output: 'var len;{var arr,_xmapResult;_xmap:{const _len=arr.length;function foo(){return _len;}_xmapResult=_len+1;break _xmap;}}var data=_xmapResult;'
    },
    fooArguments: {
        inline: {
            'foo': `
                function foo() {
                  var sum = 0;
                  for (var i=0; i<arguments.length; i++) sum+=arguments[i];
                  return sum;
                }
            `
        },
        source: 'foo()',
        output: '{var _fooResult,_arguments=[];_foo:{var sum=0;for(var i=0;i<_arguments.length;i++)sum+=_arguments[i];_fooResult=sum;break _foo;}}_fooResult;'
    },
    fooMap: {
        inline: {
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
            'bar': `
               function bar() {
                  let sum, i; 
                  return map();
               }
            `
        },
        source: 'var i; bar()',
        output: 'var i;{var _barResult;_bar:{let sum,_i;{var arr,_mapResult;_map:{"use strict";const len=arr.length;const newArr=new Array(len);for(var _i2=0;_i2<len;_i2++){newArr[_i2]=arr[_i2];}_mapResult=newArr;break _map;}}_barResult=_mapResult;break _bar;}}_barResult;'
    },

    this: {
        inline: {
            'mapThis': `
                function mapThis() {
                    const len = this.length;
                    function x(){return this}
                    const newArr = new Array(len);
                    for (var i = 0; i < len; i++) {
                        newArr[i] = fn(this[i]);    
                    }       
                    return newArr;
                }
            `
        },
        source: 'array.mapThis()',
        output: '{var _mapThisResult,_this=array;_mapThis:{const len=_this.length;function x(){return this;}const newArr=new Array(len);for(var i=0;i<len;i++){newArr[i]=fn(_this[i]);}_mapThisResult=newArr;break _mapThis;}}_mapThisResult;'
    },

    arguments: {
        inline: {
            'mapArguments': `
               function mapArguments() {
                    function x(){return arguments}
                    let sum = 0;
                    for (var i = 0; i < arguments.length; i++) {
                        sum += arguments[i]    
                    }       
                    return sum;
               }
            `,
        },
        source: 'mapArguments(1,2,3)',
        output: '{var _mapArgumentsResult,_arguments=[1,2,3];_mapArguments:{function x(){return arguments;}let sum=0;for(var i=0;i<_arguments.length;i++){sum+=_arguments[i];}_mapArgumentsResult=sum;break _mapArguments;}}_mapArgumentsResult;'
    },

};


function printCode(title, nodePath, ast) {
    console.log(title, Babel.transformFromAst(ast || nodePath.hub.file.ast, '', {compact: true}).code);
}


function formatAst(ast) {
    return JSON.stringify(ast, (k, v) => k == 'start' || k == 'end' || k == 'loc' ? void 0 : v, 3);
}



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
    let variables = [];
    let thisIdentifier = parentScope.generateUidIdentifier('this');
    let thisValue = t.isMemberExpression(parentPath.node.callee) ? parentPath.node.callee.object : t.nullLiteral();
    let thisAssigned = false;

    let argumentsAssigned = false;
    const argumentsIdentifier = parentScope.generateUidIdentifier('arguments');
    let argumentsProps;
    let argumentsDeclarator;

    return {
        visitor: {
            Identifier: {
                enter(path) {
                    if (path.node.name == 'arguments') {
                        if (path.getAncestry().filter(path => t.isFunction(path)).length > 0) {
                            return;
                        }
                        if (!argumentsAssigned) {
                            argumentsAssigned = true;
                            variables.push(argumentsDeclarator);
                        }
                        path.replaceWith(argumentsIdentifier);
                    }
                }
            },

            ThisExpression: {
                enter(path) {
                    if (path.getAncestry().filter(path => t.isFunction(path)).length > 0) {
                        return;
                    }
                    if (!thisAssigned) {
                        thisAssigned = true;
                        variables.push(t.variableDeclarator(thisIdentifier, thisValue));
                    }
                    path.replaceWith(thisIdentifier);
                }
            },

            FunctionDeclaration: {
                enter(path) {
                    if (functionEntered) {
                        return;
                    }
                    functionEntered = true;
                    const body = path.get('body');
                    const scope = body.scope;
                    checkLimitCall('SourcePreparerFunctionEnter');

                    argumentsDeclarator = t.variableDeclarator(argumentsIdentifier, t.arrayExpression(parentPath.node.arguments));

                    labelIdentifier = parentScope.generateUidIdentifier(path.node.id.name);
                    resultIdentifier = parentScope.generateUidIdentifier(path.node.id.name + 'Result');

                    if (path.getAncestry().filter(path => t.isFunction(path)).length > 1) {
                        return;
                    }

                    variables = path.node.params.map((id, i) => t.variableDeclarator(id, parentPath.node.arguments[i]));
                    variables.push(t.variableDeclarator(resultIdentifier));
                    const args = t.variableDeclaration('var', variables);

                    const allBindings = scope.getAllBindings();
                    const keys = Object.keys(allBindings);

                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
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

const plugin = (inlineFns)=>function (obj) {
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
                    const fnName = t.isMemberExpression(path.node.callee) ? path.node.callee.property.name : path.node.callee.name;
                    const inlineSource = inlineFns[fnName];
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
    const output = Babel.transform(test.source, {plugins: [plugin(test.inline)], compact: true, presets: ['stage-0']});
    if (test.output !== output.code) {
        console.error(`Test ${testName} is not passed. \nResult:   ${output.code}\nExpected: ${test.output}`);
    }
}

const keys = Object.keys(tests);
const onlyKeys = keys.filter(key => key[0] == '$');
const testKeys = onlyKeys.length ? onlyKeys : keys.filter(key => key[0] !== '_');
testKeys.forEach(test);
console.log(`${testKeys.length} tests done`);
