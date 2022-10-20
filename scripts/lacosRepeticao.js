//laços de repetição
//loops

/*
    for ([expressaoInicial]; [condicao]; [incremento])
    declaracao

    do
    declaracao
    while (condicao);

    while (condicao)
    declaracao
*/

//Calcular média de alunos

var alunos = [
    [8, 7, 9, 9],
    [5, 10, 9, 8],
    [10, 7, 10, 9]
]


var nota = 0;


for (var i = 0; i < alunos.length; i++) {

    let aluno = alunos[0];
    console.log("Aluno: " + aluno);

    for (c = 0; c < aluno.length; c++) {
        nota += aluno[c];
    }

    let media = nota / 4;

    if (media >= 7) {
        var resultado = "aprovado";
    } else {
        var resultado = "reprovado";
    }
    console.log("Média: " + media + " - " + resultado);
}

