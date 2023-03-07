import inquirer from "inquirer"

inquirer.prompt([{
    name: "num", message: "Digite um número "
}
]).then((result) => {
    let v3 = Number(result.num)
    let log = Math. log10(v3)
    
    console.log(`O logaritimo do seu número é ${log}`)
})