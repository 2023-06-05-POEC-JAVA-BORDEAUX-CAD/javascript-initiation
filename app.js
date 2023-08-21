class Person {
  constructor(firstName, lastName, profession) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  getFirstName() {
    return this._firstName;
  }

  setFirstName(firstName) {
    this._firstName = firstName;
  }
}

const chris = new Person("Christian", "Lisangola", "Informaticien");
console.log(chris);

const zidane = new Person("Zidane", "Zinedine", "coach");
console.log(zidane);
