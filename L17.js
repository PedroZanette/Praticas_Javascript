import inquirer from "inquirer"

inquirer.prompt([{
    name: "num", message: "Digite 3 números juntos  "
}
]).then((result) => {
    let v1 = (result.num)
    let u = 10%v1 
	let d = (100%v1) /10
	let c = v1 /100
	let n = u * 100 + d* 10 + c
    console.log(`O seu número ao contrario é ${n}`)
})
