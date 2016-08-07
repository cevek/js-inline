"use strict";

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
        output: 'var i,_i,arr,len,newArr;{var arr1=1;{"use strict";const len1=arr1.length;const newArr1=new Array(len1);for(var i1=0;i1<len1;i1++){newArr1[i1]=arr1[i1];}}}'
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
        output: 'var i,_i,arr,len,newArr;{var arr1=1;{"use strict";const len1=arr1.length;const newArr1=new Array(len1);for(var i1=0;i1<len1;i1++){newArr1[i1]=arr1[i1];}var foo=newArr1;}}'
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
        output: 'var i,len,newArr;function abc(){let arr,_i;{var arr1=1;{"use strict";const len1=arr1.length;const newArr1=new Array(len1);for(var i1=0;i1<len1;i1++){newArr1[i1]=arr1[i1];}var _mapResult=newArr1;}}return _mapResult;}'
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
        output: 'var len;{var arr;{const len1=arr.length;function foo(){return len1;}var data=len1+1;}}'
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
        output: 'var i;{{let sum,i2;{var arr;{"use strict";const len=arr.length;const newArr=new Array(len);for(var i1=0;i1<len;i1++){newArr[i1]=arr[i1];}var _mapResult=newArr;}}i=_mapResult;}}'
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
    _withoutReturn: {
        source: `
            function bar_() {
              var i = 10; 
              return map_();
            }
            
            function map_() {
              var i = 10;
            }
            
            var i; 
            i = bar_()        
            
            `,
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
        output: '{{for(var len=_this.length,newArr=new Array(len),i=0;i<len;i++){{var lUser=_this[i];{{{for(var len1=_this2.length,newArr1=[],i1=0;i1<len1;i1++){var val=_this2[i1];{var user=val;{var _result1=lUser.id==user.id;}}if(_result1)newArr1.push(val);}var _filterResult=newArr1;}}var _result2=_filterResult;}}newArr[i]=_result2;}var data=newArr;}}'
    },

    sixDeepLevel: {
        source: `
        
        function map_(mapFn_) {
          return mapFn_(1);
        }
        
        function filter_(filterFn_) {
          return filterFn_(2);
        }
        
        function every_(everyFn_) {
          return everyFn_(3);
        }
        
        var data = map_((v1)=>{
          return v1 + filter_((v2)=>{
            return v2 + every_((v3) => {
              return v3 + 1
            })
          })
        });

        `,
        output: '{{{var v1=1;{{{{var v2=2;{{{{var v3=3;{var _everyResult=v3+1;}}}}var _filterResult=v2+_everyResult;}}}}var data=v1+_filterResult;}}}}'
    },

    reduce: {
        source: `
        function reduce_(fn_, init){
          var res = init;
          for (var i=0; i < this.length; i++){
             res = fn_(res, this[i], i);
          }
          return res;
        }
        
        var x = [1,1,1].reduce_((aggr, val) => {return aggr + val}, 0);
        `,
        output: '{var _this=[1,1,1],init=0;{var res=init;for(var i=0;i<_this.length;i++){{var aggr=res,val=_this[i];{res=aggr+val;}}}var x=res;}}'
    }

};


function printCode(title, nodePath, ast) {
    const root = nodePath.getAncestry().pop().node;
    console.log(title, Babel.transformFromAst(ast || root, '', {compact: false}).code);
}

