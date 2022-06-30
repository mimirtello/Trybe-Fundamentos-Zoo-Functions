const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const array = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  employees.forEach((item, index) => {
    if (employees[index].managers.includes(managerId)) {
      array.push(`${employees[index].firstName} ${employees[index].lastName}`);
    }
  });
  return array;
}

module.exports = { isManager, getRelatedEmployees };
