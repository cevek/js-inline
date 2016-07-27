import {NodePath} from "babel-traverse";
(window as any).require = function () {
    return (window as any).Babel;
};
import Babel = require('babel-core');
import * as types from "babel-types";
import {Identifier} from "babel-types";

var input = `
var map = function (arr, fn){ 
                        const newArr = new Array(arr.length); 
                        for (let i = 0; i<arr.length; i++) {
                            const item = newArr[i];
                            newArr[i] = fn(item, i)
                        } 
                        return newArr;
                    }
                    
const newArr = []; 
let b; 
const a = 1; 
(b = (map(a, item => item + 1))); 
const c = 3;`;

function parseToAst(code):types.Node {
    return Babel.transform(code, {compact: false, presets: ['es2015', 'stage-0']}).ast.program.body;
}

function printAst(code):types.Node {
    const result = Babel.transform(code, {compact: false, presets: ['stage-0']});
    return JSON.stringify(result.ast.program.body, (k, v) => {
            if (k == 'start' || k == 'end' || k == 'loc') return void 0;
            return v
        }, 3) + '\n' + result.code;
}
//|  ArrayExpression | ObjectExpression | ConditionalExpression | LogicalExpression | SequenceExpression | VariableDeclaration
//|      AssignmentExpression | BinaryExpression | CallExpression
//|      FunctionExpression | Identifier
//|      StringLiteral | NumericLiteral | BooleanLiteral | RegExpLiteral
//|      MemberExpression | NewExpression
//|      ThisExpression | UnaryExpression | UpdateExpression | ArrowFunctionExpression
//|      ClassExpression | MetaProperty | Super | TaggedTemplateExpression | TemplateLiteral
//|      YieldExpression | TypeCastExpression
//|      JSXElement | JSXEmptyExpression | JSXIdentifier | JSXMemberExpression
//|      ParenthesizedExpression | AwaitExpression | BindExpression | DoExpression

//|  BlockParent = BlockStatement | DoWhileStatement | ForInStatement | ForStatement | FunctionDeclaration
//|       FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement
//|       ArrowFunctionExpression | ForOfStatement | ClassMethod;

function deepCloneNode(node) {
    if (node == null || node == undefined || typeof node == 'number' || typeof node == 'string' || typeof node == 'boolean' || typeof node == 'function' || typeof node == 'symbol') {
        return node;
    }
    if (Array.isArray(node)) {
        return node.slice();
    }
    const keys = Object.keys(node);
    const obj = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        obj[key] = deepCloneNode(node[key]);
    }
    return obj;
}


const plugin = function (obj) {
    var Plugin = obj.Plugin;
    var t:typeof types = obj.types;
    (window as any).plugin = obj;




    function getFullName(node) {
        if (t.isMemberExpression(node)) {
            return getFullName(node.object) + '.' + getFullName(node.property);
        }
        if (t.isIdentifier(node)) {
            return node.name;
        }
        if (t.isLiteral(node)) {
            return node.value;
        }
        return '';
    }

    function createVariable(name, value) {
        return t.variableDeclaration('var', [t.variableDeclarator(t.identifier(name), value)])
    }

    let counter = 0;

    const functions = {};

    return {
        visitor: {
            FunctionExpression: {
                exit(nodePath){
                    console.log('FunctionExpression', nodePath.container.id.name, nodePath);
                    functions[nodePath.container.id.name] = nodePath;
                }
            },
            CallExpression: {
                enter(nodePath:NodePath<any>, parent, scope, file) {
                    console.log("callExpression", nodePath.node.callee.name);

                    if (counter++ > 10) {
                        throw new Error('something goes wrong');
                    }


                    nodePath.remove()

                    const fnName = nodePath.node.callee.name;
                    if (fnName == 'map' || fnName == 'fn') {
                        const fnPath = functions[fnName];
                        if (!fnPath) {
                            // throw new Error('fn not found');
                            return;
                        }


                        const parentStatement = nodePath.getStatementParent();
                        // nodePath.isReferencedIdentifier()

                        // const lit = parseToAst('123');
                        let path = nodePath.parentPath;
                        let subPath = nodePath;
                        while (path && !path.isStatement()) {
                            subPath = path;
                            path = path.parentPath
                        }
                        const pos = path.container.indexOf(subPath.container);
                        if (pos > -1) {
                            console.log('Yeah');

                            const fnParams = fnPath.node.params;

                            const args = fnParams.map((param, i) => t.variableDeclaration('var', [t.variableDeclarator(param, nodePath.node.arguments[i])]));
                            // const nodeAfter = path.container[pos];
                            // nodePath.parentPath.insertBefore(...args, ...statement[0].body);
                            const cloneArgs = deepCloneNode(args);
                            const cloneBody = deepCloneNode(fnPath.node.body.body);
                            const returnStatement = cloneBody.pop();

                            path.insertBefore(cloneArgs);
                            path.insertBefore(cloneBody);

                            nodePath.replaceWith(returnStatement.argument);

                            nodePath.scope.rename('newArr', '_newArr');


                            // path.container.splice(pos, 0, ...args, ...statement[0].body);
                        }
                        // nodePath.resolve;

                        // path.container.push(t.variableDeclaration('const', [t.variableDeclarator(t.identifier('newArr'), t.numericLiteral(123))]));

                        // nodePath.replaceInline(t.variableDeclaration('const', [t.variableDeclarator(t.identifier('newArr'), t.numericLiteral(123))]));
                        // nodePath.replaceExpressionWithStatements(forStatement);
                        // if (nodePath.containerproperty.name == 'map') {
                        //
                        // }

                        // console.log(nodePath.node.property.name);
                        // if ((nodePath.node.callee.property as types.Identifier).name == 'map') {
                        //     console.log(nodePath, parent);
                        // }


                        /*

                         var name = getFullName(nodePath.node.callee);
                         if (name == 'React.createElement' || name == '_react2.default.createElement') {
                         nodePath.replaceWith(
                         React(nodePath.node)
                         );
                         }
                         */
                    }
                }
            }
        }
    }
        ;
};
var output = Babel.transform(input, {plugins: [plugin], compact: false, presets: ['es2015']});
console.log(output.code);
console.log(output.ast);


// console.log(output);