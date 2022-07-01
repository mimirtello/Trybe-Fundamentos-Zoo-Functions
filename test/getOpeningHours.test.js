const getOpeningHours = require('../src/getOpeningHours');
const validateHour = require('../src/getOpeningHours');
const validateDay = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');
const validateAbbreviation = require('../src/getOpeningHours');
const isStringRepresentNumber = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Passando AM e PM', () => {
    expect(() => (!['AM', 'PM'].includes('AM', 'PM') === true).toThrow(Error));
  });
  it('hora maior que 12 ou menor que 0', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('case 1 - The hour must be between 0 and 12', () => {
    expect(() => (validateHour('15:13')).toThrow(Error));
  });
  it('minuto maior que 59 ou menor que 0, retorna erro.', () => {
    expect(() => { getOpeningHours('Monday', '12:70-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
  it('case 2 - The minutes must be between 0 and 59', () => {
    expect(() => (validateHour('15:80')).toThrow(Error));
  });
  it('The day must be valid. Example: Monday', () => {
    expect(() => (validateDay('Monday')).toThrow(Error));
  });
  it('Empty', () => {
    expect(getOpeningHours('', '')).toEqual(hours);
  });
  it('validateAbbreviation ', () => {
    expect(() => validateAbbreviation('AP', 'PA')).toThrow(Error);
  });
  it('Abreviação.', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-CM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('validateAbbreviation ', () => {
    expect(() => validateAbbreviation('AM', 'PM')).toBeTruthy();
  });
  it('Close or Open1', () => {
    expect(getOpeningHours('Monday', '9:00-AM')).toBeTruthy();
  });
  it('Close or Open2', () => {
    expect(getOpeningHours('Tuesday', '9:00-PM')).toBeTruthy();
  });
  it('Close or Open3', () => {
    expect(getOpeningHours('Wednesday', '10:00-PM')).toBeTruthy();
  });
  it('String or Number', () => {
    expect(() => isStringRepresentNumber('9', '9')).toThrow(Error);
  });
  it('Message zoo', () => {
    expect(getOpeningHours('Wednesday', '10:00-AM')).toEqual('The zoo is open');
  });
  it('Message zoo1', () => {
    expect(getOpeningHours('Monday', '10:00-PM')).toEqual('The zoo is closed');
  });
});
