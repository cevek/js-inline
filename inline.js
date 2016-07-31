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
        output: '{var arr;{"use strict";const len=arr.length;const newArr=new Array(len);for(var i=0;i<len;i++){newArr[i]=arr[i];}}}'
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
        output: 'var i,_i,arr,len,newArr;{var _arr=1;{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}}}'
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
        output: 'var i,_i,arr,len,newArr;{var _arr=1,_mapResult;{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}_mapResult=_newArr;}}const foo=_mapResult;'
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
        output: 'var i,len,newArr;function abc(){let arr,_i;{var _arr=1,_mapResult;{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}_mapResult=_newArr;}}return _mapResult;}'
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
        output: 'var len;{var arr,_xmapResult;{const _len=arr.length;function foo(){return _len;}_xmapResult=_len+1;}}var data=_xmapResult;'
    },
    fooEmptyArguments: {
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
        output: '{var _arguments=[];{var sum=0;for(var i=0;i<_arguments.length;i++)sum+=_arguments[i];}}'
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
        source: 'foo(1,2,3)',
        output: '{var _arguments=[1,2,3];{var sum=0;for(var i=0;i<_arguments.length;i++)sum+=_arguments[i];}}'
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
        source: 'var i; i = bar()',
        output: 'var i;{{let sum,_i;{var arr;{"use strict";const len=arr.length;const newArr=new Array(len);for(var _i2=0;_i2<len;_i2++){newArr[_i2]=arr[_i2];}i=newArr;}}}}'
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
        source: 'var _this; array.mapThis()',
        output: 'var _this;{var _this2=array;{const len=_this2.length;function x(){return this;}const newArr=new Array(len);for(var i=0;i<len;i++){newArr[i]=fn(_this2[i]);}}}'
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
        source: 'var _arguments; mapArguments(1,2,3)',
        output: 'var _arguments;{var _arguments2=[1,2,3];{function x(){return arguments;}let sum=0;for(var i=0;i<_arguments2.length;i++){sum+=_arguments2[i];}}}'
    },

    manyReturns: {
        inline: {
            'manyReturns': `
               function manyReturns(sum) {
                    function x(){return x}
                    while(1) {
                        return sum;    
                    }
                    if (1) {
                        return sum;    
                    }       
                    return sum;
               }
            `,
        },
        source: 'const a = manyReturns()',
        output: '{var sum,_manyReturnsResult;_manyReturns:{function x(){return x;}while(1){_manyReturnsResult=sum;break _manyReturns;}if(1){_manyReturnsResult=sum;break _manyReturns;}_manyReturnsResult=sum;}}const a=_manyReturnsResult;'
    },

};



function printCode(title, nodePath, ast) {
    console.log(title, Babel.transformFromAst(ast || nodePath.hub.file.ast, '', {compact: true}).code);
}


function formatAst(ast) {
    return JSON.stringify(ast, (k, v) => k == 'start' || k == 'end' || k == 'loc' ? void 0 : v, 3);
}


