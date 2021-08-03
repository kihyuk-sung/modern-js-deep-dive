function Circle(radius) {
  this.radius = radius;
  this.getArea = function() {
    return Math.PI * this.radius ** 2;
  }; // 새 객체가 생길 때 마다 함수가 만들어진다. 비효율적이다.
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea() === circle2.getArea());
console.log(circle1.getArea());
console.log(circle2.getArea());
