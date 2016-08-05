const tests = {
    simpleInline: {
        source: `
                var map_ = function map_(arr) {
                    "use strict";
                    const len = arr.length;
                    const newArr = new Array(len);
                    for (var i = 0; i < len; i++) {
                        newArr[i] = arr[i];    
                    }       
                    return newArr;
                }
        
        map_();
        `,
        output: '{var arr;{"use strict";const len=arr.length;const newArr=new Array(len);for(var i=0;i<len;i++){newArr[i]=arr[i];}}}'
    },
    withUsingVars: {
        source: `
        
        function map_(arr) {
                    "use strict";
                    const len = arr.length;
                    const newArr = new Array(len);
                    for (var i = 0; i < len; i++) {
                        newArr[i] = arr[i];    
                    }       
                    return newArr;
                }
                
        var i, _i, arr, len, newArr; map_(1)`,
        output: 'var i,_i,arr,len,newArr;{var _arr=1;{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}}}'
    },
    withUsingVarsAndAssignment: {
        source: `
            function map_(arr) {
                    "use strict";
                    const len = arr.length;
                    const newArr = new Array(len);
                    for (var i = 0; i < len; i++) {
                        newArr[i] = arr[i];    
                    }       
                    return newArr;
                }
                
                var i, _i, arr, len, newArr; var foo = map_(1)`,
        output: 'var i,_i,arr,len,newArr;{var _arr=1;{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}var foo=_newArr;}}'
    },
    insideFunctionWithUsingVars: {
        source: `
        function map_(arr) {
                    "use strict";
                    const len = arr.length;
                    const newArr = new Array(len);
                    for (var i = 0; i < len; i++) {
                        newArr[i] = arr[i];    
                    }       
                    return newArr;
                }
        
        var i, len, newArr; function abc(){let arr, _i; return map_(1)}`,
        output: 'var i,len,newArr;function abc(){let arr,_i;{var _arr=1;{"use strict";const _len=_arr.length;const _newArr=new Array(_len);for(var _i2=0;_i2<_len;_i2++){_newArr[_i2]=_arr[_i2];}var _mapResult=_newArr;}}return _mapResult;}'
    },
    xmap: {
        source: `
        
        function xmap_(arr) {
                    const len = arr.length;
                    function foo(){
                        return len;             
                    }
                    return len + 1;
               }
        var len; var data = xmap_()`,
        output: 'var len;{var arr;{const _len=arr.length;function foo(){return _len;}var data=_len+1;}}'
    },
    fooEmptyArguments: {
        source: `
        function foo_() {
                  var sum = 0;
                  for (var i=0; i<arguments.length; i++) sum+=arguments[i];
                  return sum;
                }
        
        foo_()`,
        output: '{var _arguments=[];{var sum=0;for(var i=0;i<_arguments.length;i++)sum+=_arguments[i];}}'
    },

    fooArguments: {
        source: `
        function foo_() {
                  var sum = 0;
                  for (var i=0; i<arguments.length; i++) sum+=arguments[i];
                  return sum;
                }
        
        foo_(1,2,3)`,
        output: '{var _arguments=[1,2,3];{var sum=0;for(var i=0;i<_arguments.length;i++)sum+=_arguments[i];}}'
    },
    fooMap: {
        source: `
        function bar_() {
                  let sum, i; 
                  return map_();
               }
               
        function map_(arr) {
                    "use strict";
                    const len = arr.length;
                    const newArr = new Array(len);
                    for (var i = 0; i < len; i++) {
                        newArr[i] = arr[i];    
                    }       
                    return newArr;
                }
                
                
                
        var i; i = bar_()`,
        output: 'var i;{{let sum,_i2;{var arr;{"use strict";const len=arr.length;const newArr=new Array(len);for(var _i=0;_i<len;_i++){newArr[_i]=arr[_i];}var _mapResult=newArr;}}i=_mapResult;}}'
    },

    this: {
        source: `
        function mapThis_() {
                    const len = this.length;
                    function x(){return this}
                    const newArr = new Array(len);
                    for (var i = 0; i < len; i++) {
                        newArr[i] = fn(this[i]);    
                    }       
                    return newArr;
                }
        
        var _this; array.mapThis_()`,
        output: 'var _this;{var _this2=array;{const len=_this2.length;function x(){return this;}const newArr=new Array(len);for(var i=0;i<len;i++){newArr[i]=fn(_this2[i]);}}}'
    },

    arguments: {
        source: `
        function mapArguments_() {
                    function x(){return arguments}
                    let sum = 0;
                    for (var i = 0; i < arguments.length; i++) {
                        sum += arguments[i]    
                    }       
                    return sum;
               }
        
        var _arguments; mapArguments_(1,2,3)`,
        output: 'var _arguments;{var _arguments2=[1,2,3];{function x(){return arguments;}let sum=0;for(var i=0;i<_arguments2.length;i++){sum+=_arguments2[i];}}}'
    },

    // todo
    withoutReturn: {
        source: `
        function map_() {
                    
               }
        
        var x = map_();`,
        output: '{{}}'
    },

    manyReturns: {
        source: `
        function manyReturns_(sum) {
                    function x(){return x}
                    while(1) {
                        return sum;    
                    }
                    if (1) {
                        return sum;    
                    }       
                    return sum;
               }
        
        const a = manyReturns_()`,
        output: '{var sum;_manyReturns:{function x(){return x;}while(1){var _manyReturnsResult=sum;break _manyReturns;}if(1){_manyReturnsResult=sum;break _manyReturns;}_manyReturnsResult=sum;}}const a=_manyReturnsResult;'
    },

    filterInMap: {
        source: `
        
        function map_(fn_) {
                     for (var len = this.length, newArr = new Array(len), i = 0; i < len; i++) 
                         newArr[i] = fn_(this[i]);
                    return newArr;
                }
                
                function filter_(fn_) {
                     for (var len = this.length, newArr = [], i = 0; i < len; i++) {
                         var val = this[i];
                         if (fn_(val, i)) 
                            newArr.push(val);
                            
                     }       
                    return newArr;
                }
                
            var data = localUsers.map_((lUser) => {
              return allUsers.filter_(user => {
                 return lUser.id == user.id;  
              });
            })
        `,
        output: '{{for(var len=_this.length,newArr=new Array(len),i=0;i<len;i++){{var lUser=_this[i];{{{for(var _len=_this2.length,_newArr=[],_i=0;_i<_len;_i++){var val=_this2[_i];{var user=val;{var _fnResult3=lUser.id==user.id;}}if(_fnResult3)_newArr.push(val);}var _filterResult=_newArr;}}var _fnResult2=_filterResult;}}newArr[i]=_fnResult2;}var data=newArr;}}'
    },

};


