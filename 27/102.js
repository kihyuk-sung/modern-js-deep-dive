class Numbers {
  numberArray = [];
  multiply(arr) {
    arr.forEach(item => this.numberArray.push(item * item));
  }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray);
