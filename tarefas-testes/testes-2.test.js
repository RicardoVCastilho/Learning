const { calcularDesconto, freteGratis, estaAprovado} = require('./testes-2')

// Testes da função de desconto de 10%
it('Deve receber um valor e, se for maior que 100, aplicar um desconto de 10%.', () => {
    const valor = 150;
    
    const resultado = calcularDesconto(valor);

    expect(resultado).toBe(135)
})

it('Deve receber o valor EXATAMENTE igual a 100 e não aplicar desconto nenhum.', () => {
    const valor = 100;
    
    const resultado = calcularDesconto(valor);

    expect(resultado).toBe(100)
})

it('Deve receber um valor e, se for menor que 100, não aplicar desconto nenhum.', () => {
    const valor = 90;
    
    const resultado = calcularDesconto(valor);

    expect(resultado).toBe(90)
})

// Testes da funçào de frete grátis
it('Deve receber o valor de um produto e, se o valor for menor que 300 reais, adicionar 20 reais de frete.', () => {
    const valorDoFrete = 20;
    const value = 200;

    const resultado = freteGratis(value);

    expect(resultado).toBe(`Seu produto tem o valor de ${value}, então o frete é de ${valorDoFrete} e o total da compra é de ${value + valorDoFrete}.`)
})

it('Deve receber o valor de um produto e, se o valor EXATAMENTE IGUAL a 300 reais, deve adicionar 20 reais de frete.', () => {
    const valorDoFrete = 20;
    const value = 300;

    const resultado = freteGratis(value);

    expect(resultado).toBe(`Seu produto tem o valor de ${value}, então o frete é de ${valorDoFrete} e o total da compra é de ${value + valorDoFrete}.`)
})

it('Deve receber o valor de um produto e, se o valor for maior que 300 reais, não cobrar o frete.', () => {
    const value = 350;

    const resultado = freteGratis(value);

    expect(resultado).toBe(`Seu produto tem o valor de ${value}, então o frete é grátis e o total da compra é de ${value}.`)
})

// Testes função das notas do aluno
it('Deve receber a nota de um aluno e, se for maior ou igual a 7, deve retonar que o aluno foi aprovado.', () => {
    const nota = 8;

    const resultado = estaAprovado(nota);

    expect(resultado).toBe('Aluno aprovado.')
})

it('Deve receber a nota de um aluno e, se for igual a 7, deve retonar que o aluno foi aprovado.', () => {
    const nota = 7;

    const resultado = estaAprovado(nota);

    expect(resultado).toBe('Aluno aprovado.')
})

it('Deve receber a nota de um aluno e, se estiver entre 5 e 6.9, deve retonar que o aluno está em recuperação.', () => {
    const nota = 6;

    const resultado = estaAprovado(nota);

    expect(resultado).toBe('Aluno em recuperação.')
})

it('Deve receber a nota de um aluno e, se for igual a 5, deve retonar que o aluno está em recuperação.', () => {
    const nota = 5;

    const resultado = estaAprovado(nota);

    expect(resultado).toBe('Aluno em recuperação.')
})

it('Deve receber a nota de um aluno e, se for menor que 5, deve retonar que o aluno foi reprovado.', () => {
    const nota = 4.9;

    const resultado = estaAprovado(nota);

    expect(resultado).toBe('Aluno reprovado.')
})
