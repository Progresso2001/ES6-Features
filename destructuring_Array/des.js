// DESTRUCTURING Array AND Object

const skills = ['CSS', 'HTML', 'NODE']
// destructuring array
let [css, html, node] = skills
console.log(css)
console.log(html)
console.log(a)

// Ignorando Valores em Desestruturação de Arrays
const fullName = ['John', 'Doe', 'Smith'];

const [firstName, , lastName] = fullName;

console.log(firstName); 
console.log(lastName);  

// / destructuring objecto -> extrai propriedade por nome da chave

const pessoa ={
    firstName:"DevJocas",
    lastName: "Eliseu",
    age: 26
}

let {firstName, lastName} = pessoa

console.log(`O seu nome é: ${firstName}`)
// console.log(`Sobrenome é: ${lastName}`)

// Desestruturação com Renomeação de Variáveis

const user = {
    usernome: "joaquim",
    email:'joaquim@gmail.com'
}
const { usernome:userNome, email:userEmail } = user
console.log(userNome)
console.log(userEmail)

// Desestruturação com Valores Padrão

const opcoes = {
    tempo: 1200
}
const { tempo, hora=3 } = opcoes
console.log(hora)
console.log(tempo)

// Desestruturação em Parâmetros de Função

function saudar ({ nome, idade, profissao}){
    console.log(`Olá eu sou ${nome}, e tenho ${idade} de idade e sou ${profissao}`)
}
const pessoa = {
    nome: 'DevJocas',
    idade: 23,
    profissao: 'Programador'
}
saudar(pessoa)

// Aninhamento de Desestruturação
const funcionario = {
    id: 1,
    nome: 'Joaquim',
    departamento: {
        nome: 'Engenharia',
        sala: 'Building 1'
    }
}
const { nome: nomeFunc, departamento: { nome: deptNome, sala }} = funcionario

console.log(nomeFunc)
console.log(deptNome)
console.log(sala)


// usando operador rest  

const jogadores = ['Cristiano','Neymar',  'Bale', 'Serigo Ramos', 'Pepe']
const [ronaldoJogador, , ...restJogadores] = jogadores

console.log("O melhor jogador do mundo: ", ronaldoJogador)
console.log(restJogadores)

const melhorJogadores = {
    real_madrid: 'Vinicius Junior',
    barcelona: 'Lamine Yamal',
    chelsea: 'Neto',
    premios: {
        real_madrid : 12,
        barcelona: 10, 
        paris: 3
    }
}
const { real_madrid:jogadorReal, premios:{real_madrid:realPremios}, ...club } = melhorJogadores
console.log(jogadorReal);

console.log(realPremios);
console.log(club);

// Default value
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName, country = "US"} = person;
console.log(country)



