// 특수한 상황에서 특수한 작업을 실행시켜주기
// 조건문! if, else, else if 문!

// 가장 기본적인 조건문인 if문
const a = 1;
if (a + 1 === 2) {
  console.log('a + 1이 2입니다.');
  console.log('blabla ');
}

/*
if문은 
if (조건문){
  조건문이 참일때 실행되는 블럭
  여러 줄을 넣을 수 있다. 
}
과 같다. 
*/

/*
이전에 let, const를 배울 때, 
상수 혹은 변수가 '다른 블록' 범위에서는 똑같은 이름으로 선언할 수 있다고 하였다.
*/

// for example. with const
const b = 1;
if (b + 1 === 2){
  const b = 2;
  console.log('if문 안의 b의 값은 : '+ b)
}
console.log('if문 밖의 b의 값은 :' + b)

// for example. with var
var bb = 1;
if (bb + 1 === 2){
  var bb = 2;
  console.log('if문 안의 bb의 값은 :' + bb)
}
console.log('if문 밖의 bb의 값은 :' + bb)
//값이 같게 나온다. 그래서 var를 쓰면 실수할 확률이 높아진다.
// 따라서 var보단 const를 쓰라는 것.




/*
if else문에 대하여 알아보자.
if의 경우 어떤 특정 조건을 만족할 때, 이를 하라는 것이였고
if else는 그 조건이 만족하지 않은 경우에 시행해야할 작업을 할때 유용하다.
*/

const c = 10;
if (c > 15){
  console.log('c가 15보다 큽니다.')
} else {
  console.log('c는 15보다 크지 않습니다. ')
}



/* 
if else if 는?
*/
const d = 7;
if ( d === 5 ){
  console.log('d는 5입니다! ')
} else if (d === 10){
  console.log('d는 10입니다!')
} else {
  console.log('d는 5도 아니고 10도 아닙니다.')
}

