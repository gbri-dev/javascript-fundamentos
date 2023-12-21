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
})

const corpoDaRequisicao = (objetoResposta, botao) => {
    let logradouro = ""            
    let bairro = ""
    const cidade = objetoResposta.localidade
    const estado = objetoResposta.uf
    if(objetoResposta.logradouro !== ""){
       logradouro = objetoResposta.logradouro + ", "
    }
    if(objetoResposta.bairro !== ""){
       bairro = objetoResposta.bairro + " - "
    }
    const endereco = `${logradouro}${bairro}${cidade} - ${estado}`
    $('#endereco').val(endereco)
    setTimeout(function(){
        $(botao).find('i').removeClass('d-none')
        $(botao).find('span').addClass('d-none')
    }, 1000)    
}

const jqueryAjax = (endpoint, botao) => {
    $.ajax(endpoint).done(function(objetoResposta){
        corpoDaRequisicao(objetoResposta, botao)
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
        $(botao).find('i').removeClass('d-none')
        $(botao).find('span').addClass('d-none')
    })
}