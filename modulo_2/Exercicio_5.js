//Faça um laço (while) que, com a ajuda de um contador, vá imprima a mensagem na tela: No dia X da semana, os veículos de rodízio são: [...]

const veiculos = [
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

const rodizioVeiculos = (diaSemana) => {
  const rodizio = {
    0: ["1", "2"],
    1: ["3", "4"],
    2: ["5", "6"],
    3: ["7", "8"],
    4: ["9", "0"],
    5: [],
    6: [],
  };

  if (diaSemana === 5 || diaSemana === 6) {
    return "Não há rodízio neste dia";
  }

  const finalPlaca = rodizio[diaSemana];

  const veiculosDisponiveis = veiculos.filter((item) =>
    finalPlaca.includes(item.placa.slice(-1))
  );

  return veiculosDisponiveis.length > 0
    ? veiculosDisponiveis
    : "Não há veículos disponíveis";
};

let contador = 0;

while (contador <= 6) {
  const rodizio = rodizioVeiculos(contador);
  const modelos = Array.isArray(rodizio)
    ? rodizio.map((v) => v.modelo).join(", ")
    : rodizio;
  console.log(
    `No dia ${contador} da semana, os veículos de rodízio são: ${modelos}`
  );
  contador += 1;
}
