const {suma, resta} = require('./suma');


test('sumar 2 + 2 es igual a 4', () => {
    expect(suma(2, 2)).toBe(4);
  });


  test('restar 2 - 4 es igual a 2', () => {
    expect(resta(2, 4)).toBe(-2);
  });