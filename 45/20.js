const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status == 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

promiseGet(wrongUrl)
  .then(res => console.log(re))
  .catch(err => console.error(err));
