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
    $('#btn-buscar-cep').on('click', function(){
        const xhttp = new XMLHttpRequest()
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`

        $.ajax(endpoint).done(function(resposta){
            let logradouro = ""            
            let bairro = ""
            const cidade = resposta.localidade
            const estado = resposta.uf
            if(resposta.logradouro !== ""){
                logradouro = resposta.logradouro + ", "
            }
            if(resposta.bairro !== ""){
                bairro = resposta.bairro + " - "
            }
            const endereco = `${logradouro}${bairro}${cidade} - ${estado}`
            $('#endereco').val(endereco)
        })
    })
})