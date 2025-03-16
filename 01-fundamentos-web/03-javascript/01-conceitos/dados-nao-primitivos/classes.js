class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const pessoa1 = new Pessoa("Gustavo", 28);
console.log(pessoa1.saudacao()); // "Olá, meu nome é Gustavo e tenho 28 anos."
