let produtos = ["Fone de ouvido", "Cabo USB", "Pelicula", "Fonte de carregador"];
let precos = [50, 35, 25, 70];
let quantidades = [0, 0, 0, 0];

function adicionarProduto(produto, quantidade) {
  let index = produtos.indexOf(produto);
  quantidades[index] += quantidade;
}

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += precos[i] * quantidades[i];
  }
  return total;
}