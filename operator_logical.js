let value = true;
value = false;

/* 논리연산자는 이 true, false를 처리하기 위함.
논리연산자는 총 세 가지가 있다. */

// 첫번째가 NOT !
// 두번째가 AND &&
// 세번째가 OR ||

// NOT !
// True는 False, False는 True로 바꿔준다. 특정 boolean을 바꾼다.
const a = !true;
console.log("a :", a);

// AND &&
// 양옆의 boolean이 둘다 True일때만 True가 된다.
const b = true && false;
console.log("true && false :", b);

const c = true && true;
console.log("true && true", c);

// OR ||
const d = true || true;
console.log("true || true :", d);

const e = true || false;
console.log("true || false :", e);

// 이러한 논리 연산자는 나중에 조건문에서 유용하게 사용된다.

// 이 논리연산자 가운데 처리되는 순서가 또 존재한다.
// NOT, AND, OR 순이다.

const operator_priority = !((true && false) || (true && false) || !false);
// 일단 괄호는 나중에.
// !(true && false || true && false || true)
// !(false || false || true)
// !(true)
// false
console.log("operator_priority :", operator_priority);