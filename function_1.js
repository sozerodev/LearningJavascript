// 함수는 특정 코드를 하나의 명령어로 실행할 수 있게 해주는 기능
// 파라미터(input된 값) 가 주어졌을 때, 그 파라미터를 처리하여 결과값을 준다.

/*
함수를 만들려면?
function 함수이름(패러미터){

  return 
}
*/
//ex. 특정 값들의 합을 구하는 함수를 만들고싶다면?
function add(a, b) {
    return a + b;
  }
  
  const sum = add(1, 2);
  console.log(sum);
  
  
  
  
  
  // ex. hell함수 만들기
  function hello(name) {
    console.log('Hello ' + name + '!')
  }
  
  hello('soyoung')