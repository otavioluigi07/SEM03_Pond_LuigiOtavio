// index.test.js
const saudacao = require('./index');

test('saudacao deve retornar a saudação correta', () => {
  expect(saudacao('Luigi')).toBe('Olá, Luigi!');
});
