// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  const n = prices.length;
  // 1. 가격이 떨어지지 않은 기간 저장
  const answer = new Array(n).fill(0);

  // 2. stack으로 가격 비교할 인덱스 저장
  const stack = [0];

  for (let i = 1; i < n; i++) {
    // 3. 가격이 떨어졌을 때
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    // 4. 가격이 떨어지지 않았을 때
    stack.push(i);
  }

  // 5. 가격이 끝까지 떨어지지 않은 경우
  while (stack.length) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
