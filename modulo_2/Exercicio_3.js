//Ordene a sua lista de carros pelo nome do modelo em ordem alfabética

const carros = [
  {
    modelo: "Corolla",
    ano: 2022,
    placa: "OHW3458",
  },
  {
    modelo: "Mustang",
    ano: 2021,
    placa: "LPJ8765",
  },
  {
    modelo: "Civic",
    ano: 2020,
    placa: "LYU8872",
  },
  {
    modelo: "Golf GTI",
    ano: 2017,
    placa: "PTJ2309",
  },
];

carros.push({ modelo: "t-cross", ano: 2022, placa: "DFC3R43" });

const veiculos = carros.sort(function (a, b) {
  if (a.modelo < b.modelo) {
    return -1;
  }
  if (a.modelo > b.modelo) {
    return 1;
  }
  return 0;
});

console.log(veiculos);
