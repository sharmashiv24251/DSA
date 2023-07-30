class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  welcome() {
    console.log(`your name is ${this.name} and your age is ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, gpa) {
    super(name, age);
    this.gpa = gpa;
  }
  hello() {
    super.welcome();
    console.log(`your gpa is ${this.gpa}`);
  }
}

const shivansh = new Student(`Shivansh`, 20, 10);
shivansh.hello();
