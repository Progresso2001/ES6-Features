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