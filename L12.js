import inquirer from "inquirer"

inquirer.prompt([{
    name: "ang", message: "Digite um ângulo "
}
]).then((result) => {
    let v1 = Number(result.ang)
    let sen = Math.sin(v1)
    let cos = Math.cos(v1)
    let tang= Math. tan(v1)
    let senc = Math.cos(v1)
    let senc1 = 1 / senc
    let cosc = Math.sin(v1)
    let cosc1 = 1 / cosc
    let tangc = Math. tan(v1)
    let tangc1 = 1/tangc
    console.log(`O Seno do seu ângulo é ${sen}\nO co-seno do seu ângulo é ${cos}\nA tangente do seu ângulo é ${tang}\nO secante do seu ângulo é ${senc1}\nO co-secante do seu ângulo é ${cosc1}\nO co-tangente do seu ângulo é ${tangc1}`)
})