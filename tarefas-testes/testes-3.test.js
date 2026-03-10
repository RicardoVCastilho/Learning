const somarCarrinho = require('./testes-3')

// Testes da função de somar o valor dos itens do carrinho
it("Deve somar o valor dos vários itens do carrinho, recebidos em um array", () => {
  const carrinho = {
    itens: [
      { nome: "Re9", valor: 300 },
      { nome: "Re8", valor: 200 },
    ],
  };

  const resultado = somarCarrinho(carrinho)

  expect(resultado).toBe(500)
});

it("Deve somar o valor de um único item do carrinho, recebido em um array", () => {
  const carrinho = {
    itens: [
      { nome: "PS5", valor: 3500 },
    ],
  };

  const resultado = somarCarrinho(carrinho)

  expect(resultado).toBe(3500)
});

it("Deve retornar 0 quando o array do carrinho estiver vazio.", () => {
  const carrinho = {
    itens: [],
  };

  const resultado = somarCarrinho(carrinho)

  expect(resultado).toBe(0)
});