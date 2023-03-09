import inquirer from "inquirer"

inquirer.prompt([{
    name: "num", message: "Digite um número "
},{
    name: "base", message: "Digite a base para o logaritmo "
}
]).then((result) => {
    let v3 = Number(result.num)
    let v2 = Number(result.base)
    let log = Math. log(v3) / Math.log(v2);
    
    console.log(`O logaritimo do seu número é ${log}`)
})