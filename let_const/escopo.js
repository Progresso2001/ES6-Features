// Escopo de bloco
let nome = "Joaquim" //escopo global

if(true){
    //escopo local
    let nome = 'Jocas'
    setTimeout(()=>console.log(`Olá Bom Dia ,Dev${nome}`), 2000)
}
console.log(nome)