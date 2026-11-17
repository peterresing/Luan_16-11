//Atividade 4.1
const numeros = [1, 2, 3, 4, 5, 6];

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares);


//Atividade 4.2
const nota = [5, 8, 6.5, 9, 7];

const aprovado = nota.filter(numero => numero >= 7 );

console.log(aprovado);


//Atividade 4.3
const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const aprovadosNomes = produtos
  .filter(produto => produto.preco <= 50)
  .map(produto => produto.nome);

console.log(aprovadosNomes);