const Player = require('./Player');

test('Crear jugador', ()=>{
    const jugador1 = new Player('Pepe');
    expect(jugador1.name).toBe('Pepe');
    expect(jugador1).toEquals({name: 'Pepe'});
});