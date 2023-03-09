import inquirer from "inquirer"

inquirer.prompt([{
    name: "num", message: "Digite um número "
}
]).then((result) => {
    let v1 = Number(result.num)
    let qu = v1 *v1
    let ra = Math.sqrt(v1)
    console.log(`O Número  é ${v1}\nO número ao quadrado é ${qu}\nA raiz quadrada do seu número é ${ra}`)
})