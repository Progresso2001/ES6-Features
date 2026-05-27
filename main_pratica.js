const linguagenFavouritas = ['Python', 'JavaScript', 'MySQL', 'Node.js', 'Express.js']
const escolherLinguagens =  linguagenFavouritas[0]
if(escolherLinguagens === undefined){
    console.log("Não existe valor neste indice: ", escolherLinguagens)
}else{
    console.log("Existe o valor deste indice correto: ",escolherLinguagens)
}

// usando desestruturação de Arrays
// Nota: A desestruturação reduz o uso de codigo e mantém o codigo mais limpo e conciso
const [ escolha_0 ,escolha_1, ...outros ] = linguagenFavouritas
console.log("As Minhas linguiagens de programação  favourita: ", escolha_0 + ", " + escolha_1)
console.log("Banco de dado e frameworks favourito: ", outros)

// usando objectos
const minhasLinguagens = {
    nome:'DevJocas',
    idade: 23,
    cidade: 'Luanda',
    linguagens: {
       1: 'JavaScript', 2: 'Python', 3:'MySQL', 4:'Node.js', 5:'Express.js'
    }
}

const { nome, linguagens: {1: primeiraFavourita, 2:segundaFavourita}} = minhasLinguagens
console.log(`Olá, chamo-me: ${nome} e gosto de estudar ${primeiraFavourita}`)
console.log("Tenho como outra linguagem favourita: ", segundaFavourita)

// usando função
function escolherLinguagem( { nome, linguagens: { 3:bancoDeDados, 4:node}}){
    console.log(`Olá, chamo-me: ${nome}`)
    console.log(`Estou a estudar: ${bancoDeDados}`)
    console.log(`Estou a estudar o framework: ${node}`)

}
escolherLinguagem(minhasLinguagens)

