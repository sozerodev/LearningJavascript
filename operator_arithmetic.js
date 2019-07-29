/* 연산자 */
// 연산자는 프로그래밍언어에서 특정 연산을 할때 사용하는 문자

/* 산술 연산자 */
// 사칙연산을 하는 연산자 (+,-,*,/,%)


let a = 1 + 2 - (3*4) / 4;
console.log(a);


// b++와 ++b는 차이가 있다.
let b = 1;
console.log("b : ", b)
console.log("b++ : ", b++)
console.log("b :", b) 
console.log("b++ :", ++b)
 
console.log("b--",b--);
console.log("b: ",b)


let c = 1;
console.log("c :", c)

c += 3;
console.log("c +=3 을 했을 때, c =",c)

c -= 3;
console.log("c -=3 을 했을 때, c = ", c)

c *= 3;
console.log("c *=3 을 했을 때, c = ", c)

c /= 3;
console.log("c /= 3 을 했을 때, c = ", c)