function exemploLet() {
  if (true) {
    let mensagem = "Let está disponível apenas no bloco";
    console.log(mensagem); // Funciona
  }
  // console.log(mensagem); // Erro! Fora do escopo do bloco
}

exemploLet();

// Reatribuição com let
let numero = 10;
// let número = 20; // Erro! Não pode ser redefinido
numero = 20; // Funciona, reatribuído
console.log(numero); // 20
