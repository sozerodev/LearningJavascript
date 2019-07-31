// 다음과 같이 문자를 + 를 사용하여 조합하기도 하지만
name = 'soyoung'
console.log('hello ' + 'javascript!' + ' with ' + name)

// es6에서는 더 편리한 방법이 있다.


/*
es6란?
ECMAScript6이며, 자바스크립트의 버전을 말함.
2015년에 도입되었기에 ES2015라고 하기도 한다.

ES7, ES8, ES9, ES10까지도 나왔다고 한다.
기존의 ES5에서 ES6로 넘어오면서 많은 변화가 있었다고 한다. 
하지만 새로운 문법들을 모두 알 필요는 없다. 
따라서 새로운 자바스크립트 문법은 추후에 나중에 배워도 되고, 지금 필요한 것들만 배우자.
*/

// es6의 문법 중 하나인 template literal을 해보자.
// `` 를 사용하여 ${변수} 를 해주면 된다.
console.log(`hello javascript with ${name}`)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function hello(name){
  return `Hello ${name}!`; // 주의! ${ }를 쓰려면 '' 이 아니라 ``를 써야한다!! 

  // 이때, 함수에서는 return 을 쓴 순간 종료되므로 return밑에 무언가를 써도 실행되지 않는다.
}

const result = hello('soyoung')
console.log(result)