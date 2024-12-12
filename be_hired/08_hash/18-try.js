function solution(arr, target) {
  // target 길이 + 1의 해시(배열로 사용)만들기
  const hash = Array.from({ length: target + 1 }, () => false);

  // arr을 돌면서 arr 요소별로 합하면 타겟이 되는 곳에 true
  arr.forEach((v) => {
    const 차 = target - v;
    console.log({ 차 });
    // 타겟보다 크거나 타겟의 1/2인 경우 (중복 숫자 있을 수 없음) false
    if (차 < 1 || target - v === v * 2) return;

    hash[차] = true;
  });

  for (const num of arr) {
    if (hash[num]) {
      console.log({ num, result: hash[num] });

      return true;
    }
  }

  // arr
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
