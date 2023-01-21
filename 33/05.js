const tryCatch = (fun) => {
  try {
    fun();
  } catch (e) {
    console.log(e instanceof TypeError);
  }
};

const mySymbol = Symbol();

tryCatch(() => mySymbol + '');
tryCatch(() => +mySymbol);
