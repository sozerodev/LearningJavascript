// 객체 안에 함수 넣기

// dog라는 객체 만들기
const dog = {
    name : '멍멍이',
    sound : '멍멍!!',
    /*
    say : function say() {
      console.log(this.sound); // 여기서의 this는 이 함수가 위치한 객체..자기자신..dog..를 의미함.
    }
  
    단, 여기서 화살표함수는 사용할 수 없다. 
    say : () ->{
      console.log(this);
      console.log(this.sound);
      
      이건 실행 안된다. 화살표함수는 this를 자기가 속한 곳으로 연결하지 않기 때문.
    }
    */
   // function say()라고 안하고 바로 say()해줘도 된다.
   say() {
     console.log(this.sound);
   }
  };
  
  dog.say();
  
  
  
  // cat객체 만들기
  const cat = {
    name : '야옹이',
    sound : '야옹~'
  };
  
  cat.say = dog.say;
  // dog의 say를 cat에 연결시켜준 것.
  // dog에 function으로 만든 함수의 this는 dog를 가리키며, 
  // cat이라는 객체에 function이 호출되면 거기의 this는 cat을 가리키기에 야옹~ 을 나타낸다.
  cat.say();
  
  
  const catSay = cat.say;
  // this가 뭔지 모르니 undefined가 되면서 에러가 발생하는 것. 
  catSay();
  
  /*
  함수에있는 this는 자기가 속한 곳을 가리키고, 화살표함수로 사용하게 되면 
  화살표함수 내부에서는 this가 무엇인지 모른다는 것.
  이런 함수를 바깥으로 꺼내면 그 순간 this와의 관계가 사라지게 된다. 
  */