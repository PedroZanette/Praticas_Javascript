import inquirer from "inquirer"

inquirer.prompt([{
    name: "nome", message: "Escreva um nome "
}
]).then((result) => {
    let v1 = result.nome
    let splits = v1.split(' ')
    let OTT = v1.split(' ') // OTT = One to three
    console.log("Seu nome completo é:", v1, "\nO primeiro caracter do seu nome é:", splits[1], "\nA raiz quadrada do seu número é", OTT)
})