import inquirer from "inquirer"

inquirer.prompt([{
    name: "sm", message: "Digite o salário mínimo(sabendo que é 1302): "
},{
    name: "qw", message: "Digite a quantidade de QW gasto por essa residência: "
},{
    name: "pd", message: "Digite a porcentagem do desconto: "
}
]).then((result) => {
    let v1 = Number(result.sm)
    let v2 = Number(result.qw)
    let v3 = Number(result.pd)
    
    let cqw = (v1 / 7) / 100

    let vap =cqw * v2

    let d = (vap * 10) / 100

    let novo = vap - d

    console.log(`O valor em reais de cada QW é: ${cqw}\nO valor em reais a ser pago é: ${vap}\nO valor a ser pago com desconto de ${v3}% é ${novo}`)
})