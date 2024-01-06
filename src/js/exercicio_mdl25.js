//exercicio modulo 25
//Cria um array de objetos, atributos do objeto: o nome e a nota de alunos;
let listaDeAlunos = ['Gabriel','Stéfany','Arthur','Jhonathan']
const MapDeAlunos = listaDeAlunos.map(function(listaDeAlunos){
    return {
        nome: listaDeAlunos,
        nota: 7
    }
})

console.log(MapDeAlunos)

const updateAluno = (nome, nota) => MapDeAlunos.find(function(aluno){
    if(aluno.nome === nome){
        aluno.nota = nota
    }
})

let notaExemplo = 4
//Atualizando ás notas
listaDeAlunos.forEach(function(item){
    updateAluno(item, notaExemplo)
    notaExemplo++
})

// Filtrando os alunos que tiveram a nota maior ou igual à 6;
const filtrarAlunoAcimaDaMedia = (aluno) => aluno.nota >= 6
const alunoAcimaDaMedia = MapDeAlunos.filter(filtrarAlunoAcimaDaMedia)

console.log('******* Todos os alunos *************')
console.log(MapDeAlunos)
console.log('****Alunos acima da média*****')
console.log(alunoAcimaDaMedia)