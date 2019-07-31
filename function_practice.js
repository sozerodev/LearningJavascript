// 점수를 0~100까지 가져와 A,B,C,D로 등급을 매기는 함수를 만들어 보자.
function getGrade(score){
    if (score === 100){
      return 'A+';
    } else if (score >= 90){
      return 'A';
    } else if (score >= 89){
      return 'B+';
    } else if (score >= 80){
      return 'B';
    } else if (score > 79){
      return 'C+'
    } else if (score >=70){
      return 'C';
    } else if (score > 69){
      return 'D+';
    } else if (score >= 60){
      return 'D';
    } else{
      return 'F'
    }
  }
  
  const grade = getGrade(10);
  console.log(grade);