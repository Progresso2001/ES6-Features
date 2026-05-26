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

// usando o laço for...of

const usuarios = [
    {id:1, nome: 'Ana', idade:23},
    {id:2, nome: 'Joaquim', idade:33},
    {id:3, nome: 'Luis', idade:3},
    {id:4, nome: 'Bento', idade:63}
]
// Extrair pelo id e nome

for(const { id, nome } of usuarios){
    console.log(`${id}-${nome}`)
}

// Clássico for com desestruturação no índice
for (let i = 0; i < usuarios.length; i++) {
  const { id, nome } = usuarios[i];
  console.log(`${id} - ${nome}`);
}

// Exemplo com id específico (comum em APIs)
function buscarUsuarioPorID(usuarios, targetId) {
  for (const { id, nome, email } of usuarios) {
    if (id === targetId) {
      return { id, nome, email }; // retorna objeto desestruturado
    }
  }
  return null;
}

const usuario = buscarUsuarioPorID(usuarios, 2);
console.log(usuario.nome); 
