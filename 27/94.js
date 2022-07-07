const todos = [
  {id : 4, content: 'JavaScript'},
  {id : 1, content: 'HTML'},
  {id : 2, content: 'CSS'},
];

function compare(key) {
  return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

todos.sort(compare("id"));
console.log(todos);

todos.sort(compare("content"));
console.log(todos);
