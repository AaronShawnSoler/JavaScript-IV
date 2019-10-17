// CODE here for your Lambda Classes

class Person {
  constructor(prop) {
    this.name = prop.name;
    this.age = prop.age;
    this.location = prop.location;
  }

  phrase() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(prop) {
    super(prop);
    this.specialty = prop.specialty;
    this.favLanguage = prop.favLanguage;
    this.catchPhrase = prop.catchPhrase;
  }

  // eslint-disable-next-line class-methods-use-this
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  // eslint-disable-next-line class-methods-use-this
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(prop) {
    super(prop);
    this.previousBackground = prop.previousBackground;
    this.className = prop.className;
    this.favSubjects = prop.favSubjects;
  }

  listSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(prop) {
    super(prop);
    this.gradClassName = prop.gradClassName;
    this.favInstructor = prop.favInstructor;
  }

  standUP(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const Brit = new Instructor({
  name: 'Brit',
  age: 24,
  location: 'Canada',
  specialty: 'Javascript',
  favLanguage: 'CSS',
  catchPhrase: 'We got this!',
});
