console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Avaliação curta-circuito
console.log(0 && "Texto"); // 0 (retorna o primeiro valor "falso")
console.log("Texto" && 42); // 42 (retorna o último valor "verdadeiro")
