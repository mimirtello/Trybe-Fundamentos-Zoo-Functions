const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  let idAnimal = ids;
  if (idAnimal === '') {
    idAnimal = [];
    return idAnimal;
  }
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
