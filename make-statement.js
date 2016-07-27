/*
 export type Expression = ArrayExpression | AssignmentExpression | BinaryExpression | CallExpression | ConditionalExpression | FunctionExpression | Identifier | StringLiteral | NumericLiteral | BooleanLiteral | RegExpLiteral | LogicalExpression | MemberExpression | NewExpression | ObjectExpression | SequenceExpression | ThisExpression | UnaryExpression | UpdateExpression | ArrowFunctionExpression | ClassExpression | MetaProperty | Super | TaggedTemplateExpression | TemplateLiteral | YieldExpression | TypeCastExpression | JSXElement | JSXEmptyExpression | JSXIdentifier | JSXMemberExpression | ParenthesizedExpression | AwaitExpression | BindExpression | DoExpression;
 export type Binary = BinaryExpression | LogicalExpression;
 export type Scopable = BlockStatement | CatchClause | DoWhileStatement | ForInStatement | ForStatement | FunctionDeclaration | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement | ArrowFunctionExpression | ClassDeclaration | ClassExpression | ForOfStatement | ClassMethod;
 export type BlockParent = BlockStatement | DoWhileStatement | ForInStatement | ForStatement | FunctionDeclaration | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement | ArrowFunctionExpression | ForOfStatement | ClassMethod;
 export type Block = BlockStatement | Program;
 export type Statement = BlockStatement | BreakStatement | ContinueStatement | DebuggerStatement | DoWhileStatement | EmptyStatement | ExpressionStatement | ForInStatement | ForStatement | FunctionDeclaration | IfStatement | LabeledStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | VariableDeclaration | WhileStatement | WithStatement | ClassDeclaration | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ForOfStatement | ImportDeclaration | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias;
 export type Terminatorless = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement | YieldExpression | AwaitExpression;
 export type CompletionStatement = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement;
 export type Conditional = ConditionalExpression | IfStatement;
 export type Loop = DoWhileStatement | ForInStatement | ForStatement | WhileStatement | ForOfStatement;
 export type While = DoWhileStatement | WhileStatement;
 export type ExpressionWrapper = ExpressionStatement | TypeCastExpression | ParenthesizedExpression;
 export type For = ForInStatement | ForStatement | ForOfStatement;
 export type ForXStatement = ForInStatement | ForOfStatement;
 export type Function = FunctionDeclaration | FunctionExpression | ObjectMethod | ArrowFunctionExpression | ClassMethod;
 export type FunctionParent = FunctionDeclaration | FunctionExpression | Program | ObjectMethod | ArrowFunctionExpression | ClassMethod;
 export type Pureish = FunctionDeclaration | FunctionExpression | StringLiteral | NumericLiteral | BooleanLiteral | ArrowFunctionExpression | ClassDeclaration | ClassExpression;
 export type Declaration = FunctionDeclaration | VariableDeclaration | ClassDeclaration | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias;
 export type LVal = Identifier | MemberExpression | RestElement | AssignmentPattern | ArrayPattern | ObjectPattern;
 export type Literal = StringLiteral | NumericLiteral | BooleanLiteral | RegExpLiteral | TemplateLiteral;
 export type Immutable = StringLiteral | NumericLiteral | BooleanLiteral | JSXAttribute | JSXClosingElement | JSXElement | JSXExpressionContainer | JSXOpeningElement;
 export type UserWhitespacable = ObjectMethod | ObjectProperty | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeProperty;
 export type Method = ObjectMethod | ClassMethod;
 export type ObjectMember = ObjectMethod | ObjectProperty;
 export type Property = ObjectProperty | ClassProperty;
 export type UnaryLike = UnaryExpression | SpreadElement | RestProperty | SpreadProperty;
 export type Pattern = AssignmentPattern | ArrayPattern | ObjectPattern;
 export type Class = ClassDeclaration | ClassExpression;
 export type ModuleDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration;
 export type ExportDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration;
 export type ModuleSpecifier = ExportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier | ExportDefaultSpecifier | ExportNamespaceSpecifier;
 export type Flow = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation | BooleanLiteralTypeAnnotation | ClassImplements | ClassProperty | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | ExistentialTypeParam | FunctionTypeAnnotation | FunctionTypeParam | GenericTypeAnnotation | InterfaceExtends | InterfaceDeclaration | IntersectionTypeAnnotation | MixedTypeAnnotation | NullableTypeAnnotation | NumericLiteralTypeAnnotation | NumberTypeAnnotation | StringLiteralTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation | TypeofTypeAnnotation | TypeAlias | TypeAnnotation | TypeCastExpression | TypeParameterDeclaration | TypeParameterInstantiation | ObjectTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeProperty | QualifiedTypeIdentifier | UnionTypeAnnotation | VoidTypeAnnotation;
 export type FlowTypeAnnotation = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation | BooleanLiteralTypeAnnotation | FunctionTypeAnnotation | GenericTypeAnnotation | IntersectionTypeAnnotation | MixedTypeAnnotation | NullableTypeAnnotation | NumericLiteralTypeAnnotation | NumberTypeAnnotation | StringLiteralTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation | TypeofTypeAnnotation | TypeAnnotation | ObjectTypeAnnotation | UnionTypeAnnotation | VoidTypeAnnotation;
 export type FlowBaseAnnotation = AnyTypeAnnotation | BooleanTypeAnnotation | MixedTypeAnnotation | NumberTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | VoidTypeAnnotation;
 export type FlowDeclaration = DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias;
 export type JSX = JSXAttribute | JSXClosingElement | JSXElement | JSXEmptyExpression | JSXExpressionContainer | JSXIdentifier | JSXMemberExpression | JSXNamespacedName | JSXOpeningElement | JSXSpreadAttribute | JSXText;

 */
