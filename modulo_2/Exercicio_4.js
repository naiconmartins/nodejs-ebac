//Faça uma função que receba como parâmetroo dia da semana (como um número, de 0 a 6) e retornea lista de veículos que possuem rodízio naquele dia OBS: O rodízio de veículos segue a seguinte regra:
//-Segunda feira: finais de placa 1 e 2
//-Terça feira: finais de placa 3 e 4
//-Quarta feira: finais de placa 5 e 6
//-Quinta feira: finais de placa 7 e 8
//-Sexta feira: finais de placa 9 e 0
//-Sábado e Domingos: Não tem rodízio

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

console.log(rodizioVeiculos(4));
