const fs = require('mz/fs')
const path=require("path");

async function main(){
var filename=process.argv[2];
const outputfile=path.basename(filename,".ast")+".js";
const contents=(await fs.readFile(filename)).toString(); 
const ast=JSON.parse(contents);
const jsCode=generateJs(ast,[]);
await fs.writeFile(outputfile,jsCode);
console.log("wrote ${outputfile}.");
function generateJs(statements,declaredVariable){
const lines=[];

for(let statement of statements){
    console.log(statement);
    if(statement.type==="var_assignment"){

        if(declaredVariable.indexOf(statement.varname==-1)){
            lines.push('let'+statement.varname+"="+statement.value);
            declaredVariable.push(statement.varname);
        }else{
            lines.push('let'+statement.varname+'='+statement.value);
        }
        const value=generateJSFORExpression(statement.value,declaredVariable)
      lines.push('let '+statement.varname+"="+value);
    }
    else if(statement.type==="print_statement"){

        const expression=generateJSFORExpression(statement.expression,declaredVariable);
         lines.push('console.log('+expression+');')
    }

    else if(statement.type=="while_loop"){
        const condition=generateJSFORExpression(statement.condition,declaredVariable)
        const body=generateJs(statement.body,declaredVariable)
         .split("\n")
         .map(line =>" "+line)
         .join("\n");
        lines.push("while("+condition+"){\n"+body+"\n}");
    }

}
return lines.join("\n")
    return "console.log('hello world')";
}

function generateJSFORExpression(expression,declaredVariable){
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
            const left=generateJSFORExpression(expression.left,declaredVariable);
            const right=generateJSFORExpression(expression.right,declaredVariable);
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