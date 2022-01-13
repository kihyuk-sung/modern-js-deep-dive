var Animal = (function () {
  function Animal(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  Animal.prototype.eat = function () {
    return 'eat';
  };

  Animal.prototype.move = function () {
    return 'move';
  }

  return Animal;
}());

var Bird = (function () {
  function Bird(age, weight) {
    Animal.apply(this, [age, weight]);
  }

  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.constructor = Bird;

  Bird.prototype.fly = function () {
    return 'fly';
  }

  return Bird;
}());

var bird = new Bird(1, 5);

console.log(bird);
console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());
