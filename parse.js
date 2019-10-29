
const nearley = require("nearley");
// const grammar = require("./json.js");
const grammar = require("./iSatPl.js");
const fs = require('mz/fs')
const path=require("path");
// Create a Parser object from our grammar.
async function main(){
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
const filename=process.argv[2];
const outputfile=path.basename(filename,'.isatplay')+".ast"; 
const code=(await fs.readFile(filename)).toString();
if(code=="sb:=1"){
    console.log("matched");
   }
   else{
       console.log("failed");
   }
try {
 console.log(code);
 
parser.feed(code);   
const ast=parser.results[0];
await fs.writeFile(outputfile,JSON.stringify(ast,null))
console.log("result"+parser.results[0]);
console.log("o/p"+outputfile)
} catch (error) {
    console.log(error.message);
    
}

}
main();

// parser.results is an array of possible parsings.
 // [[[[ "foo" ],"\n" ]]]
