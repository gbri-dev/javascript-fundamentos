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

var contador = 0;
var nota = 0;
let aluno = alunos[0];

for (var i = 0; i < alunos.length; i++) {

    console.log("Aluno: " + alunos[i]);

    for (contador = 0; contador < aluno.length; contador++) {
        nota += aluno[contador];
    }
    let media = nota / 4;

    if (media >= 7) {
        var resultado = "aprovado";
    } else {
        var resultado = "reprovado";
    }
    console.log("Média: " + media + " - " + resultado);
}
