const calcularValorPedido = require("./calcular-valor-pedidos");

it("Não deve cobrar o valor de frete, quando o valor do pedido for maior que R$ 500,00", () => {
  // AAA = 3 passos de criaçào de um teste

  // ARRANGE = Algum dado para testar a função, neste caso um array do pedido
  const meuPedido = {
    itens: [
      { nome: "Arco encantado", valor: 2000 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  // ACT = Ação (calcular valor do pedido)
  const resultado = calcularValorPedido(meuPedido);

  // ASSERT = Asserção -> Qual o resultado esperado?
  expect(resultado).toBe(2000);
});

it("Deve cobrar o valor de frete, quando o valor do pedido for menor que R$ 500,00", () => {
  const meuPedido = {
    itens: [
      { nome: "Mina explosiva", valor: 150 },
      { nome: "Rifle de assalto", valor: 100 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(meuPedido);

  expect(resultado).toBe(350);
});

it("Deve cobrar valor do frete caso o valor dos produtos seja EXATAMENTE R$ 500,00", () => {
    const meuPedido = {
      itens: [
        { nome: "Mina explosiva", valor: 250 },
        { nome: "Rifle de assalto", valor: 250 },
        { nome: "Entrega", valor: 50, entrega: true },
      ],
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(550);
  });

  //Caso os estados de entrega sejam RS ou SC, deve ser acrescido um valor de 30%  a mais na entrega
  it('Deve adicionar um acréscimo de 30%, no valor da entrega do pedido, caso o estado seja RS', () => {
    const pedidoComEstadoRs = {
        estado: 'RS',
        itens: [
        { nome: "Mina explosiva bem cara", valor: 500 },
        { nome: "Entrega", valor: 100, entrega: true },
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRs);

    expect(resultado).toBe(630)
  })

    it('Deve adicionar um acréscimo de 30%, no valor da entrega do pedido, caso o estado seja SC', () => {
    const pedidoComEstadoRs = {
        estado: 'RS',
        itens: [
        { nome: "Mina explosiva bem cara", valor: 500 },
        { nome: "Entrega", valor: 100, entrega: true },
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRs);

    expect(resultado).toBe(630)
  })

      it('Não deve adicionar um acréscimo de 30%, no valor da entrega do pedido, caso o estado seja diferente de SC ou RS', () => {
    const pedidoComEstadoRs = {
        estado: 'SP',
        itens: [
        { nome: "Mina explosiva bem cara", valor: 500 },
        { nome: "Entrega", valor: 100, entrega: true },
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRs);

    expect(resultado).toBe(600)
  })