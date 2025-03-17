console.log(mensagem); // undefined (a declaração foi elevada, mas não o valor)
var mensagem = "Hoisting com var";
console.log(mensagem); // "Hoisting com var"

// É equivalente a:
var mensagem; // Declaração elevada
console.log(mensagem); // undefined
mensagem = "Hoisting com var"; // Inicialização
console.log(mensagem); // "Hoisting com var"
