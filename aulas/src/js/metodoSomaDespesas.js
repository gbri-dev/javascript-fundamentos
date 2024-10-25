// Criar Prototipo usuário
class Usuario {
    
    constructor(nome, despesasDetalhadas, totalDespesa){
        this.nome = nome        
        this.despesasDetalhadas = despesasDetalhadas
        this.totalDespesa = totalDespesa
    }

    somaDespesas() {
        let soma = this.despesasDetalhadas.reduce(function(total, itemAtual){
            total += itemAtual.price
            return total
        }, 0)   
        return this.totalDespesa = soma
    }
}

//Agora vamos criar um array de objetos de despesas
const tipoDespesa = ['Cartao', 'Alimentacao', 'Filho', 'Outros']

const despesasDetalhada = [
    {
    titulo: 'azeitona',
    tipo: tipoDespesa[1],
    price: 10.99,    
    },
    {
        titulo: 'ovos brancos',
        tipo: tipoDespesa[1],
        price: 17.99,    
    },
    {
        titulo: 'Daughter',
        tipo: tipoDespesa[2],
        price: 870,
    }
]

const pessoa1 = new Usuario("Abraao", despesasDetalhada, 0)

// Somar e atualizar usuario
pessoa1.somaDespesas()
// Exibir resultado
console.log(pessoa1)