// 태원 강사님 풀이 (해시 아님)
function solution(participant, completion) {
  let answer = "";
  //1. 정렬
  participant.sort();
  completion.sort();
  // 2. 정렬된 participant와 completion이 다를때,
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
