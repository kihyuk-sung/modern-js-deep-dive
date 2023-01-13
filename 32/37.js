/**
 * 
 * @param {string} camelCase 
 * @returns {string}
 */
const camelToSnake = (camelCase) => {
  return camelCase.replace(/.[A-Z]/g, match => {
    return match[0] + '_' + match[1].toLocaleLowerCase();
  });
};

const camelCase = 'helloWorld';
console.log(camelToSnake(camelCase) === 'hello_world');

/**
 * 
 * @param {string} snakeCase 
 * @returns {string}
 */
const snakeToCamel = (snakeCase) => {
  return camelCase.replace(/_[a-z]/g, match => {
    return match[1].toUpperCase();
  });
};

const snakeCase = 'hello_world';
console.log(snakeToCamel(snakeCase) === 'helloWorld');
