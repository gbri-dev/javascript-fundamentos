function somar() {
    let soma = 0

    for(let i=0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma
}

console.log(somar(24, 2, 24))

function somarComRest(...numeros){
    const soma = numeros.reduce(function(acumulador, item){
        return acumulador += item
    }, 0)
    return soma
}

console.log(somarComRest(44,45,14))

//a diferença entre rest e spread é a forma que é usado
// rest é argumento de função 
// spread é usado fora de funções

const numerosSpread = [5,7,8,6]
console.log(...numerosSpread)

console.log('\n')

const timesSP = ['são paulo', 'palmeiras', 'santos', 'bragantino']
const timesRio = ['flamengo', 'vasco', 'fluminense', 'botafogo']

//const todosOsTimes = timesSP.concat(timesRio)
const todosOsTimes = [...timesSP, ...timesRio]

console.log(todosOsTimes)

console.log('\n')

//spread em objetos
const carroDaKaren = {
    marca: 'gol',
    fabricante: 'vw',
    motor: 1.6
}

console.log(carroDaKaren)

const carroDaLis = {
    ...carroDaKaren,
    motor: 1.8
}

console.log(carroDaLis)
console.log('\n')
//desestruturação de objetos
const { motor: motorDaKaren } = carroDaKaren
const { motor: motorDaLis } = carroDaLis

//desestruturação de arrays
const [item1, item2, item3, ...outrosTimes] = todosOsTimes

console.log(`${item1} - ${item2} - ${item3}`)
console.log(outrosTimes)