/*
 NodePath Methods
 [
 "getScope",
 "setData",
 "getData",
 "buildCodeFrameError",
 "traverse",
 "mark",
 "set",
 "getPathLocation",
 "debug",
 "__esModule",
 "findParent",
 "find",
 "getFunctionParent",
 "getStatementParent",
 "getEarliestCommonAncestorFrom",
 "getDeepestCommonAncestorFrom",
 "getAncestry",
 "inType",
 "inShadow",
 "getTypeAnnotation",
 "_getTypeAnnotation",
 "isBaseType",
 "couldBeBaseType",
 "baseTypeStrictlyMatches",
 "isGenericType",
 "replaceWithMultiple",
 "replaceWithSourceString",
 "replaceWith",
 "_replaceWith",
 "replaceExpressionWithStatements",
 "replaceInline",
 "evaluateTruthy",
 "evaluate",
 "toComputedKey",
 "ensureBlock",
 "arrowFunctionToShadowed",
 "is",
 "matchesPattern",
 "has",
 "isStatic",
 "isnt",
 "equals",
 "isNodeType",
 "canHaveVariableDeclarationOrExpression",
 "canSwapBetweenExpressionAndStatement",
 "isCompletionRecord",
 "isStatementOrBlock",
 "referencesImport",
 "getSource",
 "willIMaybeExecuteBefore",
 "_guessExecutionStatusRelativeTo",
 "_guessExecutionStatusRelativeToDifferentFunctions",
 "resolve",
 "_resolve",
 "call",
 "_call",
 "isBlacklisted",
 "visit",
 "skip",
 "skipKey",
 "stop",
 "setScope",
 "setContext",
 "resync",
 "_resyncParent",
 "_resyncKey",
 "_resyncList",
 "_resyncRemoved",
 "popContext",
 "pushContext",
 "setup",
 "setKey",
 "requeue",
 "_getQueueContexts",
 "remove",
 "_callRemovalHooks",
 "_remove",
 "_markRemoved",
 "_assertUnremoved",
 "insertBefore",
 "_containerInsert",
 "_containerInsertBefore",
 "_containerInsertAfter",
 "_maybePopFromStatements",
 "insertAfter",
 "updateSiblingKeys",
 "_verifyNodeList",
 "unshiftContainer",
 "pushContainer",
 "hoist",
 "getOpposite",
 "getCompletionRecords",
 "getSibling",
 "get",
 "_getKey",
 "_getPattern",
 "getBindingIdentifiers",
 "getOuterBindingIdentifiers",
 "shareCommentsWithSiblings",
 "addComment",
 "addComments",
 "isArrayExpression",
 "assertArrayExpression",
 "isAssignmentExpression",
 "assertAssignmentExpression",
 "isBinaryExpression",
 "assertBinaryExpression",
 "isDirective",
 "assertDirective",
 "isDirectiveLiteral",
 "assertDirectiveLiteral",
 "isBlockStatement",
 "assertBlockStatement",
 "isBreakStatement",
 "assertBreakStatement",
 "isCallExpression",
 "assertCallExpression",
 "isCatchClause",
 "assertCatchClause",
 "isConditionalExpression",
 "assertConditionalExpression",
 "isContinueStatement",
 "assertContinueStatement",
 "isDebuggerStatement",
 "assertDebuggerStatement",
 "isDoWhileStatement",
 "assertDoWhileStatement",
 "isEmptyStatement",
 "assertEmptyStatement",
 "isExpressionStatement",
 "assertExpressionStatement",
 "isFile",
 "assertFile",
 "isForInStatement",
 "assertForInStatement",
 "isForStatement",
 "assertForStatement",
 "isFunctionDeclaration",
 "assertFunctionDeclaration",
 "isFunctionExpression",
 "assertFunctionExpression",
 "isIdentifier",
 "assertIdentifier",
 "isIfStatement",
 "assertIfStatement",
 "isLabeledStatement",
 "assertLabeledStatement",
 "isStringLiteral",
 "assertStringLiteral",
 "isNumericLiteral",
 "assertNumericLiteral",
 "isNullLiteral",
 "assertNullLiteral",
 "isBooleanLiteral",
 "assertBooleanLiteral",
 "isRegExpLiteral",
 "assertRegExpLiteral",
 "isLogicalExpression",
 "assertLogicalExpression",
 "isMemberExpression",
 "assertMemberExpression",
 "isNewExpression",
 "assertNewExpression",
 "isProgram",
 "assertProgram",
 "isObjectExpression",
 "assertObjectExpression",
 "isObjectMethod",
 "assertObjectMethod",
 "isObjectProperty",
 "assertObjectProperty",
 "isRestElement",
 "assertRestElement",
 "isReturnStatement",
 "assertReturnStatement",
 "isSequenceExpression",
 "assertSequenceExpression",
 "isSwitchCase",
 "assertSwitchCase",
 "isSwitchStatement",
 "assertSwitchStatement",
 "isThisExpression",
 "assertThisExpression",
 "isThrowStatement",
 "assertThrowStatement",
 "isTryStatement",
 "assertTryStatement",
 "isUnaryExpression",
 "assertUnaryExpression",
 "isUpdateExpression",
 "assertUpdateExpression",
 "isVariableDeclaration",
 "assertVariableDeclaration",
 "isVariableDeclarator",
 "assertVariableDeclarator",
 "isWhileStatement",
 "assertWhileStatement",
 "isWithStatement",
 "assertWithStatement",
 "isAssignmentPattern",
 "assertAssignmentPattern",
 "isArrayPattern",
 "assertArrayPattern",
 "isArrowFunctionExpression",
 "assertArrowFunctionExpression",
 "isClassBody",
 "assertClassBody",
 "isClassDeclaration",
 "assertClassDeclaration",
 "isClassExpression",
 "assertClassExpression",
 "isExportAllDeclaration",
 "assertExportAllDeclaration",
 "isExportDefaultDeclaration",
 "assertExportDefaultDeclaration",
 "isExportNamedDeclaration",
 "assertExportNamedDeclaration",
 "isExportSpecifier",
 "assertExportSpecifier",
 "isForOfStatement",
 "assertForOfStatement",
 "isImportDeclaration",
 "assertImportDeclaration",
 "isImportDefaultSpecifier",
 "assertImportDefaultSpecifier",
 "isImportNamespaceSpecifier",
 "assertImportNamespaceSpecifier",
 "isImportSpecifier",
 "assertImportSpecifier",
 "isMetaProperty",
 "assertMetaProperty",
 "isClassMethod",
 "assertClassMethod",
 "isObjectPattern",
 "assertObjectPattern",
 "isSpreadElement",
 "assertSpreadElement",
 "isSuper",
 "assertSuper",
 "isTaggedTemplateExpression",
 "assertTaggedTemplateExpression",
 "isTemplateElement",
 "assertTemplateElement",
 "isTemplateLiteral",
 "assertTemplateLiteral",
 "isYieldExpression",
 "assertYieldExpression",
 "isAnyTypeAnnotation",
 "assertAnyTypeAnnotation",
 "isArrayTypeAnnotation",
 "assertArrayTypeAnnotation",
 "isBooleanTypeAnnotation",
 "assertBooleanTypeAnnotation",
 "isBooleanLiteralTypeAnnotation",
 "assertBooleanLiteralTypeAnnotation",
 "isNullLiteralTypeAnnotation",
 "assertNullLiteralTypeAnnotation",
 "isClassImplements",
 "assertClassImplements",
 "isClassProperty",
 "assertClassProperty",
 "isDeclareClass",
 "assertDeclareClass",
 "isDeclareFunction",
 "assertDeclareFunction",
 "isDeclareInterface",
 "assertDeclareInterface",
 "isDeclareModule",
 "assertDeclareModule",
 "isDeclareTypeAlias",
 "assertDeclareTypeAlias",
 "isDeclareVariable",
 "assertDeclareVariable",
 "isExistentialTypeParam",
 "assertExistentialTypeParam",
 "isFunctionTypeAnnotation",
 "assertFunctionTypeAnnotation",
 "isFunctionTypeParam",
 "assertFunctionTypeParam",
 "isGenericTypeAnnotation",
 "assertGenericTypeAnnotation",
 "isInterfaceExtends",
 "assertInterfaceExtends",
 "isInterfaceDeclaration",
 "assertInterfaceDeclaration",
 "isIntersectionTypeAnnotation",
 "assertIntersectionTypeAnnotation",
 "isMixedTypeAnnotation",
 "assertMixedTypeAnnotation",
 "isNullableTypeAnnotation",
 "assertNullableTypeAnnotation",
 "isNumericLiteralTypeAnnotation",
 "assertNumericLiteralTypeAnnotation",
 "isNumberTypeAnnotation",
 "assertNumberTypeAnnotation",
 "isStringLiteralTypeAnnotation",
 "assertStringLiteralTypeAnnotation",
 "isStringTypeAnnotation",
 "assertStringTypeAnnotation",
 "isThisTypeAnnotation",
 "assertThisTypeAnnotation",
 "isTupleTypeAnnotation",
 "assertTupleTypeAnnotation",
 "isTypeofTypeAnnotation",
 "assertTypeofTypeAnnotation",
 "isTypeAlias",
 "assertTypeAlias",
 "isTypeAnnotation",
 "assertTypeAnnotation",
 "isTypeCastExpression",
 "assertTypeCastExpression",
 "isTypeParameter",
 "assertTypeParameter",
 "isTypeParameterDeclaration",
 "assertTypeParameterDeclaration",
 "isTypeParameterInstantiation",
 "assertTypeParameterInstantiation",
 "isObjectTypeAnnotation",
 "assertObjectTypeAnnotation",
 "isObjectTypeCallProperty",
 "assertObjectTypeCallProperty",
 "isObjectTypeIndexer",
 "assertObjectTypeIndexer",
 "isObjectTypeProperty",
 "assertObjectTypeProperty",
 "isQualifiedTypeIdentifier",
 "assertQualifiedTypeIdentifier",
 "isUnionTypeAnnotation",
 "assertUnionTypeAnnotation",
 "isVoidTypeAnnotation",
 "assertVoidTypeAnnotation",
 "isJSXAttribute",
 "assertJSXAttribute",
 "isJSXClosingElement",
 "assertJSXClosingElement",
 "isJSXElement",
 "assertJSXElement",
 "isJSXEmptyExpression",
 "assertJSXEmptyExpression",
 "isJSXExpressionContainer",
 "assertJSXExpressionContainer",
 "isJSXIdentifier",
 "assertJSXIdentifier",
 "isJSXMemberExpression",
 "assertJSXMemberExpression",
 "isJSXNamespacedName",
 "assertJSXNamespacedName",
 "isJSXOpeningElement",
 "assertJSXOpeningElement",
 "isJSXSpreadAttribute",
 "assertJSXSpreadAttribute",
 "isJSXText",
 "assertJSXText",
 "isNoop",
 "assertNoop",
 "isParenthesizedExpression",
 "assertParenthesizedExpression",
 "isAwaitExpression",
 "assertAwaitExpression",
 "isBindExpression",
 "assertBindExpression",
 "isDecorator",
 "assertDecorator",
 "isDoExpression",
 "assertDoExpression",
 "isExportDefaultSpecifier",
 "assertExportDefaultSpecifier",
 "isExportNamespaceSpecifier",
 "assertExportNamespaceSpecifier",
 "isRestProperty",
 "assertRestProperty",
 "isSpreadProperty",
 "assertSpreadProperty",
 "isExpression",
 "assertExpression",
 "isBinary",
 "assertBinary",
 "isScopable",
 "assertScopable",
 "isBlockParent",
 "assertBlockParent",
 "isBlock",
 "assertBlock",
 "isStatement",
 "assertStatement",
 "isTerminatorless",
 "assertTerminatorless",
 "isCompletionStatement",
 "assertCompletionStatement",
 "isConditional",
 "assertConditional",
 "isLoop",
 "assertLoop",
 "isWhile",
 "assertWhile",
 "isExpressionWrapper",
 "assertExpressionWrapper",
 "isFor",
 "assertFor",
 "isForXStatement",
 "assertForXStatement",
 "isFunction",
 "assertFunction",
 "isFunctionParent",
 "assertFunctionParent",
 "isPureish",
 "assertPureish",
 "isDeclaration",
 "assertDeclaration",
 "isLVal",
 "assertLVal",
 "isLiteral",
 "assertLiteral",
 "isImmutable",
 "assertImmutable",
 "isUserWhitespacable",
 "assertUserWhitespacable",
 "isMethod",
 "assertMethod",
 "isObjectMember",
 "assertObjectMember",
 "isProperty",
 "assertProperty",
 "isUnaryLike",
 "assertUnaryLike",
 "isPattern",
 "assertPattern",
 "isClass",
 "assertClass",
 "isModuleDeclaration",
 "assertModuleDeclaration",
 "isExportDeclaration",
 "assertExportDeclaration",
 "isModuleSpecifier",
 "assertModuleSpecifier",
 "isFlow",
 "assertFlow",
 "isFlowBaseAnnotation",
 "assertFlowBaseAnnotation",
 "isFlowDeclaration",
 "assertFlowDeclaration",
 "isJSX",
 "assertJSX",
 "isNumberLiteral",
 "assertNumberLiteral",
 "isRegexLiteral",
 "assertRegexLiteral",
 "isReferencedIdentifier",
 "isReferencedMemberExpression",
 "isBindingIdentifier",
 "isScope",
 "isReferenced",
 "isBlockScoped",
 "isVar",
 "isUser",
 "isGenerated",
 "isPure"
 ]*/

