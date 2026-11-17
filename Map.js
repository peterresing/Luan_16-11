//Atividade 3.1
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(numero => numero * 2);

console.log(dobrados); 


//Atividade 3.2
const nomes = ["ana", "bruno", "carla"];
const aumentar = nomes.map(nomes => nomes.toUpperCase())

console.log(aumentar)


//Atividade 3.3
const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const nome = produtos.map(produto => produto.nome);

console.log(nome)