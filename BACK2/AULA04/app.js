//como criar arquivos no nosso projeto
const fs=require("fs");

//criar um arquivo de log sincrono
let log = "mensagem de log\n"

//fs.writeFileSync('./logs.log',log);
fs.writeFileSync('./logs.log',log,{flag: 'a+'});

console.log("fim");

//criar arquivo de forma assincrona

fs.writeFile("./logs2.log",log,{flag: 'a+'},(erro)=>{
    if(erro){
        console.log(erro)
    } 
})

//para excluir arquivos
fs.unlinkSync('./logs2.log');
 console.log("removido arquivos");

// //outra forma de resolver

fs.unlinkSync("./logs.log");
console.log("removido arquivos usando unlinkSync");
