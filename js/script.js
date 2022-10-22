//média é igual a soma das notas dividido pela quantidade de provas
function calcularMedia(notas) {
    let soma = 0
    for (let c = 0; c < notas.length; c++) {
        soma += notas[c]
    }
    let media = soma / notas.length
    return media
}
function aprovacao(notas) {
    let media = calcularMedia(notas)
    let condicao = media >= 7 ? "Aprovado" : "Reprovado"
    return 'Média ' + media + ' - Resultado ' + condicao
}

document.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let formulario = document.getElementById('formulario1')
    let dados = new FormData(formulario)
    let objeto = {}
    let notas = []
    for (let key of dados.keys()) {
        objeto[key] = dados.get(key)
        //push método para adicionar itens ao array
        notas.push(parseInt(dados.get(key)))
    }
    console.log(notas)
    console.log(objeto)
    document.getElementById('resultado').innerHTML = aprovacao(notas)
})
