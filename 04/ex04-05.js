console.log(score); // undefined

var score; // 변수 선언

/***
 * score가 아래 있어서 애초에 접근 불가능한 것 같지만,
 * 실제로는 Lexical Environment가 초기화될 때 생성된다.
 * 이때 값은 undefined이다. 
 */