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
function aprovacao(media) {
    let result = media >= 7 ? "aprovado" : "reprovado"
    return result
}

console.log("Média: " + calcularMedia([8, 10, 6, 7]))
console.log(aprovacao(calcularMedia([8, 10, 6, 7])))

