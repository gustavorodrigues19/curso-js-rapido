function exemploConst() {
  const mensagem = "Const é imutável para o identificador";
  console.log(mensagem); // Funciona
  // mensagem = "Nova mensagem"; // Erro! Não pode ser atribuído novamente
}
exemploConst();

// Const com objetos e arrays
const pessoa = { nome: "João" };
pessoa.nome = "Maria"; // Funciona, pois o conteúdo pode ser alterado
console.log(pessoa);

// const pessoa = {}; // Erro! Não pode redefinir o identificador
