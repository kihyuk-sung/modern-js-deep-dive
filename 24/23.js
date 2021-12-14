const funcs = Array.from(new Array(3), (_, i) => () => i);

funcs.forEach(f => console.log(f()));