var input = `for(;;)map();`;
var input = `const a = (c = 1, map())`;
var input = `1 && map()`;
var input = `[1, map()]`;
var input = `x = {a: 1, b: map()}`;
var input = `const a=1, b=map();`;
var input = `while(1){foo();map()};`;
var input = `if (1)map()`;
var input = `1 ? 2 : map()`;
var input = `1 ? 2 : (3 ? map() : 4)`;


function parseCode(code) {
    const result = Babel.transform(code, {compact: false, presets: ['stage-0']});
    return JSON.stringify(result.ast.program.body, (k, v) => {
            if (k == 'start' || k == 'end' || k == 'loc') return void 0;
            return v
        }, 3) + '\n' + result.code;
}


function formatAst(ast) {
    return JSON.stringify(ast, (k, v) => k == 'start' || k == 'end' || k == 'loc' ? void 0 : v, 3);
}


function deepCloneNode(node) {
    if (node == null || node == undefined || typeof node == 'number' || typeof node == 'string' || typeof node == 'boolean' || typeof node == 'function' || typeof node == 'symbol') {
        return node;
    }
    if (Array.isArray(node)) {
        const arr = [];
        for (var i = 0; i < node.length; i++) {
            arr[i] = deepCloneNode(node[i]);
        }
        return arr;
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
    var t = obj.types;
    window.t = t;
    window.pluginObj = obj;


    function check(nodePath) {
        // console.log(nodePath.parentPath);

        const parentNodePath = nodePath.parentPath;
        if (t.isObjectProperty(parentNodePath)) {
            for (var i = 0; i < parentNodePath.key; i++) {
                makeStatement(parentNodePath.getSibling(i).get('value'));
            }
        }
        else if (t.isArrayExpression(parentNodePath)) {
            for (var i = 0; i < nodePath.key; i++) {
                makeStatement(nodePath.getSibling(i));
            }
        }
        else if (t.isVariableDeclarator(parentNodePath)) {
            console.log(parentNodePath);

            for (var i = 0; i < parentNodePath.key; i++) {
                makeStatement(parentNodePath.getSibling(i).get('init'));
            }
        }
        else if (t.isLogicalExpression(parentNodePath)) {
            if (nodePath.key == 'right') {
                makeStatement(nodePath.getSibling('left'));
            }
        }
        else if (t.isSequenceExpression(parentNodePath)) {
            for (var i = 0; i < nodePath.key; i++) {
                makeStatement(nodePath.getSibling(i));
            }
        }
    }

    function findExpressionStatement(path) {
        do {
            if (t.isExpressionStatement(path.container)) {
                return path;
            }
        } while (path = path.parentPath);
    }


    function makeStatement(nodePath) {
        const expStatement = findExpressionStatement(nodePath);
        const identifier = nodePath.scope.generateUidIdentifier();
        const variable = t.variableDeclaration('var', [t.variableDeclarator(identifier, nodePath.node)])
        expStatement.insertBefore(variable);
        nodePath.replaceWith(identifier);
    }


    function makeStatementFromConditionExp(nodePath) {
        const expStatement = findExpressionStatement(nodePath);
        const identifier = nodePath.scope.generateUidIdentifier();
        const variable = t.variableDeclaration('var', [t.variableDeclarator(identifier, t.nullLiteral())]);
        const ifStatement = t.ifStatement((nodePath.node.test),
            t.expressionStatement(t.assignmentExpression("=", identifier, (nodePath.node.consequent))),
            t.expressionStatement(t.assignmentExpression("=", identifier, (nodePath.node.alternate)))
        );
        const insertedPathNodes = expStatement.insertBefore([variable, ifStatement]);
        const ifStatementPathNode = insertedPathNodes[0].get("body")[1];
        nodePath.replaceWith(identifier);
        // nodePath.resync();
    }

    return {
        visitor: {
            CallExpression: {
                enter(nodePath) {
                    if (nodePath.node.callee.name == 'map') {

                        let parentPath = nodePath;
                        const noExprParents = [];
                        while (parentPath = parentPath.parentPath) {
                            if (!t.isStatement(parentPath) && !t.isBlock(parentPath)) {
                                noExprParents.push(parentPath);
                            }
                        }
                        let resynced = false;
                        for (var i = noExprParents.length - 1; i >= 0; i--) {
                            var parent = noExprParents[i];
                            if (t.isConditionalExpression(parent)) {
                                makeStatementFromConditionExp(parent);
                                resynced = true;
                            }
                        }

                        if (!resynced) {
                            nodePath.node.callee.name = 'xmap';
                            makeStatement(nodePath);
                        }
                        // console.log('CallExpressionEnter', formatAst(nodePath.node));
                    }
                },

                exit(nodePath) {
                    // formatAst('CallExpressionExit', formatAst(nodePath.node))
                }
            }
        }
    }
};
var output = Babel.transform(input, {plugins: [plugin], compact: false, presets: ['stage-0']});
console.log(output.code);
console.log(output.ast);


// console.log(output);