// Função de soma simples
const soma = (a, b) => {
    return a + b;
}


// Função de paridade de números
const paridade = (numero) => {

    if (numero % 2 === 0) {
        return `O número ${numero} é par.` 
    } else {
        return `O número ${numero} é ímpar.`
    }
}

// Função de maioridade

const maioridade = (idade) => {
    return (idade >= 18)? `Se você tem ${idade} anos, então é maior de idade`: `Se você tem ${idade} anos, então é menor de idade`
}

module.exports = { soma, paridade, maioridade };