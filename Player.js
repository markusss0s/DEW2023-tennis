class Player {
  name;
  ranking;
  #gender;
  birthday;

  constructor(name, ranking, gender = 'female', birthday) {
    this.name = name;
    this.ranking = ranking;
    if(gender == 'male') this.#gender = 'male';
    else this.#gender = 'female';
    
    if (birthday) {
      let [d, m, y] = birthday.split("/");
      if (!isNaN(new Date(y, m - 1, d))) {
        //El ordenador coge un mes mas
        this.birthday = birthday;
      }
    }
  }

  

get gender() {
  return this.#gender;
}

get age() {
  if (!this.birthday) return undefined;
  let [d, m, y] = this.birthday.split("/");
  let date = new Date(y, m - 1, d);
  let now = new Date();
  let diff = now.getFullYear() - date.getFullYear();
  
  if (now.getMonth() < date.getMonth()) diff--;
  if (now.getMonth() == date.getMonth() && now.getDay() < date.getDay()) diff--;
  return diff;
}

get category() {
  if (this.age < 12) return "benjamin";
  if (this.age <= 15) return "cadete";
  if (this.age <= 19) return "junior";
  return "senior";
}
}
module.exports = Player;
//PRUEBA->
/*let player1 = new Player("Juan");
console.log(player1);*/
