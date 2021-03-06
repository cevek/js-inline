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

// var input = `for(;;)map();`;
// var input = `x=1,map()`;
// var input = `const x=1,b=map()`;
// var input = `const a = (c = 1, map())`;
// var input = `const x=1,b=(1,map())`;
// var input = `1 && map()`;
// var input = `1 || map()`;
// var input = `[1, map()]`;
// var input = `x = {a: 1, b: map()}`;
// var input = `while(1){foo();map()};`;
// var input = `if (1)map()`;
// var input = `if (1);else map()`;
// var input = `1 ? 2 : map()`;
// var input = `1 ? 2 : (3 ? map() : 4)`;
// var input = `const b = 1 ? 2 : (2.1, (3 ? map() : 4))`;
// var input = `function render(){ return div(this.show ? div(this.item && div(map())) : null) }`;

const tests = {
    simpleFor: {
        source: 'for(;;)map();',
        output: 'for(;;){_$=xmap();_$;}'
    },
    _forInit: {
        source: 'for(a = map();;);',
        output: 'for(a=map();;);'
    },
    _forInitWithVar: {
        source: 'for(var a = map();;);',
        output: 'for(var a=map();;);'
    },
    _forInitWithComplexVar: {
        source: 'for(var a = 1, b = a + map();;);',
        output: 'for(var a=1,b=a+map();;);'
    },
    simpleWhile: {
        source: 'while(1){foo();map()};',
        output: 'while(1){foo();_$=xmap();_$;};'
    },
    simpleSequence: {
        source: 'x=1,map()',
        output: 'x=1;_$2=xmap();_$=_$2;_$;'
    },
    sequenceWithBinaryExp: {
        source: 'x==1,map()',
        output: 'x==1;_$2=xmap();_$=_$2;_$;'
    },
    simpleVariableSequence: {
        source: 'const x=1,b=map()',
        output: 'const x=1;_$=xmap();const b=_$;'
    },
    simpleVariableWithInnerSequence: {
        source: 'const a = (c = 1, map())',
        output: 'c=1;_$2=xmap();_$=_$2;const a=_$;'
    },
    simpleVariableSequenceWithInnerSequence: {
        source: 'const x=1,b=(1,map())',
        output: 'const x=1;1;_$2=xmap();_$=_$2;const b=_$;'
    },
    simpleLogicalAnd: {
        source: '1 && map()',
        output: '_$=1;if(_$){_$2=xmap();_$=_$2;}_$;'
    },
    simpleLogicalOr: {
        source: '1 || map()',
        output: '_$=1;if(!_$){_$2=xmap();_$=_$2;}_$;'
    },
    simpleArray: {
        source: '[1, map()]',
        output: '_$=1;_$2=xmap();[_$,_$2];'
    },

    simpleObject: {
        source: 'x = {a: 1, b: map()}',
        output: '_$=1;_$2=xmap();x={a:_$,b:_$2};'
    },

    simpleIf: {
        source: 'if (1)map()',
        output: 'if(1){_$=xmap();_$;}'
    },
    simpleIfElse: {
        source: 'if (1);else map()',
        output: 'if(1);else{_$=xmap();_$;}'
    },
    simpleCondExp: {
        source: '1 ? 2 : map()',
        output: 'if(1)_$=2;else{_$2=xmap();_$=_$2;}_$;'
    },
    condExpInsideCondExp: {
        source: '1 ? 2 : (3 ? map() : 4)',
        output: 'if(1)_$=2;else{if(3){_$3=xmap();_$2=_$3;}else _$2=4;_$=_$2;}_$;'
    },
    assignmentCondExpWithSequenceInsideCondExp: {
        source: 'const b = 1 ? 2 : (2.1, (3 ? map() : 4))',
        output: 'if(1)_$=2;else{2.1;if(3){_$4=xmap();_$3=_$4;}else _$3=4;_$2=_$3;_$=_$2;}const b=_$;'
    },

    condExpWithInnerLogicalInsideCallExp: {
        source: 'function render(){ return div(this.show ? div(this.item && div(map())) : null) }',
        output: 'function render(){if(this.show){_$2=this.item;if(_$2){_$3=xmap();_$2=div(_$3);}_$=div(_$2);}else _$=null;return div(_$);}'
    },

};

