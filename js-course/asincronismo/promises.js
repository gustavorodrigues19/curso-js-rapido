const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados carregados!");
    }, 2000);
  });
};

console.log("Solicitando dados...");

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
