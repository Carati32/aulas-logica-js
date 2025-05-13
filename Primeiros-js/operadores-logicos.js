//const valor01 = 50

//const valor02 = 20

// && => Operador de conjunção
// || => Operador de disjunção
// !  => Negação

//console.log(`${valor01 > 20 || valor02 >= 30}`)

//faça um algoritmo para verofocar se o candidato pode dirigir. Para isso, ele precisa
// 1 - ter idade >= 18
// 2 - ter carteira

const temCarteira = true

const idade = 16

const resultadoDoTeste = idade >= 18 && temCarteira

console.log(`${resultadoDoTeste ? "pode dirigir" : "Não pode dirigir"}`)

// Jeito mais complicado => console.log(`${idade >= 18 && temCarteira ? "O candidato pode dirigir" : "O candidato não pode dirigir"}`)

