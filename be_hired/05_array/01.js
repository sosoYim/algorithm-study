/**
 *
 * @name 배열정렬하기
 * @time_complexity O(NlogN)
 * @condition 정수 배열 2개 이상 10,000만개 이하
 */

function solution(arr) {
  // O(N^2) 버블소트가 아닌 O(NlogN) 정렬 알고리즘을 사용하여 정렬
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(solution([1, -5, 2, 4, 3])); // [-5, 1, 2, 3, 4]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // [1, 1, 2, 2, 3, 4, 5]
console.log(solution([1, 6, 7])); // [1, 6, 7]
