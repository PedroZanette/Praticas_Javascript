import inquirer from "inquirer"

inquirer.prompt([{
    name: "b", message: "Digite a base do retângulo: "
},{
    name: "a", message: "Digite a altura do retângulo: "
}
]).then((result) => {
    let v1 = Number(result.b)
    let v2 = Number(result.a)
    let d = Math.sqrt((v1*v1 + v2*v2 ) )       //Cálculo da diagonal diagonal= raiz de base² + altura²
    let p = 2 * (v1 + v2)
    let area = v1 * v2
    console.log(`O perímetro do retângulo é ${p}\nA área do retângulo é ${area}\nA diagonal do retângulo é ${d}`)
})