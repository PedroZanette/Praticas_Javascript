import inquirer from "inquirer"

inquirer.prompt([{
    name: "num", message: "Digite um número"
}
]).then((result) => {
    let v3 = Number(result.num)
    let som = v3 + 1
    let v2 = Number(result.num)
    let sub = v2 - 1
    console.log(`O sucessor do seu número é ${som}\nO antecessor do seu número é ${sub}`)
})