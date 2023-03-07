import inquirer from "inquirer"

inquirer.prompt([{
    name: "num", message: "Digite um número"
}
]).then((result) => {
    let v3 = Number(result.num)
    let div = v3 / 3
    
    console.log(`A terça parte de seu número é: ${div}`)
})