function printCode(title, nodePath, ast) {
    console.log(title, Babel.transformFromAst(ast || nodePath.hub.file.ast, '', {compact: false}).code);
}


function formatAst(ast) {
    return JSON.stringify(ast, (k, v) => k == 'start' || k == 'end' || k == 'loc' ? void 0 : v, 3);
}


const postfix = '_';

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

// fixed buggy implementation
function insertBefore(path, nodes) {
    nodes = Array.isArray(nodes) ? nodes : [nodes];
    if (path.parentPath.isExpressionStatement() || path.parentPath.isLabeledStatement()) {
        return path.parentPath.insertBefore(nodes);
    } else if (path.isNodeType("Expression") || path.parentPath.isForStatement() && path.key === "init") {
        if (path.node) nodes.push(path.node);
        this.replaceExpressionWithStatements(nodes);
    } else {
        path._maybePopFromStatements(nodes);
        if (Array.isArray(path.container)) {
            return path._containerInsertBefore(nodes);
        } else if (path.isStatementOrBlock()) {
            if (path.node) nodes.push(path.node);
            path.replaceWith(t.blockStatement(nodes)); // fix _replaceWith to replaceWith
        } else {
            throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
        }
    }
    return [path];
}

const inlinerPlugin = (parentPath)=>function (obj) {
    var t = obj.types;
    window.t = t;
    window.pluginObj = obj;
    const parentScope = parentPath.scope;
    const parentParentPath = parentPath.parentPath;

    const callIsStatement = t.isExpressionStatement(parentParentPath);
    let useParentResultIdentifier = t.isAssignmentExpression(parentParentPath) && t.isIdentifier(parentParentPath.node.left) && parentParentPath.node.operator == '=';
    let resultIdentifier = callIsStatement ? null : (useParentResultIdentifier ? parentParentPath.node.left : null);
    let resultIsDeclared = useParentResultIdentifier;
    let remove = callIsStatement || useParentResultIdentifier;
    if (t.isVariableDeclarator(parentParentPath) && parentParentPath.parentPath.node.kind == 'var') {
        useParentResultIdentifier = true;
        resultIdentifier = parentParentPath.node.id;
        resultIsDeclared = false;
        remove = true;
    }


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

    const inlineStack = [];

    function checkFunctionIsTop(path) {
        return (t.isExpressionStatement(path.parentPath) && t.isProgram(path.parentPath.parentPath));
    }

    function getParentStatement(path) {
        do {
            if (!path.parentPath || path.isStatement()) {
                break;
            } else {
                path = path.parentPath;
            }
        } while (path);
        return path;
    }


    return {
        visitor: {
            Function: {
                enter(path) {
                    if (!checkFunctionIsTop(path)) {
                        return;
                    }
                    path._targetFunction = true;
                    checkLimitCall('SourcePreparerFunctionEnter');

                    const fnName = path.node.id ? path.node.id.name : '';
                    labelIdentifier = parentScope.generateUidIdentifier(fnName || void 0);

                    if (!useParentResultIdentifier) {
                        resultIdentifier = parentScope.generateUidIdentifier(fnName ? (fnName + 'Result') : 'result');
                    }

                    const body = path.get('body');
                    const scope = body.scope;

                    const allBindings = scope.getAllBindings();
                    const keys = Object.keys(allBindings);

                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        const binding = allBindings[key];
                        if (parentScope.hasBinding(key)) {
                            const newKey = parentScope.generateUid(key);
                            scope.rename(key, newKey);
                        }
                    }
                },
                exit(path) {
                    checkLimitCall('SourcePreparerFunctionExit');

                    if (!checkFunctionIsTop(path)) {
                        return;
                    }

                    const body = path.get('body');

                    const skipArguments = [];
                    parentPath.node.arguments.forEach((arg, i) => {
                        if (parentPath.node && t.isFunction(arg)) {
                            const node = path.node.params[i];
                            const callbackPath = parentPath.get('arguments')[i];
                            const source = callbackPath.getSource();

                            const callbackBinding = path.scope.bindings[node.name];
                            for (let j = 0; j < callbackBinding.referencePaths.length; j++) {
                                const refPath = callbackBinding.referencePaths[j];
                                if (refPath.parentKey == 'callee') {
                                    // console.log('inline', source, refPath.parentPath);
                                    // printCode('before', refPath.parentPath);

                                    inlineStack.push({source, callbackPath, path: refPath.parentPath});
                                    // printCode('after', refPath.parentPath);
                                    // callbackPath.remove();
                                    // console.log(callbackPath);

                                }
                            }
                            skipArguments[i] = true;
                        }
                    });

                    for (let i = 0; i < path.node.params.length; i++) {
                        const param = path.node.params[i];
                        const declarator = t.variableDeclarator(param, parentPath.node.arguments[i]);
                        variables.push(declarator);
                    }

                    if (variables.length) {
                        replaceBody.push(t.variableDeclaration('var', variables));
                    }

                    if (usedBreaks) {
                        replaceBody.push(t.labeledStatement(labelIdentifier, body.node));
                    } else {
                        replaceBody.push(body.node);
                    }

                    path.parentPath.replaceWith(t.blockStatement(replaceBody));

                    const parentStatement = getParentStatement(parentPath);

                    // parentStatement.replaceWith(t.blockStatement([path.parentPath.node]));
                    parentStatement.insertBefore(path.parentPath.node);
                    parentStatement.setScope();


                    if (remove) {
                        if (t.isVariableDeclarator(parentParentPath) || t.isAssignmentExpression(parentParentPath)) {
                            parentParentPath.remove();
                        } else {
                            parentPath.remove();
                        }
                    } else {
                        if (useParentResultIdentifier) {
                        }
                        parentPath.replaceWith(resultIdentifier);
                    }
                }
            },

            Identifier: {
                enter(path) {
                    const name = path.node.name;
                    if (name == 'arguments') {
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

                    const replace = [];
                    if (!callIsStatement) {
                        if (resultIsDeclared) {
                            replace.push(t.expressionStatement(t.assignmentExpression('=', resultIdentifier, path.node.argument)));
                        } else {
                            replace.push(t.variableDeclaration('var', [t.variableDeclarator(resultIdentifier, path.node.argument)]));
                            resultIsDeclared = true;
                        }
                    } else {
                        if (!t.isIdentifier(path.node.argument)) {
                            replace.push(t.expressionStatement(path.node.argument));
                        }
                    }
                    if (!isLastReturn) {
                        replace.push(t.breakStatement(labelIdentifier));
                    }
                    path.replaceWithMultiple(replace);
                }
            }
        }
    }
};

