class Player {
  name;
  ranking;
  #gender;
  

  constructor(name, ranking, gender = 'female') {
    this.name = name;
    this.ranking = ranking;
    if(gender == 'male') this.#gender = 'male';
    else this.#gender = 'female';
    
  }

  setGender(){
    
  }
  
}
module.exports = Player;
//PRUEBA->
/*let player1 = new Player("Juan");
console.log(player1);*/
