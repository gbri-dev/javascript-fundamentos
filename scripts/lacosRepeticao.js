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

    let NotasAluno = alunos[i];
    console.log("Aluno: " + parseInt(i + 1));
    console.log("Notas: " + NotasAluno)

    for (c = 0; c < NotasAluno.length; c++) {
        nota += NotasAluno[c];
    }

    let media = nota / 4;

    if (media >= 7) {
        var resultado = "aprovado";
    } else if (media > 10) {
        var resultado = "Erro, você não pode ter a média acima de 10 pontos";
    } else {
        var resultado = "reprovado"
    }
    console.log("Média: " + media + " - " + resultado);
}

