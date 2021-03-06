class Rectangle {
  constructor(width, height) {
    console.log(this);
    console.log(new.target);
    console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);
    console.log(this instanceof ColorRectangle);
    console.log(this instanceof Rectangle);
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  // override
  toString() {
    return `${super.toString()} , color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle);

console.log(colorRectangle.getArea());
console.log(colorRectangle.toString());
