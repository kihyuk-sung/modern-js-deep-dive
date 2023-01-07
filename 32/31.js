const str = '    foo  ';

console.log(str.replace(/\s/g, '') === 'foo');
console.log(str.replace(/^\s+/g, '') === 'foo  ');
console.log(str.replace(/\s+$/g, '') === '    foo');
