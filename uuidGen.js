const uuidV1 = require('uuid/v1');

console.log(process.argv);

let par1 = parseInt(process.argv[2],10)
console.log(typeof par1)

let res = [];
if(par1 && !isNaN(par1)){
  for(let i=0;i<par1;i++){
    res.push(uuidV1());
  };
  console.log(res);
} else {
  console.log(`
    No value detected for number of IDs to be created. Please run the program as:
    
    >> node uuidGen.js 'x'
    
    where 'x' is an integer.
  `)
};