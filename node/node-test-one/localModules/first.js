const {data1, data2} = require('./third.js');
console.log("\n")
console.log("**************** From Third ****************")
console.log(data1,"\n",data2);


const {display1, display2} = require('./second.js');
console.log("\n")
console.log("**************** From Second ****************")
display1();
display2();
