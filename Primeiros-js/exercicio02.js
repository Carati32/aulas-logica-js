const produto01 = {
    nome:"garrafa",
    preco: 20.00,
    quantidade: 3
}

const produto02 ={
    nome:"abridor",
    preco: 5.00,
    quantidade: 2
}

const totalDoProduto1 = produto01.preco * produto01.quantidade

const totalDoProduto2 = produto02.preco * produto02.quantidade

console.log (`O resultado do calculo final é ${totalDoProduto1 + totalDoProduto2}`)