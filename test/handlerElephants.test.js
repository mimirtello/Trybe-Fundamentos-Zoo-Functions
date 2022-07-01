const handlerElephants = require('../src/handlerElephants');
const computeData = require('../src/handlerElephants');
const { species } = require('../data/zoo_data');

const elephants = species.find((specie) => specie.name === 'elephants');
const elefantsMap = elephants.residents.map((elephant) => elephant.name);

describe('Testes da função HandlerElephants', () => {
  it('Parametro indefinido retorna undefined', () => {
    expect(handlerElephants(undefined)).toEqual(undefined);
  });
  it('Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(5)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Compute data1', () => {
    expect(computeData('count')).toEqual(elephants.residents.length);
  });
  it('Compute data2', () => {
    expect(computeData('names')).toEqual(elefantsMap);
  });
  it('Compute data3', () => {
    const averageAge = ({ residents }) => residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;
    expect(computeData('averageAge')).toEqual(averageAge(elephants));
  });
  it('Compute data - default', () => {
    expect(computeData('default')).toEqual(null);
  });
  it('Popularidade ser igual a 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
