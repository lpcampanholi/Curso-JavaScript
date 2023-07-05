const pessoa = {
    nome: 'Silva',
    idade: '28',
    endereco: 'Rua Santos Dumont',
    pets:['hamster', 'gato', 'cachorro'],
    carros: {
        camaro: {
            placa: '123456',
            cor: 'amarelo'
        },
        fusca: {
            placa: '654321',
            cor: 'azul'
        }
    },
    andar: function (km) {
        console.log(`${pessoa.nome} andou ${km} km`)
    }
}


pessoa.nome = 'Luís'
pessoa.pets[0] = 'papagaio'

/*console.log(pessoa.nome)
console.log(pessoa.pets[0])
console.log(pessoa)*/

const pc = 'avell'

console.log(pessoa.carros.fusca.placa)


pessoa.andar(50)