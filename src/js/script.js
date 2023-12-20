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
    $('#cep').mask('00000-000')
    
    $('#btn-buscar-cep').on('click', function(){
        const xhttp = new XMLHttpRequest()
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const botao = $(this)
        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')

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

            setTimeout(function(){
                $(botao).find('i').removeClass('d-none')
                $(botao).find('span').addClass('d-none')
            }, 1000)
        })
    })
})