//Utilizando manipulações de lista (push) adicione o seguinte dicionário a sua lista de carros: { modelo: “t-cross”, ano: 2022, placa: “DFC3R43” }

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

console.log(carros);
