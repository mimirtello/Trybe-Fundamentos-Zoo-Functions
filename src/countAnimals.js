const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  if (!animal.sex) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  const zooAnimal = species.find((specie) => specie.name === animal.specie);
  return zooAnimal.residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
