import inquirer from "inquirer"

inquirer.prompt([{
    name: "num1", message: "Digite o primeiro número: "
},{
    name: "num2", message: "Digite o segundo número: "
}
]).then((result) => {
    let v1 = Number(result.num1)
    let v2 = Number(result.num2)
    let med = (v1 + v2) / 2
    
    console.log(`A média é : ${med} `)
})