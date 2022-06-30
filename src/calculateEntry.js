const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((crianca) => crianca.age < 18).length;
  const adult = entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50).length;
  const senior = entrants.filter((idoso) => idoso.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  return Object.keys(prices).reduce((acc, curr) => acc + (prices[curr] * countEntrants(entrants)[curr]), 0);
}

module.exports = { calculateEntry, countEntrants };
