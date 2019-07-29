/*
비교연산자
- === : 두 값을 비교할 때 쓴다.  
- ==  : type을 검사하지 않기에 실제론 값이 다른데 결과가 ===와 다르게 나타날 수 있다. 
        가령, 1과 true, 0과 false가 같다고 나옴. 
        null & undefined도 같다고 true를 출력하게 됨.
        따라서 두개를 비교하고싶다면 ==보단 === 를 합시다.
*/

// example 1. a값과 b값이 같은 경우
const a = 1;
const b = 1;
const equals = a === b;
console.log("when equals : ", equals);

// example 2. c값과 d값이 다른 경우
const c = 1;
const d = 3;
const diffval = c === d;
console.log("different values : ", diffval);

const e = 'a';
const f = 'b';
const notEquals = a !== b;
console.log("not equals :", notEquals)


/*
==!와 =!의 관계는
===와 ==의 관계와 같다. 
그러니 =!보단 ==! 사용을 권장.
*/


/*
숫자의 크기를 비교할 때에는 < > 를 사용한다.
*/

const aa = 10;
const bb = 15;
const cc = 15;

console.log("aa < bb :", aa < bb);
console.log("bb > aa :", bb > aa);

// bb가 aa보다 크거나 같으므로 참.
console.log("bb >= aa", bb >= aa);

// aa가 cc보다 작거나 같으므로 참.
console.log("aa <= cc :", aa <= cc)

// bb와 cc는 같은 값이니 거짓
console.log("bb<cc :", bb < cc)

// =은 항상 >,<의 뒤에 온다는 것! 