function parentsHasTargetFunction(path) {
    const parents = path.getAncestry();
    for (var i = 0; i < parents.length; i++) {
        var parent = parents[i];
        if (t.isFunction(parent)) {
            return parent._targetFunction;
        }
    }
    return false;
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
    const parentParentPath = parentPath.parentPath;

    const callIsStatement = t.isExpressionStatement(parentParentPath);
    const useParentResultIdentifier = t.isAssignmentExpression(parentParentPath) && t.isIdentifier(parentParentPath.node.left) && parentParentPath.node.operator == '=';
    let resultIdentifier = callIsStatement ? null : (useParentResultIdentifier ? parentParentPath.node.left : null);

    let labelIdentifier;
    const variables = [];
    const thisIdentifier = parentScope.generateUidIdentifier('this');
    const thisValue = t.isMemberExpression(parentPath.node.callee) ? parentPath.node.callee.object : t.nullLiteral();
    let thisAssigned = false;

    let argumentsAssigned = false;
    const argumentsIdentifier = parentScope.generateUidIdentifier('arguments');
    const argumentsDeclarator = t.variableDeclarator(argumentsIdentifier, t.arrayExpression(parentPath.node.arguments));

    const replaceBody = [];
    let usedBreaks = false;


    return {
        visitor: {
            FunctionDeclaration: {
                enter(path) {
                    if (!t.isProgram(path.parentPath)) {
                        return;
                    }
                    checkLimitCall('SourcePreparerFunctionExit');
                    labelIdentifier = parentScope.generateUidIdentifier(path.node.id.name);
                    variables.push(...path.node.params.map((id, i) => t.variableDeclarator(id, parentPath.node.arguments[i])));

                    if (!useParentResultIdentifier && !callIsStatement) {
                        resultIdentifier = parentScope.generateUidIdentifier(path.node.id.name + 'Result');
                        variables.push(t.variableDeclarator(resultIdentifier));
                    }
                    path._targetFunction = true;
                    const body = path.get('body');
                    const scope = body.scope;

                    const allBindings = scope.getAllBindings();
                    const keys = Object.keys(allBindings);

                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        if (parentScope.hasBinding(key)) {
                            const newKey = parentScope.generateUid(key);
                            scope.rename(key, newKey);
                        }
                    }

                },
                exit(path) {
                    if (!t.isProgram(path.parentPath)) {
                        return;
                    }
                    checkLimitCall('SourcePreparerFunctionEnter');

                    const body = path.get('body');

                    if (variables.length) {
                        replaceBody.push(t.variableDeclaration('var', variables));
                    }

                    if (usedBreaks) {
                        replaceBody.push(t.labeledStatement(labelIdentifier, body.node));
                    } else {
                        replaceBody.push(body.node);
                    }

                    path.replaceWith(t.blockStatement(replaceBody));

                    const parentStatement = parentPath.getStatementParent();
                    parentStatement.insertBefore(path.node);

                    if (useParentResultIdentifier || callIsStatement) {
                        parentParentPath.remove();
                    } else {
                        parentPath.replaceWith(resultIdentifier);
                    }
                }
            },

            Identifier: {
                enter(path) {
                    if (path.node.name == 'arguments') {
                        if (!parentsHasTargetFunction(path)) {
                            return;
                        }
                        checkLimitCall('SourcePreparerIdentifierEnter');
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
                    if (!parentsHasTargetFunction(path)) {
                        return;
                    }
                    checkLimitCall('SourcePreparerThisEnter');
                    if (!thisAssigned) {
                        thisAssigned = true;
                        variables.push(t.variableDeclarator(thisIdentifier, thisValue));
                    }
                    path.replaceWith(thisIdentifier);
                }
            },

            ReturnStatement: {
                enter(path) {
                    if (!parentsHasTargetFunction(path)) {
                        return;
                    }
                    checkLimitCall('SourcePreparerReturnEnter');
                    const isLastReturn = t.isBlockStatement(path.parentPath) && t.isFunction(path.parentPath.parentPath) && path.key === path.container.length - 1;
                    if (!isLastReturn) {
                        usedBreaks = true;
                    }

                    if (resultIdentifier) {
                        const replace = [];
                        replace.push(t.expressionStatement(t.assignmentExpression('=', resultIdentifier, path.node.argument)));
                        if (!isLastReturn) {
                            replace.push(t.breakStatement(labelIdentifier));
                        }
                        path.replaceWithMultiple(replace);
                    } else {
                        if (isLastReturn) {
                            path.remove();
                        } else {
                            path.replaceWith(t.breakStatement(labelIdentifier));
                        }
                    }

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
        console.error(`Test ${testName} is not passed.\nSource:   ${test.source}\nResult:   ${output.code}\nExpected: ${test.output}`);
    }
}

const keys = Object.keys(tests);
const onlyKeys = keys.filter(key => key[0] == '$');
const testKeys = onlyKeys.length ? onlyKeys : keys.filter(key => key[0] !== '_');
testKeys.forEach(test);
console.log(`${testKeys.length} tests done`);
