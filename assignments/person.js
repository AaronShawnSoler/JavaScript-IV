class Person {
  constructor(prop) {
    this.name = prop.name;
    this.age = prop.age;
  }

  sayHi() {
    return `Hi my name is ${this.name}`;
  }

  returnAge() {
    return this.age;
  }
}

class Athlete extends Person {
  constructor(prop) {
    super(prop);
    this.awards = prop.awards;
  }

  getAward() {
    this.awards += 1;
    return this.awards;
  }
}

const lebron = {
  name: 'Lebron',
  age: 40,
  awards: 10,
};

console.log(lebron.name);
console.log(lebron.age);
console.log(lebron.awards);

const James = new Athlete(lebron);

console.log(James.sayHi());
console.log(James.returnAge());
console.log(James.getAward());
