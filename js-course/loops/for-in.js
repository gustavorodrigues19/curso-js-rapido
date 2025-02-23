const pessoa = { nome: "João", idade: 25 };

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
// Resultado:
// nome: João
// idade: 25

const numeros = [10, 20, 30];

for (const indice in numeros) {
  console.log(`Índice ${indice}: ${numeros[indice]}`);
}
// Resultado:
// Índice 0: 10
// Índice 1: 20
// Índice 2: 30
