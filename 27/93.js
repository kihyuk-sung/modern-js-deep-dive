const points = [40, 100, 1, 5, 2, 25, 10];

points.sort((a, b) => a - b);
console.log(points);

console.log(points[0], points[points.length - 1]);

points.sort((a, b) => b - a);
console.log(points);

console.log(points[points.length - 1], points[0]);
