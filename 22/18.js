function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle3 = Circle(15);
console.log(circle3);
console.log(radius);
