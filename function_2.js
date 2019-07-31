// 함수를 선언하는 또 다른 방법 ( 화살표 함수 )
// 기존에는 function이라는 키워드를 사용했지만 

const add = (a, b) => {
    return a + b
  }
  
  const sum = add(1, 2);
  console.log(sum);
  
  
  
  
  // hello함수를 화살표 함수로 만들어보자
  const hello = (name) => {
    console.log(`Hello, ${name}!`);
  }
  
  hello('soyoung')
  
  
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // 화살표 함수의 특징은 함수 내부에서 바로 어떤 값을 return한다.
  
  // 이런 경우에는 코드를 더 짧게 할 수 있다.
  //const 함수이름 = (패러미터) => return하고싶은 값;
  
  const minus = (a, b) => a - b;
  console.log(minus(10, 7))
  
  
  const SayHello = (name) => console.log(`Hello!! ${name}!!`)
  SayHello('sozero')
  
  
  
  
  
  // 화살표 함수와 function키워드로 만든 함수의 주요 차이는
  // 화살표 함수에서 가리키는 this와 function에서 가리키는 this와 다르다. 