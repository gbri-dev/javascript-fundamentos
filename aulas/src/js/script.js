// JAVASCRIPT
// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         const xhttp = new XMLHttpRequest()
//         const cep = document.getElementById('cep').value
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`

//         xhttp.open('GET', endpoint)
//         xhttp.send()
//     })
// })

// JQUERY
const jqueryAjax = (endpoint, botao) => {
    $.ajax(endpoint).done(function(objetoResposta){
        corpoDaRequisicao(objetoResposta)
        spinnerCep(botao)
    })
}

//requisições via api usando FETCH
const requisicaoFetch = (endpoint, botao) => {
    fetch(endpoint).then(function(resposta){
        return resposta.json()
    }).then(function(json){
        corpoDaRequisicao(json, botao)
    }).catch(function(erro){
        alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde. \n\nErro: " + erro)               
    }).finally(function(){
        spinnerCep(botao)
    })
}

$(document).ready(function(){
    //JQUERY MASK PLUGIN
    $('#cep').mask('00000-000')
    
    $('#btn-buscar-cep').on('click', function(){        
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const botao = $(this)
        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')
        //jqueryAjax(endpoint, botao)
        requisicaoFetch(endpoint, botao)        
    })

    $('#formulario-pedido').submit(function(e){
        e.preventDefault()
        const primeiroNome = $('#nome').val().length
        if( primeiroNome < 3){
            $('#errorNome').text("O nome precisa conter no mínimo 3 caracteres.")
            $('#errorNome').removeClass('d-none')
            throw new Error('O nome precisa conter no mínimo 3 caracteres.')
        }

        $('#errorNome').addClass('d-none')        
        cleanForm()
        console.info("success")
    })
})

const cleanForm = () => {
    $('#formulario-pedido input').val("")
}

const corpoDaRequisicao = (objetoResposta) => {
    let logradouro = ""            
    let bairro = ""
    const cidade = objetoResposta.localidade
    const estado = objetoResposta.uf
    let endereco = ""
    if(objetoResposta.logradouro !== "" && objetoResposta.logradouro !== undefined){
       logradouro = objetoResposta.logradouro + ", "
    }
    if(objetoResposta.bairro !== "" && objetoResposta.bairro !== undefined){
       bairro = objetoResposta.bairro + " - "
    }
    if(cidade == undefined || estado == undefined){
        $('#errorCep').text("Não foi encontrador nenhum endereço, tente outro cep.")
        $('#errorCep').removeClass('d-none')
        $('#endereco').val("")
    }else{
       endereco = `${logradouro}${bairro}${cidade} - ${estado}`
       $('#endereco').val(endereco)       
       $('#errorCep').addClass('d-none')
    }           
}

const spinnerCep = (botao) => {
    setTimeout(function(){
        $(botao).find('i').removeClass('d-none')
        $(botao).find('span').addClass('d-none')
    }, 1000) 
}