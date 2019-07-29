/* 
conditinal statemet 조건문 swtich case
특정 값이 무엇이냐에 따라 다른 작업을 하고싶을 때 사용한다.
*/

const device = 'iphone';

switch (device){
  case 'iphone':
    console.log('아이폰!');
    break;

  case 'ipad':
    console.log('아이패드!');
    break;

  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;

  // 위의 아무런 케이스에도 해당하지 않는 경우에는 다음과 같다.
  default:
    console.log('모르겠네요..!');
}