function parseURL(url = '') {
  const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parsedURL);

  if (!parsedURL) return {};

  const [, protocol, host, path] = parsedURL;
  return { protocol, host, path };
}

const parsedUrl = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');
console.log(parsedUrl);
