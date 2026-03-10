//Função de somar itens de um carrinho
const somarCarrinho = (carrinho) => {
  let total = 0;

  for (let i = 0; i < carrinho.itens.length; i++) {
    total += carrinho.itens[i].valor;
  }

  return total
};

// Obs.: Nesta função utilizamos um loop com for tradicional para percorrer o array dos itens do carrinho, buscando o valor e somando até chegar no final do arrary

module.exports = somarCarrinho;