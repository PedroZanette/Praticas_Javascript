import inquirer from "inquirer"

inquirer.prompt([{
    name: "num1", message: "Digite o dividendo: "
},{
    name: "num2", message: "Digite o divisor: "
}
]).then((result) => {
    let v1 = Number(result.num1)
    let v2 = Number(result.num2)
    let v3 = v1/v2
    let v4 = v1%v2
    console.log(`Seu quociente é: ${v3}\nO seu dividendo é ${v1}\nO seu divisor é ${v2}\nO seu resto é ${v4}`)
})