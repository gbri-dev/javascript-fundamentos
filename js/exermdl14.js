/*Criar uma função para retorna o resultado e o tipo da variavel
Primeiro input vai receber um valor podendo ser uma string ou numero
Segundo input vai receber um operador matematico ou lógico
terceiro input vai receber outro valor podendo ser do tipo string ou numerico
Botão vai retornar o valor da operação e mostrara o resultado seguido do tipo 
*/

// function somaValores() {
//     let n1 = parseInt(document.getElementsByName('v1').value)
//     let n2 = parseInt(document.getElementsByName('v2').value)
//     let n3 = parseInt(document.getElementsByName('v3').value)
//     let soma = n1 + n2 + n3
//     document.getElementById('resultado').innerHTML = "Resultado: " + parseInt(soma)
// }

document.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let formulario = document.getElementById('frm1')
    let dados = new FormData(formulario)
    let objeto = {}
    let valores = []
    for (let key of dados.keys()) {
        objeto[key] = dados.get(key)
        //push método para adicionar itens ao array
        valores.push(dados.get(key))
    }

    let operador = valores[1]
    console.log(operador)
    switch (operador) {
        case '+': result = parseInt(valores[0]) + parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        case '-': result = parseInt(valores[0]) - parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        case '*': result = parseInt(valores[0]) * parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        case '/': result = parseInt(valores[0]) / parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        case '<': result = parseInt(valores[0]) < parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        case '>': result = parseInt(valores[0]) > parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        case '==': result = parseInt(valores[0]) == parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        case '<=': result = parseInt(valores[0]) <= parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        case '>=': result = parseInt(valores[0]) >= parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        case '!=': result = parseInt(valores[0]) != parseInt(valores[2])
            document.getElementById('resultado').innerHTML = result + " " + typeof (result)
            break;
        default: document.getElementById('resultado').innerHTML = "Operação inválida"
            break;
    }
})