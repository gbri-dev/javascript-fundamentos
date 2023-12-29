const minhaFuncao = () => "Diz Olá"
console.log(minhaFuncao())

// const retornaUmCarro = () => {
//     return {
//         modelo: 'Ka',
//         fabricante: 'Ford',
//         ano: 2022
//     }
// }
const retornaCarro = () => (
    {
        modelo: 'ka',
        fabricante: 'ford',
        ano: 2022
    }
)
console.log(retornaCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function(){
        this.velocidadeAtual += 10;
    },
    //arrow function possui escopo diferente, por isso da erro.
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar()
console.log(carro.velocidadeAtual)
carro.frear()
console.log(carro.velocidadeAtual)