function printFromAst(title, ast) {
    console.log(title, Babel.transformFromAst(t.program([t.isStatement(ast) ? ast : t.expressionStatement(ast)]), '', {compact: false}).code);
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
    if (_limit[name]++ > 10000) {
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

const inlinerPlugin = (parentPath, fnName)=>function (obj) {
    var t = obj.types;
    window.t = t;
    window.pluginObj = obj;
    const regexp = new RegExp(`(\d+)?(${postfix})?$`);

    const rawFnName = fnName.replace(regexp, '');
    const parentScope = parentPath.scope;
    const parentParentPath = parentPath.parentPath;

    const callIsStatement = t.isExpressionStatement(parentParentPath);
    let useParentResultIdentifier = t.isAssignmentExpression(parentParentPath) && t.isIdentifier(parentParentPath.node.left) && parentParentPath.node.operator == '=';
    let resultIdentifier = callIsStatement ? null : (useParentResultIdentifier ? t.identifier(parentParentPath.node.left.name) : null);
    let resultIsDeclared = useParentResultIdentifier;
    let remove = callIsStatement || useParentResultIdentifier;
    let returnIsUsed = false;
    if (t.isVariableDeclarator(parentParentPath) && parentParentPath.parentPath.node.kind == 'var') {
        useParentResultIdentifier = true;
        resultIdentifier = t.identifier(parentParentPath.node.id.name);
        resultIsDeclared = false;
        remove = true;
    }


    let labelIdentifier;
    const variables = [];
    let thisIdentifier;
    const thisValue = t.isMemberExpression(parentPath.node.callee) ? parentPath.node.callee.object : t.nullLiteral();

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

    function findName(key, scope1, scope2) {
        let newKey = '';
        const hasPostFix = key.substr(-postfix.length) == postfix;
        const rawKey = key.replace(regexp, '');
        let num = 0;
        do {
            newKey = rawKey + (num == 0 ? '' : num) + (hasPostFix ? '_' : '');
            num++;
        } while (scope1.hasBinding(newKey) || scope1.hasGlobal(newKey) || scope1.hasReference(newKey) || scope2.hasBinding(newKey) || scope2.hasGlobal(newKey) || scope2.hasReference(newKey));
        var program = parentScope.getProgramParent();
        program.references[newKey] = true;
        program.uids[newKey] = true;
        return newKey;
    }


    var replaceReturn = function (node) {
        returnIsUsed = true;
        if (!callIsStatement) {
            if (resultIsDeclared) {
                return t.expressionStatement(t.assignmentExpression('=', resultIdentifier, node.argument));
            } else {
                resultIsDeclared = true;
                return t.variableDeclaration('var', [t.variableDeclarator(resultIdentifier, node.argument)]);
            }
        } else {
            if (!t.isIdentifier(node.argument)) {
                return t.expressionStatement(node.argument);
            }
        }
    };

    return {
        visitor: {
            Function: {
                enter(path) {
                    if (!checkFunctionIsTop(path)) {
                        return;
                    }
                    path._targetFunction = true;
                    checkLimitCall('SourcePreparerFunctionEnter');

                    const body = path.get('body');

                    labelIdentifier = t.identifier(findName(rawFnName + 'Lab', parentScope, body.scope));
                    if (!useParentResultIdentifier) {
                        resultIdentifier = t.identifier(findName(rawFnName + 'Ret', parentScope, body.scope));
                    }

                    const scope = body.scope;

                    const allBindings = scope.getAllBindings();
                    const keys = Object.keys(allBindings);

                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        if (parentScope.hasBinding(key)) {
                            let newKey = findName(key, parentScope, path.scope);
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

                    if (!returnIsUsed) {
                        const ret = replaceReturn(t.returnStatement(t.identifier('undefined')));
                        if (ret) {
                            replaceBody.push(ret);
                        }
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
                    if (!thisIdentifier) {
                        thisIdentifier = t.identifier(findName('_this', parentScope, path.scope));
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
                    const ret = replaceReturn(path.node);
                    if (ret) {
                        replace.push(ret);
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

function inlinePath(ast, path, fnName) {
    const code = Babel.transformFromAst(ast, '', {
        compact: false,
        presets: ['stage-0']
    }).code;
    const output = Babel.transform(code, {
        plugins: [inlinerPlugin(path, fnName)],
        compact: false,
        presets: ['stage-0']
    });
    return output.ast;
}

function findNameBinding(path, name) {
    let scope = path.scope;
    while (scope) {
        var binding = scope.bindings[name];
        if (binding) {
            return binding;
        }
        scope = scope.parent;
    }
    return null;
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
                    // console.log(path.node, fnName);
                    if (fnName.substr(-postfix.length) == postfix) {
                        let binding = findNameBinding(path, fnName);

                        if (binding && (binding.kind == 'hoisted' || binding.kind == 'var')) {
                            // console.log(fnName);

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

                                const bindingScope = binding.scope;

                                // const parentPath = path.parentPath;
                                // binding = path.scope.getAllBindings()[fnName];
                                // if (fnName == 'everyFn_') debugger;
                                // printCode('before ' + fnName, path);
                                inlinePath(t.program([t.expressionStatement(funExp)]), path, fnName);
                                // printCode('after ' + fnName, path);

                                // const oldBinding = binding;
                                bindingScope.crawl();
                                binding = bindingScope.bindings[fnName];

                                // console.log('af', fnName, binding, bindingScope);
                                if (binding) {
                                    const refs = binding.referencePaths;
                                    if (refs.length == 0) {
                                        binding.path.remove();
                                    } else {
                                        console.log('Not all usings inlined', binding.path);
                                    }
                                }
                                // printCode(fnName, path);
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
