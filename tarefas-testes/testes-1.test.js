const { soma, paridade, maioridade } = require('./testes-1')

// Teste da função de somar dois números
it('Deve somar dois números', () => {
    
    const a = 1;
    const b = 2;

    const resultado = soma(a, b)

    expect(resultado).toBe(3)
})

it('Deve somar dois números, sendo um deles 0', () => {
    const a = 0;
    const b = 2;

    const resultado = soma(a, b)

    expect(resultado).toBe(2)
})

it('Deve somar dois números, sendo um deles negativo', () => {
    const a = -2;
    const b = 3;

    const resultado = soma(a, b)

    expect(resultado).toBe(1)
})

//Teste da funçào de paridade
it('Deve receber um número e definir que é par', () => {
    const numero = 2;

    const resultado = paridade(numero)

    expect(resultado).toBe(`O número ${numero} é par.`);
})

it('Deve receber um número e definir que é ímpar.', () => {
    const numero = 3;

    const resultado = paridade(numero)

    expect(resultado).toBe(`O número ${numero} é ímpar.`)
})

it('Deve receber o número 0 e retornar que é par.', () => {
    const numero = 0;

    const resultado = paridade(numero)

    expect(resultado).toBe(`O número ${numero} é par.`)
})

it('Deve receber um número negativo e retornar que é par.', () => {
    const numero = -2;

    const resultado = paridade(numero)

    expect(resultado).toBe(`O número ${numero} é par.`)
})

it('Deve receber um número negativo e retornar que é ímpar.', () => {
    const numero = -5;

    const resultado = paridade(numero)

    expect(resultado).toBe(`O número ${numero} é ímpar.`)
})

// Teste de funçào de maioridade
it ('Deve receber uma idade MAIOR que 18 e retornar que é de maior.', () => {
    const idade = 20;

    const resultado = maioridade(idade)

    expect(resultado).toBe(`Se você tem ${idade} anos, então é maior de idade`)
})

it('Deve receber uma idade EXATAMENTE igual a 18 e retornar que é de maior.', () => {
    const idade = 18;

    const resultado = maioridade(idade)

    expect(resultado).toBe(`Se você tem ${idade} anos, então é maior de idade`)
})

it('Deve receber uma idade MENOR que 18 e retornar que é de menor.', () => {
    const idade = 16;

    const resultado = maioridade(idade)

    expect(resultado).toBe(`Se você tem ${idade} anos, então é menor de idade`)
})