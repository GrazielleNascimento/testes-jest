const calculadora = require('./index');

test('Soma de 2 e 2 deve ser 4', () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test('Subtrair 5 de 8 deve ser 3', () => {
  expect(calculadora.subtrair(8, 5)).toBe(3);
});

test('Multiplicar 4 por 3 deve ser 12', () => {
  expect(calculadora.multiplicar(4, 3)).toBe(12);
});

test('Dividir 10 por 2 deve ser 5', () => {
  expect(calculadora.dividir(10, 2)).toBe(5);
});

test('Potência de 2 elevado a 3 deve ser 8', () => {
  expect(calculadora.potencia(2, 3)).toBe(8);
});

test('Divisão por zero deve lançar um erro', () => {
  expect(() => calculadora.dividir(5, 0)).toThrowError('Não é possível dividir por zero');
});
