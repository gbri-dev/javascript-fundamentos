let meuMap = new Map()

meuMap.set("nome", "Gabriel")
meuMap.set("profissão", "programador")
meuMap.set("stack", "html, css, js")

console.log(meuMap)

const nome = meuMap.get("nome")
console.log(nome)
//é uma propriedade do map, parecido com o length
console.log(meuMap.size)

//verificar se existe dentro do map
console.log(meuMap.has('nome'))
//limpa todos os dados do map
//meuMap.clear()

// fazer interação no map podemos usar um for of
for (let chave of meuMap.keys()){
    console.log(`props: ${chave}`)
}

//para recuperar os valores
for (let value of meuMap.values()){
    console.log(`values: ${value}`)
}