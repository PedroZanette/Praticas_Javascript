import inquirer from "inquirer"

inquirer.prompt([{
    name: "variavel", message: "mensagem"
},{
    name: "v2", message: "m2" 
}]).then((result) => {
    let v1 = result.v2
    console.log(v1)
})