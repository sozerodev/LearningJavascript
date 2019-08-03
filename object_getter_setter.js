// Getter, Setter 함수.
// 객체 안에 getter, setter함수 설정이 가능하다.


const numbers = {
    a : 1,
    b : 2
  };
  
  numbers.a = 5;
  console.log(numbers.a);
  
  
  // getter, setter함수를 사용하면 특정 값을 바꾸려고하거나, 특정 값을 조회할때
  // 우리가 원하는 코드를 실행 가능하다.
  
  
  
  
  
  
  // ++++++++++++getter 함수 ++++++++++++++++++++++++++++++++++++++++++=
  
  // example
  // getter함수를 만들땐 앞에 get을 쓰고 함수를 선언해준다.
  const numbers_2 = {
    a: 1,
    b: 2,
    get sum() {
      console.log('sum함수가 실행됩니다!');
      return this.a + this.b;
    }
  }
  
  console.log(numbers_2.sum);
  numbers_2.b = 5;
  console.log(numbers_2.sum);
  
  // 이와같이.. getter함수는 우리가 특정 값을 조회하려고 할때... 특정 코드를 실행시키고 거기서 연산된 값을
  // 받아서 사용하는 것을 의미한다.
  
  
  
  
  // +++++++ setter 함수 +++++++++++++++++++++++++++++++++++++++++++++++++
  const dog = {
    _name : '멍멍이',  // _는 setter함수를 만들때 이와 겹치지 않기 위함.
  
  
    // 키값과 함수의 이름이 같을 순 없지만 getter, setter의 이름은 같을 수 있다. 
    get name(){
      console.log('_name을 조회합니다.')
      return this._name;
    },
  
  
    set name(value){
      console.log('이름이 바뀝니다...'+ value);
      this._name = value;
    }
  
  };
  
  
  console.log(dog.name)
  dog.name = '몽몽이';
  console.log(dog._name)
  
  
  
  
  
  
  
  
  
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++
  const numbers_3 = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate(){
      console.log('calculate');
      this.sum = this._a + this._b;
    },
    get a(){
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value){
      this._a = value;
      this.calculate();
    },
    set b(value){
      this._b = value;
      this.calculate();
    }
  };
  
  console.log(numbers_3.sum);
  numbers_3.a = 5;
  numbers_3.b = 7;
  numbers_3.a = 9;
  // 값을 설정할때마다 sum값이 자동으로 업데이트됨을 볼 수 있다.
  
  console.log(numbers_3.sum); // 9 + 7 = 16이니까
  
  
  
  // getter함수는 우리가 특정 값을 조회할때마다 어떤 함수를 호출하는 것이고
  
  // setter함수는 우리가 특정 값을 설정할때마다 value를 패러미터로 받아와 값을 설정하거나 추가적으로
  // 어떤 코드를 실행할 수 있다고 한다.