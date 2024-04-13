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

console.log('\n')
console.log('Items entries')
for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`)
}

//deletar props no map
meuMap.delete('stack')

////////////////////////
///  set
////////////////////
                ///
               ///
              ///
             ///
/////////////// 

const cpfs = new Set()
cpfs.add('17657552701')
cpfs.add('34915406032')
cpfs.add('15915400972')
//a diferença está que a chaves são os mesmo que os valores
//console.log(cpfs)
console.log(cpfs.keys())
//console.log(cpfs.values())

cpfs.forEach((cpf) => {
    console.log(cpf)
})

// criar uma listagem de items únicos
const arrayPessoas = ['Giovani', 'Gean', 'José Paulo', 'Jovila', 'Jovila', 'Gean']

//converte um array pra set
const setPessoas = new Set([...arrayPessoas])
//converte um set para array novamente sem os items duplicados.
const pessoas = [...setPessoas]

console.log(pessoas)

