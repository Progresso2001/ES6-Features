function main(){
    const infPessoa = {
        nome: 'joaquim',
        idade: 48,
        cidade: 'Luanda',
        skills:
            {s1: 'Python', s2: 'JavaScript', s3:'MongoDB'}
    }
    const { nome, skills: { s1: skills_1, ...s }, tools = fer } = infPessoa

    console.log("Nome do usuario: ", nome)
    console.log("Skills principais: ", skills_1)
    console.log(s)
}
main()

//Extrair dados usando parametro na funcao 

function userId(id){
    return id;
}
function pessoa({ nome, nomeCompleto: { sobrenome: apelido }}){
    console.log(nome + " é " + apelido)
    console.log("Mais conhecido por: " +  apelido)
    
}
const user = {
    id: 40,
    nome: 'Joaquim',
    nomeCompleto: {
        sobrenome: 'DevJocas'
    }
}
console.log("userId: " + userId(user.id))

pessoa(user)