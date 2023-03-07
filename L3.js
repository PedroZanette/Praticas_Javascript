import inquirer from "inquirer"

inquirer.prompt([{
    name: "num", message: "Digite um número"
}
]).then((result) => {
    let v1 = result.num
    console.log(`Seu número é ${v1}`)
})