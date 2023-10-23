 const Match = require('./Match');
 const Player = require('./Player');

 test('Crear un partido sin fecha', ()=>{
    const today = new Date();
    const p1 = new Match(today);
    expect(p1).toEqual({
        players : [],
        winner : null,
        date: today
    });
    expect(p1 instanceof Match).toBeTruthy();
    expect(p1.players).toEqual([]);
    expect(p1.winner).toBeNull();
    expect(p1.date).toEqual(today);
 });

 test('Crear un partido con fecha como objeto', ()=>{
    const fecha = new Date('2023/10/24');
    const p1 = new Match(fecha);
    expect(p1).toEqual({
        players : [],
        winner : null,
        date: fecha
    });
    expect(p1 instanceof Match).toBeTruthy();
    expect(p1.players).toEqual([]);
    expect(p1.winner).toBeNull();
    expect(p1.date).toEqual(fecha);
 });

 test('Crear un partido con fecha con formato d/m/y', ()=>{
    const fecha = new Date('2023/10/24');
    const p1 = new Match('22/10/2023');
    expect(p1).toEqual({
        players : [],
        winner : null,
        date: fecha

    });
    expect(p1 instanceof Match).toBeTruthy();
    expect(p1.players).toEqual([]);
    expect(p1.winner).toBeNull();
    expect(p1.date).toEqual(fecha);
 });

test('Insertar un jugador en un partido sin jugadores',()=>{
    const partido1 = new Match("");
    const j1 = new Player('Pepe');
    partido1.insertPlayer(j1);
    expect(partido1.players[0]).toBe(j1);//Comprueba si el jugador1 está en el arr players
    expect(partido1.players.length).toBe(1);//Comprueba si el arr players tiene longitud de un espacio
    expect(partido1.players).toContain(j1);//Comprueba si el jugador1 está en el arr players
    
});

test('Insertar un segundo jugador en un partido co n un jugador',()=>{
    const partido1 = new Match("");
    const j1 = new Player('Pepe');
    partido1.insertPlayer(j1);
    expect(partido1.players[0]).toBe(j1);//Comprueba si el jugador1 está en el arr players
    expect(partido1.players.length).toBe(1);//Comprueba si el arr players tiene longitud de un espacio
    expect(partido1.players).toContain(j1);//Comprueba si el jugador1 está en el arr players
    const j2 = new Player('Juan');
    partido1.insertPlayer(j2);
    expect(partido1.players[1]).toBe(j2);
    expect(partido1.players.length).toBe(2);
    expect(partido1.players).toContain(j2);
});

test('Insertar 3 jugadores, solo deben estar los dos primeros, el último no se inserta',()=>{
    const p1 = new Match("");

    p1.insertPlayer(new Player('Pepe'));
    p1.insertPlayer(new Player('Ana'));
    p1.insertPlayer(new Player('Juan'));
});

test('Indica un ganador: ganador es jugador, la fecha del partido ya pasó',()=>{
    const m = new Match('2023/10/10');
    const j1 = new Player('Pepe');
    const j2 = new Player('Juan');
    m.insertPlayer(j1);
    m.insertPlayer(j2);
    expect(m.setWinner(j1)).toBeTruthy();
    expect(m.winner).toBe(j1);
});

test('Indica un ganador: ganador es jugador, el partido aún no ha comenzado',()=>{
    const m = new Match('2030/10/10');
    const j1 = new Player('Pepe');
    const j2 = new Player('Juan');
    m.insertPlayer(j1);
    m.insertPlayer(j2);
    expect(m.setWinner(j1)).toBeFalsy();
    expect(m.winner).toBeNull();
});

test('Indica un ganador: ganador es un tercer jugador',()=>{
    const m = new Match('2030/10/10');
    const j1 = new Player('Pepe');
    const j2 = new Player('Juan');
    const j3 = new Player('Ana');
    m.insertPlayer(j1);
    m.insertPlayer(j2);
    expect(m.setWinner(j3)).toBeFalsy();
    expect(m.winner).toBeNull();
});