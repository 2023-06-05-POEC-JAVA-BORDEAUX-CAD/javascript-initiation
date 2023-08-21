function Person(firstName, lastName, profession) {
  this._firstName = firstName;
  this._lastName = lastName;
  this._profession = profession;

  // Mauvaise pratique : Parce que toutes les instances auront leur propre copies des méthodes
  //   this.getFirstName = function () {
  //     return this._firstName;
  //   };

  //   this.setFirstName = function (firstName) {
  //     this._firstName = firstName;
  //   };
}

Person.prototype.getFirstName = function () {
  return this._firstName;
};

Person.prototype.setFirstName = function (firstName) {
  this._firstName = firstName;
};

const chris = new Person("Christian", "Lisangola", "Informaticien");
console.log(chris);

const zidane = new Person("Zidane", "Zinedine", "coach");
console.log(zidane);
