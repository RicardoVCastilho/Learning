// Função: Calculadora de desconto
const valorDesconto = 0.1;

const calcularDesconto = (valor) => {

    const desconto = valor * valorDesconto;

    if(valor > 100) {
        return valor - desconto;
    } else {
        return valor;
    }
}

// Função de frete grátis
const valorDoFrete = 20;

const freteGratis = (value) => {
    return (value > 300)? `Seu produto tem o valor de ${value}, então o frete é grátis e o total da compra é de ${value}.`: `Seu produto tem o valor de ${value}, então o frete é de ${valorDoFrete} e o total da compra é de ${value + valorDoFrete}.`
}

// Função das notas de um aluno
const estaAprovado = (nota) => {
    if(nota >= 7) {
        return `Aluno aprovado.`
    } else if (nota >= 5) {
        return `Aluno em recuperação.`
    } else {
        return `Aluno reprovado.`
    }
}

module.exports = {calcularDesconto, freteGratis, estaAprovado};