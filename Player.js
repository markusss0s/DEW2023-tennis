class Player {
  name;
  ranking;
  #gender;
  age;

  constructor(name, ranking, gender = 'female', age) {
    this.name = name;
    this.ranking = ranking;
    if(gender == 'male') this.#gender = 'male';
    else this.#gender = 'female';
  }
  
  getAge(){
    today = new Date();
    
    return this.age;
  }
  category(){
    
  }

  
  
}
module.exports = Player;
//PRUEBA->
/*let player1 = new Player("Juan");
console.log(player1);*/
