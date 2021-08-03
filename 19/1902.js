const circle = {
  radius: 5,
  get diameter() {
    return 2 * this.radius;
  },

  get perimeter() {
    return 2 * Math.PI * this.radius;
  },

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

console.log(circle);

console.log(circle.perimeter);
console.log(circle.diameter);
console.log(circle.area);
