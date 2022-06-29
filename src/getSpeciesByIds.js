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

getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '0938aa23-f153-4937-9f88-4858b24d6bce')
module.exports = getSpeciesByIds;
