try {
  new Symbol();
} catch (e) {
  console.log(e instanceof TypeError);
}
