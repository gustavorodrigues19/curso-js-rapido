fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response.json(); // Converte o corpo da resposta para JSON
  })
  .then((data) => {
    console.log("Dados recebidos:", data);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
