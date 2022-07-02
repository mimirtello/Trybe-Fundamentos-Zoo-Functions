const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function AllEmployees() {
  const array = employees.map((employee) => {
    const objetoEmployee = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor
        .map((animal) => species
          .filter((specie) => specie.id === animal)[0].name),
      locations: employee.responsibleFor
        .map((animal) => species
          .filter((specie) => specie.id === animal)[0].location),
    };
    return objetoEmployee;
  });
  return array;
}
function getEmployeesLastNames(name) {
  const funcionario = employees.find((employee) => employee.lastName === name.name);
  const animais = species.filter((specie) => funcionario.responsibleFor.includes(specie.id));

  const objeto = {
    id: funcionario.id,
    fullName: `${funcionario.firstName} ${funcionario.lastName}`,
    species: animais.map((animal) => animal.name),
    locations: animais.map((animal) => animal.location),
  };
  return objeto;
}

function getEmployeesNames(name) {
  const funcionario = employees.find((employee) => employee.firstName === name.name);
  const animais = species.filter((specie) => funcionario.responsibleFor.includes(specie.id));

  const objeto = {
    id: funcionario.id,
    fullName: `${funcionario.firstName} ${funcionario.lastName}`,
    species: animais.map((animal) => animal.name),
    locations: animais.map((animal) => animal.location),
  };
  return objeto;
}
function employeesId(obj) {
  if (employees.find((employee) => employee.id === obj.id)) {
    const funcionario = employees.find((employee) => employee.id === obj.id);
    const animais = species.filter((specie) => funcionario.responsibleFor.includes(specie.id));
    const objeto = {
      id: obj.id,
      fullName: `${funcionario.firstName} ${funcionario.lastName}`,
      species: animais.map((animal) => animal.name),
      locations: animais.map((animal) => animal.location),
    };
    return objeto;
  }
}

function verificaErro(obj) {
  const verifica1 = employees.some((employee) => Object.values(employee).includes(obj));
  const verifica2 = employees.some((employee) => Object.values(employee).includes(obj));
  if (verifica1 === false && verifica2 === false) {
    return false;
  }
}
function lancaErro(obj) {
  if (verificaErro(obj) === false) {
    throw new Error('Informações inválidas');
  }
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return AllEmployees();
  }
  if (employees.find((employee) => employee.firstName === obj.name)) {
    return getEmployeesNames(obj);
  }
  if (employees.find((employee) => employee.lastName === obj.name)) {
    return getEmployeesLastNames(obj);
  }
  if (employees.find((employee) => employee.id === obj.id)) {
    return employeesId(obj);
  }
  lancaErro(obj);
}

module.exports = getEmployeesCoverage;
