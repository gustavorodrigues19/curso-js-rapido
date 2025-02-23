function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3)); // 5

// Funções podem ser atribuídas a variáveis
const saudacao = (nome) => {
  console.log("ui", this);
  return `Olá, ${nome}`;
};
console.log(saudacao("Maria")); // "Olá, Maria"
