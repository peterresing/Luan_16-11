//Atividade 2.1
let idade = 18;
let situacao = idade <= 20 ? "Maior de idade" : "Menor de idade";

console.log(situacao);


//Atividade 2.2
const statusNota = (nota) => {
   let status = nota >= 7 ? "Aprovado" : "Reprovado";
   return status
}
console.log(statusNota(7));


//Atividade 2.3
const textoBotao = (logado) => {
   let casa = logado >= (true, false) ? "Entrar" : "Sair";
   return casa
}
console.log(textoBotao(false));