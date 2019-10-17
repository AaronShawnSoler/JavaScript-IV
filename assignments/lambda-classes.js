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

  // eslint-disable-next-line class-methods-use-this
  changeGrade(student) {
    student.grade += Math.floor(Math.random() * 5) + 1;
  }
}

class Student extends Person {
  constructor(prop) {
    super(prop);
    this.previousBackground = prop.previousBackground;
    this.className = prop.className;
    this.favSubjects = prop.favSubjects;
    this.grade = Math.floor(Math.random() * 100) + 1;
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

  graduate() {
    if (this.grade > 70) {
      console.log(`${this.name} is ready to graduate!`);
    } else {
      this.grade += 5;
      console.log(`Increased ${this.name}'s grade by 5 points.`);
    }
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
