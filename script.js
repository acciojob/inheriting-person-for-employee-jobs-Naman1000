// Person Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee Class (inherits from Person)
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call parent constructor
    this.jobTitle = jobTitle;
  }

  // Method for job-specific greeting
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
