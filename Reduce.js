/*/function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    },)
}

const arr = [43, 79];

console.log(somaNumeros(arr));/*/

const lista = [
    {
        nome: 'sabão em pó',
        preco: 5.75,
    },
    {
        nome: 'granola',
        preco: 7.95,
    },
    {
        nome: 'iogurte',
        preco: 3.25,
    }
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log("rodada", index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));