function inlinePath(ast, path) {
    const output = Babel.transformFromAst(ast, '', {
        plugins: [inlinerPlugin(path)],
        compact: false,
        presets: ['stage-0']
    });
    return output.ast;
}

const plugin = (config)=>function (obj) {
    var t = obj.types;
    window.t = t;
    window.pluginObj = obj;

    return {
        visitor: {
            CallExpression: {
                exit(nodePath) {
                    // console.log("exit", nodePath.node.callee.name);
                },
                enter(path, plugPass) {
                    // console.log('enter', path);

                    checkLimitCall('InlineCallExpEnter');
                    // console.log("enter", path.node.callee.name);
                    const callee = path.get('callee');
                    const fnPath = t.isMemberExpression(callee) ? callee.get('property') : callee;
                    const fnName = fnPath.node.name;
                    if (fnName.substr(-postfix.length) == postfix) {
                        const scope = fnPath.scope;
                        const allBindings = scope.getAllBindings();
                        let binding = allBindings[fnName];

                        if (binding) {
                            const declaration = binding.path;
                            let fnAst;
                            let isVariableDeclarator = false;
                            if (t.isFunctionDeclaration(declaration)) {
                                fnAst = declaration.node;
                            } else if (t.isVariableDeclarator(declaration)) {
                                fnAst = declaration.get('init').node;
                                isVariableDeclarator = true;
                            }
                            if (fnAst) {
                                let funExp = fnAst;
                                if (t.isFunctionDeclaration(fnAst)) {
                                    funExp = t.functionExpression(null, fnAst.params, fnAst.body, fnAst.generator, fnAst.async);
                                }
                                funExp.id = t.identifier(fnName.substr(0, fnName.length - postfix.length));

                                inlinePath(t.program([t.expressionStatement(funExp)]), path);
                                binding.scope.crawl();
                                binding = binding.scope.bindings[fnName];
                                if (binding) {
                                    const refs = binding.referencePaths;
                                    if (refs.length == 0) {
                                        if (isVariableDeclarator) {
                                            binding.path.parentPath.remove();
                                        } else {
                                            binding.path.remove();
                                        }
                                    } else {
                                        console.log('Not all usings inlined', binding.path);
                                    }
                                }

                            }


                        }
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

// todo: check inline function scope, it cannot use variables that cannot be using in inline context

function inlineCode(source) {
    const output1 = Babel.transform(source, {compact: true, plugins: [plugin()], presets: ['stage-0']});
    output1.ast.tokens = null;
    const output = Babel.transformFromAst(output1.ast, '', {presets: ['stage-0']});
    // output.ast.tokens = null;
    // printCode('x', null, output.ast);

    return output.code;
}
