import inquirer from "inquirer"

inquirer.prompt([{
    name: "nome", message: "Digite seu nome: "
},{
    name: "ende", message: "Digite o seu endereço: "
},{
        name: "tel", message: "Digite o seu telefone: "
}
]).then((result) => {
    let v1 = result.nome
    let v2 = result.ende
    let v3 = result.tel
    console.log(`O seu nome é ${v1}\nO seu endereço é ${v2}\nO seu telefone é ${v3}`)
})