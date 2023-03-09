import inquirer from "inquirer"

inquirer.prompt([{
    name: "num", message: "Digite seu saldo  "
}
]).then((result) => {
    let v1 = Number(result.num)
    let re = v1 * 1.01
    
    console.log(`O reajuste de 1% do seu saldo é ${re}`)
})