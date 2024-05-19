var hello = require('path');
const a = "D:/data/hai.js";


const b = hello.dirname(a);
const c = hello.basename(a);
console.log(b);
console.log(c)

console.log(hello.join(b,"abc",c));
