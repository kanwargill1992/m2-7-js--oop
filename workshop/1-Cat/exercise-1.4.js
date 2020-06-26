// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.species = "cat";
    this.tiredness = 10;
    this.hunger = 20;
    this.loneliness = 20;
    this.happiness = 30;
  }
  eat = (food) => {
    this.hunger -= food / 5;
    this.happiness += food * 4;
  };
  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += minutes * 4;
  };
  sleep = (hours) => {
    this.tiredness -= hours * 3;
    this.happiness += hours * 6;
  };

  wait = (minutes) => {
    this.tiredness += minutes * 3;
    this.hunger += minutes * 10;
    this.loneliness += minutes * 5;
    this.happiness -= minutes * 10;
  };
}

let boots = new Cat("boots", "Simaese");

boots.wait(40);

console.log(boots);
