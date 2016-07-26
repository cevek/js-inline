const mapCode = `map = (fn, ctx) => {const arr = new Array(this.length); for (let i=0; i<this.length; i++) arr[i] = fn.call(ctx, this[i], i); return arr}`;
const code1 = `
//@inline
const b = a.map(item => item + 1);
`;
const code1T = `const _aLen=a.length, _b = new Array(_aLen); for (let i=0; i < _aLen, i++)_b[i]=a[i];const b = _b;`;


const code2 = `
//@inline
const b = a.map((item, i, _this) => item + 1 + i + _this.foo, {});
`;

const code2T = `const _aLen=a.length, _this = {}, _b = new Array(_aLen); for (let i=0; i < _aLen, i++) _b[i]=a[i] + 1 + i + _this.foo;const b = _b;`;


const code3 = `
//@inline
const b = a.map((item, i, _this) { return item + 1 + i + _this.foo } );
`;

const code31 = `
//@inline
const b = a.map((item, i, _this) { return item + 1 + i + _this.foo } ).map(item => item + 10);
`;


const code4 = `
var item = null;
const i = null;
let _this = null;
//@inline
const b = a.map((item, i, _this) { return item + 1 + i + _this.foo } );
`;

const code5 = `
var item = null;
const i = null;
let _this = null;
//@inline
const b = a.map((item, i, _this) { return item + 1 + i + _this.foo + item.map( (item, x, _this) => item + 2 + i + _this.bar) } );
`;

const code6 = `
var item = null;
const i = null;
let _this = null;
function foo(){
    //@inline
    const b = a.map((item, i, _this) { return item + 1 + i + _this.foo + item.map( (item, x, _this) => item + 2 + i + _this.bar) } );
}
`;

const code7 = `
//@inline
const b = a.map((item, i, _this) { const xitem = 0; xitem++; return item + 1 + i + _this.foo + item.map( (item, x, _this) => item + 2 + i + _this.bar + xitem) } );
`;


const code8 = `
var item = null;
const i = null;
let _this = null;
function foo(){
    const x = 10;
    let c = 0;
    //@inline
    const b = (x == 10 ? ((c = 1), a.map((item, i, _this) { return item + 1 + i + c )) : -1;
}
`;




const code9 = `
function render(){
    return (
        value 
            ? items.map(item => dom(item))
            : (value == 10 ? items.map(item => dom(item + 1)))
    );
}
`;



const transpile = ``;