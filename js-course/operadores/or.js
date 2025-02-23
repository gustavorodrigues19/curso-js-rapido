console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Avaliação curta-circuito
console.log(0 || "Texto"); // "Texto" (retorna o primeiro valor "verdadeiro")
console.log("Texto" || 42); // "Texto" (retorna o primeiro valor "verdadeiro")
