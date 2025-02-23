function exemploVar() {
  if (true) {
    var mensagem = "Var está disponível dentro da função";
  }
  console.log(mensagem); // Funciona, pois o escopo é da função
}
exemploVar();

// Redefinição com var
var numero = 10;
var numero = 20; // Isso funciona
console.log(numero); // 20
