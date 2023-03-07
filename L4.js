import inquirer from "inquirer"

inquirer.prompt([{
    name: "num1", message: "Digite o primeiro número: "
},{
    name: "v2", message: "Digite o segundo número: "
}]).then((result) => {
    let v1 = result.num1
    let v3 = result.v2
    console.log(`${v1}${v3}`)
})