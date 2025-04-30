// crie uma função que receba um array chamada desmembraArray que execute um laço for e exiba todos os itens abaixo do outro

let numeros = ["1","2","3","4","5"]

function desmembraArray(numeros){
    for(let i = 0; i < numeros.length;i++){
        console.log(numeros[i])
    }
}

desmembraArray(numeros)