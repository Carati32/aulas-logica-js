// function saudacao(){
//     console.log("Bom dia")
// }

// arrow function com parãmetros
// const saudacao = (turno,nome="Pão")=>{
//     console.log(`${turno} ${nome}`)
// }

// saudacao("Bom dia","Carati")
// saudacao("Boa noite")

// const soma = (x,y)=>{
//     return x+y
// }

const soma = (x,y)=> x+y  

const subtracao = (x,y)=> x-y

const multiplicacao = (x,y)=> x*y

const divisao = (x,y)=> x/y

// const resultadoDaSoma = soma(4,4)

// console.log(resultadoDaSoma)

//função retornando o cálculo de duas funções

// const calculo = (x,y,z,a)=>{
//     return soma(x,y) + multiplicacao(z,a)
// }

// const resultadoDoCalculo = calculo(10,2,5,7)

// console.log("Resultado do cálculo",resultadoDoCalculo)

//retornar o valor de várias funções em um return dentro de um objeto

// const calculo = (x,y)=>{
//     return{
//         soma:soma(x,y),
//         subtracao:subtracao(x,y),
//         multiplicacao:multiplicacao(x,y),
//         divisao:divisao(x,y)
//     }
// }

// const resultadoFinalDoCalculo = calculo(20,10)

// console.log("Resultado final",resultadoFinalDoCalculo)

//escopo global e local (de bloco ou função)

const escopoGlobal = "Escopo Global"

function chamaEscopo(){
    const escopoLocal = "Escopo Local"
    console.log(escopoGlobal)
}

console.log(escopoGlobal)