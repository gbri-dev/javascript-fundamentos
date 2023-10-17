const pessoaVar = {
  nome: "Gabriel",
  sobrenome: "campos",
  idade: 23
}

//O construtor de um objeto 
function pessoa(nome, sobrenome, idade){
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.idade = idade
}

const instanciaPessoa = new pessoa('Peterson', 'Cartonista', 33)

console.log(typeof instanciaPessoa)

//para saber seu tipo
console.log(instanciaPessoa instanceof pessoa)

/* Métodos de acesso a atributos do objeto */

function acessarAttr(nomeAttr){
  console.log(instanciaPessoa[nomeAttr])
}

acessarAttr('nome')

console.log(instanciaPessoa.idade)

console.log(Object.keys(instanciaPessoa))
console.log(Object.keys(instanciaPessoa).length)
//transforma o objeto em um array
console.log(Object.values(instanciaPessoa))

//verificar se o atributo existe mesmo se ele for null
instanciaPessoa.sobrenome = undefined
instanciaPessoa.nome = 'João'
if('sobrenome' in instanciaPessoa){
  console.log(true)
}


//Deixar o objeto imutavel usamos o freeze 
Object.freeze(instanciaPessoa)
instanciaPessoa.nome = 'Pedro'
acessarAttr('nome') //O nome antigo vai permanecer

//heranças
console.log('\n Herança \n')
function Computador(so, modelo, cpu, memoria, armazenamento){
  this.SistemaOperacional = so
  this.tipoModelo = modelo
  this.cpu = cpu
  this.memoria = memoria
  this.armazenamento = armazenamento

  this.Ligar = function(){
    console.log('Inicializando ' + this.SistemaOperacional)
  }
  this.Desligar = function(){
    console.log('Deligando ' + this.SistemaOperacional)
  }
}

function ComputadoGamer (so, tipoModelo, cpu, memoria, armazenamento, placaVideo, telaUltrawide){
  this.placaVideo = placaVideo
  this.telaUltrawide = telaUltrawide
  Computador.call(this, so, tipoModelo, cpu, memoria, armazenamento)
}

function Notebook (so, modelo, cpu, memoria, armazenamento, tela, bateria){
  this.tela = tela
  this.bateria = bateria
  Computador.call(this, so, modelo, cpu, memoria, armazenamento)
}


const pcGabriel = new Notebook("Windows 11 Pro","11th Gen", "Intel(R) Core(TM) i7-1185G7 @ 3.00GHz 1.80 GHz", 16, 500, 14, 5000)

console.log(pcGabriel)
pcGabriel.Ligar()
pcGabriel.Desligar()


//Encapsulamento
/* é uma forma de deixar atributos privados que só podem ser modificados pela propria classe */
// toda propriedade privada começa com _
console.log('\n Encapsulamento \n')
function Funcionario(nome, sobrenome, idade, cargo, salario){  
  this.cargo = cargo
  let _salario = salario

  this.getSalario = function(){
    return _salario
  }

  this.setSalario= function(valor){
    if(typeof valor === 'number')
      _salario = valor
  }

  //Polimorfismo. O valor do aumento é diferente pra cada tipo de cargo
  this.aumento = function(){
    const novoSalario = this.getSalario() * 1.1
    this.setSalario(novoSalario)
  }

  pessoa.call(this, nome, sobrenome, idade)
}

const funcionario1 = new Funcionario("Maria", "Dores", 41, 74, "develop front end", 5000)

console.log(funcionario1)

console.log("Você foi promovido, seu antigo sálario:")
console.log(funcionario1.getSalario())
console.log("Agora você vai passar a receber um novo valor: ")
funcionario1.setSalario(7000)
console.log(funcionario1.getSalario())

//Polimorfismo
// implemento o mesmo método para classes diferentes
console.log('\n Polimorfismo \n')

function Estagiario(nome, sobrenome, idade){

  Funcionario.call(this, nome, sobrenome, idade, "Estágiario", 2000)
  
  //Polimorfismo. aumento de 7% para estagiarios  
  this.aumento = function(){
    const novoSalario = this.getSalario() * 1.07
    this.setSalario(novoSalario)
  }

}

const estagiario1 = new Estagiario("Antônio", "Frederico", 40)
console.log(estagiario1)
estagiario1.aumento()
console.log(estagiario1.getSalario())

function Gerente(nome, sobrenome, idade){

  Funcionario.call(this, nome, sobrenome, idade, "Gerente", 10000)
  
  //Polimorfismo. aumento de 15% para gerentes  
  this.aumento = function(){
    const novoSalario = this.getSalario() * 1.15
    this.setSalario(novoSalario)
  }

}

const gerente1 = new Gerente("Alberto", "Chargas", 40)
console.log(gerente1)
gerente1.aumento()
console.log(gerente1.getSalario())
