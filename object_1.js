// 객체에 대하여
// 객체는 어떤 값을 선언하게 될때, 하나의 이름에 여러 종류의 값을 넣을 수 있게 해준다.

// exam. 한 강아지에 대한 값들을 선언한다 가정해보자.
const dogName = '멍멍이';
const dogAge = 2;

console.log(dogName);
console.log(dogAge);

// but,,, 객체를 선언할 수 있다면?
const dog = {
  // key : value 를 넣어준다.
  // 이 key는 보통 문자열로되어있는데 숫자도 가능은 하다. 
  // 단, 문자열에는 공백이 있으면 안된다. '' 로 감싸주면 문자열에 공백 가능
  'key with space' : 'asdf',
  name : '멍멍이',  // 새로운 key를 넣을때마다 쉼표, 를 넣어주어야 한다.
  age : 2

}

console.log(dog.name)
console.log(dog.age)

console.log(dog)  // console에서 이 dog라는 객체의 정보를 알 수가 있다. 






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 어벤져스 객체를 만들어보자.
const ironMan = {
  name : '토니 스타크',
  actor : '로버트 다우니 주니어',
  alias : '아이언맨'
};

const captainAmerica = {
  name : '스티븐 로저스',
  actor : '크리스 에반스',
  alias : '캡틴 아메리카'
};

console.log(ironMan)
console.log(captainAmerica)



// 함수의 패러미터에서도 객체를 받아서 사용할 수 있다.
function print(hero){
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`
  console.log(text)
}

print(ironMan)
print(captainAmerica)





// 이때, es6의 비구조할당이라는 문법을 통해 위의 function print를 더욱 간결하게 사용할 수 있다.
// 비구조화할당 = 객체구조분해
// 객체에서 특정 값들을 추출해낼때,,,

function print_2(hero){
  const {alias, name, actor} = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
  console.log(text)
}

print_2(ironMan)
print_2(captainAmerica)


// 파라미터를 사용하는 단계에서도 비구조화할당이 가능하다.

function print_3({alias, name, actor}){
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
  console.log(text)
}

print_3(ironMan)
print_3(captainAmerica)



// 비구조화할당을 통해 특정 값들을 객체에서 빼온다.


//꼭 함수 내부에서 사용할 필요는 없다.
const {name} = ironMan;
console.log(name)