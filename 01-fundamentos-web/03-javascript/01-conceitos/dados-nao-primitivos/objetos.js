const pessoa = {
  nome: "Gustavo",
  idade: 28,
  saudacao: function () {
    return `Olá, meu nome é ${this.nome}`;
  },
};

console.log(pessoa.nome); // "Gustavo"
console.log(pessoa.saudacao()); // "Olá, meu nome é Gustavo"
