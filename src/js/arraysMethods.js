//document.addEventListener('DOMContentLoaded', function(){

    const redesSociais = ['Facebook', 'Instagram', 'Twitter']
    let count = 1;
    
    for(let i = 0; i < redesSociais.length; i++) {
        console.log(count + " - " + redesSociais[i])
        count++
    }
    
    console.log('******************')
    
    redesSociais.forEach(function(item, i){
        console.log(i + " - " + item)
    })

    const alunos = ['David', 'Stéfany', 'Karen', 'Julio', 'Alek']

    const cursoAluno = alunos.map(function(aluno){
        return {
            nome: aluno,
            curso: 'FrontEnd'
        }        
    })

    console.log(cursoAluno)

    const numeros = [1,2,3,4,5]
    const dobroNumero = numeros.map(function(n){
        return n * 2         
    })
    console.log(dobroNumero)
    console.log('\n*********************\n')
    const karen = cursoAluno.find(function(item){
        return item.nome == 'Karen'
    })
    const indiceDaKaren = cursoAluno.findIndex(function(item){
        return item.nome == 'Karen'
    })
    console.log(indiceDaKaren,karen)

    console.log('\n')

    cursoAluno.push({
        nome: 'Lucio',
        curso: 'BackEnd'
    })

    const todosSaoFrontEnd = cursoAluno.every(function(aluno){
        return aluno.curso === 'FrontEnd'
    })

    console.log(todosSaoFrontEnd + '\n')

    const existeAlunoBackEnd = cursoAluno.some(function(aluno){
        return aluno.curso === 'BackEnd'
    })

    console.log(existeAlunoBackEnd + '\n')

    function filtraAlunosFrontEnd(aluno){
        return aluno.curso === 'FrontEnd'
    }
    const alunosFrontEnd = cursoAluno.filter(filtraAlunosFrontEnd)

    console.log(alunosFrontEnd)

    const nums = [44, 43, 24, 14, 21]

    const soma = nums.reduce(function(acumulador, itemAtual){
        acumulador += itemAtual
        return acumulador
    }, 0)

    console.log('Soma é : ' + soma)

    //também podemos interar sobre strings
    const nomeDosAlunos = cursoAluno.reduce(function(acumulador, itemAtual){
        acumulador += `${itemAtual.nome} `
        return acumulador
    }, '')

    console.log('\n')
    console.log(nomeDosAlunos)
//})
