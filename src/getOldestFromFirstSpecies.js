const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const primeiraEspecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animais = data.species.find((specie) => specie.id === primeiraEspecie).residents;
  const maisVelho = animais.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);
  return Object.values(maisVelho);
}

module.exports = getOldestFromFirstSpecies;
