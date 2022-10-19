//Operadores lógicos
let x = 5
function equalValue() {
    if (x == "5") {
        switch (x) {
            case 5:
                console.log("true")
                break
            case "5":
                console.log("false")
                break
            default:
                console.log("Errado o valor correto é 5")
        }
    }
    // 2 iguais == compara somente pelo valor e não leva em consideração o tipo
}
function equalValueType() {
    if (x === "5") {
        switch (x) {
            case 5:
                console.log("false")
                break
            case "5":
                console.log("true")
                break
            default:
                console.log("false")
        }
    } else {
        console.log("False, pq o tipo está definido como string")
    }
    // 3 iguais === compara pelo valor e leva em consideração o tipo
}

function notEqualValor() {
    if (x != "5") {
        switch (x) {
            case 5:
                console.log("false")
                break
            case "5":
                console.log("true")
                break
            default:
                console.log("falso, valor verdadeiro é 5")
        }
    } else {
        console.log("O tipo precisa ser um inteiro")
    }// != interrogação+igual compara levando em consideração somente o valor    
}

function notEqualValueType() {
    if (x !== "5") {
        switch (x) {
            case 5:
                console.log("true")
                break
            case "5":
                console.log("false")
                break
            default:
                console.log("falso, valor verdadeiro é 5")
        }
    } else {
        console.log("O tipo precisa ser um inteiro")
    }// !== compara levando em consideração o valor e o tipo, a interrogacao é um atributo de negação então
    // então x não é igual a 5 ou não é do tipo string
    // sendo assim 5 não é do tipo "5" sendo verdadeira a primeiro opção
}

function countMedia() {
    let nt1 = 10
    let nt2 = 8
    let nt3 = 9
    let nt4 = 7

    let media = (nt1 + nt2 + nt3 + nt4) / 4
    if (media >= 7) {
        console.log("Aprovado: ", media)
    } else {
        console.log("Reprovado ", media)
    }
}

function maiorMenor() {
    if (x < 5) {
        //menor que 5 ?
        console.log("false")
    } else if (x > 5) {
        //maior que 5 ?
        console.log("false")
    } else if (x <= 5 || x >= 5) {
        //menor ou igual a 5? ou maior ou igual a 5?
        console.log("True, igual a 5")
    }
}