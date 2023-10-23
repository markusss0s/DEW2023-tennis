const { default: test } = require('node:test');
const Player = require('./Player');

test('Crear jugador', ()=>{
    const j1 = new Player('Pepe');
    expect(j1.name).toBe('Pepe');
    expect(j1).toEqual({name: 'Pepe', ranking: 0});
});

test('Crear jugador con ranking',()=>{
    const jugador1 = new Player('pepe', 7);
    expect(jugador1.ranking).toBe(7);
    jugador1.ranking = 9;
    expect(jugador1.ranking).toBe(9);
    expect(jugador1).toEqual({ranking: 9, name:'Pepe'});    
});

test('Crear jugador male', ()=>{
    const j1 = new Player('Pepe', 'male');
    expect(j1.name).toBe('Pepe');
    expect(j1.gender).toBe('male');
});

test('Crear jugador female', ()=>{
    const j1 = new Player('Ana', 0,'female');
    expect(j1.name).toBe('Ana');
    expect(j1.gender).toBe('female');
});


test('Crear jugador sin indicar el género', ()=>{
    const j1 = new Player('Ana', 0);
    expect(j1.name).toBe('Ana');
    expect(j1.gender).toBe('female');
});


test('Crear jugador female por poner un género extraño', ()=>{
    const j1 = new Player('Pepe', 0 ,'picj');
    expect(j1.name).toBe('Pepe');
    expect(j1.gender).toBe('female');
});