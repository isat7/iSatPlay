const fs = require('mz/fs')
const path=require("path");

async function main(){
var filename=process.argv[2];
const outputfile=path.basename(filename,".ast")+".js";
const contents=(await fs.readFile(filename)).toString(); 
const ast=JSON.parse(contents);
const jsCode=generateJs(ast);
await fs.writeFile(outputfile,jsCode);
console.log("wrote ${outputfile}.");
function generateJs(statements){
const lines=[];

for(let statement of statements){
    console.log(statement);
    if(statement.type==="var_assignment"){
        const value=generateJSFORExpression(statement.value)
      lines.push('let '+statement.varname+"="+value);
    }
    else if(statement.type==="print_statement"){

        const expression=generateJSFORExpression(statement.expression);
         lines.push('console.log('+expression+');')
    }

    else if(statement.type=="while_loop"){
        const condition=generateJSFORExpression(statement.condition)
        const body=generateJs(statement.body)
       
        lines.push("while("+condition+"){\n"+body+"\n}");
    }

}
return lines.join("\n")
    return "console.log('hello world')";
}

function generateJSFORExpression(expression){
    console.log("js=>"+expression)
    const operatorMap={

        "+":"+",
        
        "-":"-",
        
        "*":"*",
        
        "/":"/",
        ">":">",
        
        ">=":">=",
        "<":"<",
        
        "<=":"<=",
   
        "=":"==s",
    }

    if(typeof expression=='object'){
        console.log(typeof expression);
        if(expression.type==="binary_expression"){
            const left=generateJSFORExpression(expression.left);
            const right=generateJSFORExpression(expression.right);
            const operator=operatorMap[expression.operator]
         
            return ''+left+''+operator+''+right+'';
        }
      

    }
    else{
       
                    return expression;
                }
}

}
main();