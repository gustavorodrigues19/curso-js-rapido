// Exemplo de break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// Resultado:
// 0
// 1
// 2
// 3
// 4

// Exemplo de continue
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// Resultado:
// 1
// 3
// 5
// 7
// 9
