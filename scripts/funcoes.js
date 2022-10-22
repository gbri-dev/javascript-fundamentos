/* Evita a repetição de codigo
   Realiza chamada dinamica de algoritmos */

function calcularMedia(notas) {
    var soma = 0
    for (var c = 0; c < notas.length; c++) {
        soma += notas[c]
    }
    media = soma / notas.length

    return media
}
//Primeira versão
// function aprovacao(media) {
//     let result = media >= 7 ? "aprovado" : "reprovado"
//     return result
// }

// console.log("Média: " + calcularMedia([8, 10, 6, 7]))
// console.log(aprovacao(calcularMedia([8, 10, 6, 7])))

//Segunda versão
function aprovacao(notas) {
    let media = calcularMedia(notas)
    let condicao = media >= 8 ? "Aprovado!" : "Reprovado!"
    return 'Média: ' + media + ' - Resultado: ' + condicao
}

console.log(aprovacao([8, 8, 6, 10]))
console.log(aprovacao([9, 7, 8, 10]))
console.log(aprovacao([7, 8, 6, 10]))
