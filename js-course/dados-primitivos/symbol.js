const simbolo1 = Symbol("descricao");
const simbolo2 = Symbol("descricao");

console.log(simbolo1); // Symbol(descricao)
console.log(simbolo1 === simbolo2); // false (símbolos são sempre únicos)