function render() {
    if (this.show) {
        _$2 = this.item();
        if (_$2) {
            _$3 = xmap();
            _$2 = div(_$3)
        }
        _$ = div(_$2);
    } else _$ = null;

    return div(_$);
}


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
        else if (t.isForStatement(parentNodePath) && nodePath.key == 'init') {
            return false;
        }
        return true;
    }


    function isVariableDeclarationInInitForStatement(path) {
        return t.isVariableDeclaration(path.node) && t.isForStatement(path.parentPath.node) && path.key == 'init';
    }


    function findExpressionStatement(path) {
        do {
            if (t.isStatement(path.node) && !isVariableDeclarationInInitForStatement(path)) {
                return path;
            }
        } while (path = path.parentPath);
    }

    let counter = 0;


    function replaceVariableDeclarationSequence(nodePath) {
        const multipleDeclarations = nodePath.node.declarations.map(
            decl => t.variableDeclaration(nodePath.node.kind, [t.variableDeclarator(decl.id, decl.init)]));
        nodePath.replaceWithMultiple(multipleDeclarations);
        printCode("replaceVariableDeclarationSequence", nodePath);

    }

    function makeVariable(nodePath) {
        const identifier = nodePath.scope.generateUidIdentifier('$');
        const variable = t.variableDeclaration('var', [t.variableDeclarator(identifier, nodePath.node)]);
        return identifier;
    }

    function printCode(title, nodePath) {
        console.log(title, Babel.transformFromAst(nodePath.hub.file.ast, '', {compact: true}).code);
    }


    function makeStatement(nodePath) {
        console.log('makeStatement', nodePath);
        counter++;
        if (counter > 100) {
            throw new Error('something wrong');
        }
        let expStatement = nodePath;
        while (true) {
            if (!expStatement.parentPath) {
                break;
            }
            if (!check(expStatement)) {
                console.error('Cannot make statement', expStatement);

                return;
            }

            expStatement = expStatement.parentPath;
            if (t.isStatement(expStatement) && !isVariableDeclarationInInitForStatement(expStatement)) {
                break;
            }
        }
        const identifier = makeVariable(nodePath);
        const assignment = t.expressionStatement(t.assignmentExpression('=', identifier, nodePath.node));
        expStatement.insertBefore(assignment);
        nodePath.replaceWith(identifier);
        printCode("makeStatementAfter", nodePath);
    }


    function makeStatementFromConditionExp(nodePath) {
        const expStatement = findExpressionStatement(nodePath);
        const identifier = makeVariable(nodePath);
        const variable = t.variableDeclaration('var', [t.variableDeclarator(identifier)]);
        const ifStatement = t.ifStatement((nodePath.node.test),
            t.expressionStatement(t.assignmentExpression("=", identifier, (nodePath.node.consequent))),
            t.expressionStatement(t.assignmentExpression("=", identifier, (nodePath.node.alternate)))
        );
        // const a2 = expStatement.insertBefore(ifStatement);
        // const a1 = expStatement.insertBefore(variable);

        const insertedPathNodes = expStatement.insertBefore(ifStatement);
        // const ifStatementPathNode = insertedPathNodes[insertedPathNodes.length - 1];
        // if (ifStatementPathNode) {
        //     ifStatementPathNode.requeue();
        // }
        nodePath.replaceWith(identifier);
        for (var i = 0; i < insertedPathNodes.length; i++) {
            var pathNode = insertedPathNodes[i];
            pathNode.requeue();
        }
        printCode("makeStatementFromConditionExp", nodePath);

        // if (t.isIfStatement(ifStatementPathNode)){
        // }
        // console.log(ifStatementPathNode);
        //
        // ifStatementPathNode.resync();
    }


    function replaceLogicalToIfStatement(nodePath) {
        const expStatement = findExpressionStatement(nodePath);
        const identifier = makeVariable(nodePath);
        const assignment = t.expressionStatement(t.assignmentExpression("=", identifier, (nodePath.node.left)));
        const test = nodePath.node.operator == '&&' ? identifier : t.unaryExpression('!', identifier);
        const consequent = t.expressionStatement(t.assignmentExpression("=", identifier, (nodePath.node.right)));
        const ifStatement = t.ifStatement(test, consequent);

        const insertedPathNodes = expStatement.insertBefore([assignment, ifStatement]);
        // const ifStatementPathNode = insertedPathNodes[insertedPathNodes.length - 1];
        // if (ifStatementPathNode) {
        //     ifStatementPathNode.requeue();
        // }
        nodePath.replaceWith(identifier);
        /*
         for (var i = 0; i < insertedPathNodes.length; i++) {
         var pathNode = insertedPathNodes[i];
         pathNode.requeue();
         }
         */
        printCode("replaceAndLogicalToIfStatement", nodePath);

        // if (t.isIfStatement(ifStatementPathNode)){
        // }
        // console.log(ifStatementPathNode);
        //
        // ifStatementPathNode.resync();
    }

    function makeStatementsFromSequenceExp(nodePath) {
        const identifier = makeVariable(nodePath);
        const expStatement = findExpressionStatement(nodePath);
        const expressions = nodePath.node.expressions;
        const statements = expressions.map(exp => t.expressionStatement(exp));
        statements.pop();
        const lastStatement = t.expressionStatement(t.assignmentExpression('=', identifier, expressions[expressions.length - 1]));
        statements.push(lastStatement);

        expStatement.insertBefore(statements);
        nodePath.replaceWith(identifier);
        printCode("makeStatementsFromSequenceExp", nodePath);
    }

    function replaceForInitToStatement(path) {
        path.insertBefore(path.node.init);
        path.node.init = null;
        printCode("replaceForInitToStatement", path);

    }


    let p = 0;
    return {
        visitor: {
            CallExpression: {
                exit(nodePath) {
                    console.log("exit", nodePath.node.callee.name);
                },
                enter(nodePath, plugPass) {
                    if (p++ > 100) {
                        throw new Error('something wrong');
                    }

                    console.log("enter", nodePath.node.callee.name);
                    if (nodePath.node.callee.name == 'map') {


                        let path = nodePath;
                        const expressionParents = [];
                        while (path = path.parentPath) {
                            if (!t.isBlock(path)) {
                                expressionParents.push(path);
                            }
                        }


                        const topParent = expressionParents[expressionParents.length - 1];
                        if (t.isVariableDeclaration(topParent)) {
                            if (topParent.node.declarations.length > 1) {
                                replaceVariableDeclarationSequence(topParent);
                                // printCode("exit because replace variable sequence", nodePath);
                                return;
                            }
                        }
                        for (var i = expressionParents.length - 1; i >= 0; i--) {
                            var parent = expressionParents[i];
                            const next = expressionParents[i - 1];
                            if (t.isSequenceExpression(parent)) {
                                makeStatementsFromSequenceExp(parent);
                                // printCode("exit because replace sequence to statements", nodePath);
                                return;
                            }
                            if (t.isConditionalExpression(parent)) {
                                makeStatementFromConditionExp(parent);
                                // printCode("exit because replace conditional expression", nodePath);
                                return
                            }
                            if (t.isLogicalExpression(parent)) {
                                replaceLogicalToIfStatement(parent);
                                // printCode("exit because replace conditional expression", nodePath);
                                return
                            }
                            if (t.isForStatement(parent) && next && next.key == 'init') {
                                // replaceForInitToStatement(parent);
                                // printCode("exit because replace conditional expression", nodePath);
                                console.error('Cannot make statement');

                                return
                            }
                        }

                        nodePath.node.callee.name = 'xmap';
                        makeStatement(nodePath);
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
const keys = Object.keys(tests);

function test(testName) {
    const test = tests[testName];
    const output = Babel.transform(test.source, {plugins: [plugin], compact: true, presets: ['stage-0']});
    // console.log(output.code);

    if (test.output !== output.code) {
        console.error(`Test ${testName} is not passed. \nResult:   ${output.code}\nExpected: ${test.output}`);
    }
}

for (var i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key[0] !== '_') {
        test(key);
    }
}
// test('forInit');


// console.log(output);