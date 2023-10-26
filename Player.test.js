const Player = require("./Player");

test("Crear jugador", () => {
  const j1 = new Player("Pepe", 0);
  expect(j1.name).toBe("Pepe");
  expect(j1).toEqual({ name: "Pepe", ranking: 0 });
});

test("Crear jugador con ranking", () => {
  const jugador1 = new Player("Pepe", 7);
  expect(jugador1.ranking).toBe(7);
  jugador1.ranking = 9;
  expect(jugador1.ranking).toBe(9);
  expect(jugador1).toEqual({ ranking: 9, name: "Pepe" });
});

test("Crear jugador male", () => {
  const j1 = new Player("Pepe", 0, "male");
  expect(j1.name).toBe("Pepe");
  expect(j1.gender).toBe("male");
});

test("Crear jugador female", () => {
  const j1 = new Player("Ana", 0, "female");
  expect(j1.name).toBe("Ana");
  expect(j1.gender).toBe("female");
});

test("Crear jugador sin indicar el género", () => {
  const j1 = new Player("Ana", 0);
  expect(j1.name).toBe("Ana");
  expect(j1.gender).toBe("female");
});

test("Crear jugador female por poner un género extraño", () => {
  const j1 = new Player("Pepe", 0, "picj");
  expect(j1.name).toBe("Pepe");
  expect(j1.gender).toBe("female");
});

test("Crear jugador con fecha nacimiento", () => {
  const j1 = new Player("Ana", 2, "female", "13/04/1999");
  expect(j1.birthday).toBe("13/04/1999");
});

test("Crear jugador con fecha nacimiento no válida", () => {
  const j1 = new Player("Ana", 2, "female", "kk");
  expect(j1.birthday).not.toBe("kk");
  expect(j1.birthday).toBeUndefined();
  expect(j1.age).toBeUndefined();
});

test("Crear jugador con fecha nacimiento válida pero no ha cumplido", () => {
  const j1 = new Player("Ana", 2, "female", "13/04/1999");
  expect(j1.age).toBe(24);
});

test("Jugador benjamin", () => {
  const j1 = new Player("Pepe", 1, "male", "12/12/2016");
  expect(j1.category).toBe("benjamin");
});

test("Jugador cadete", () => {
  const j1 = new Player("Pepe", 1, "male", "1/1/2010");
  expect(j1.category).toBe("cadete");
});

test("Jugador cadete", () => {
  const j1 = new Player("Pepe", 1, "male", "1/1/2010");
  expect(j1.category).toBe("cadete");
});

test("Jugador junior", () => {
  const j1 = new Player("Pepe", 1, "male", "1/1/2004");
  expect(j1.category).toBe("junior");
});

test("Jugador senior", () => {
  const j1 = new Player("Pepe", 1, "male", "1/1/2000");
  expect(j1.category).toBe("senior");
});
