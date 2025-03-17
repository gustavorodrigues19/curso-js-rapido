const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados recebidos!");
    }, 2000);
  });
};

const processData = async () => {
  console.log("Buscando dados...");
  const data = await fetchData();
  console.log(data);
};

processData();
