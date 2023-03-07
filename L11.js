import inquirer from "inquirer"

inquirer.prompt([{
    name: "num1", message: "Digite o primeiro número: "
},{
    name: "num2", message: "Digite o segundo número: "
},{
    name: "num3", message: "Digite o terceiro número: "
},{
    name: "num4", message: "Digite o quarto número: "
}
]).then((result) => {
    let v1 = Number(result.num1)
    let v2 = Number(result.num2)
    let v3 = Number(result.num3)
    let v4 = Number(result.num4)
    let med = (v1*1 + v2*2 + v3*3 + v4*4) / 10
    
    console.log(`A média ponderada é : ${med} `)
})