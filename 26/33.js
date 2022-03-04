() => this.x;
(function () {
  return this.x;
}).bind(this);
