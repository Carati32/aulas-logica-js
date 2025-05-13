// declaração de variável com var

/*var nome = "Carati"

var nome = "João"*/

// declaração de variável com let

// let nome = "Carati"

// nome = "João"

// variável declarada com const

const nome = "Yuri" //string

const sobrenome = "Carati"

const valor = 21.90 // number

const isLogin = false // boolean

let preco //undefined

const endereco = null //null

const alunos = ["João", "Maria", "José"] //array

const alunoDoSenai = {
    nome:"Yuri",
    sobrenome:"Carati",
    turno:"noturno",
    idade:17,
    cursos:["games","programação web"]
}

const alunosDoSenai = [
    {
        login:"joao",
        email:"joao@gmail.com",
        cursos:["games","web"]
    },
    {
        login:"maria",
        email:"maria@gmail.com",
        cursos:["design","games"]
    }
]


//console.log(nome + " " + sobrenome)

console.log(`Meu nome completo é ${nome} ${sobrenome} ${4 + 4}`)

//console.log(alunosDoSenai[1].cursos[0])


//console.log(alunos[0]) // pega o valor do índice do array