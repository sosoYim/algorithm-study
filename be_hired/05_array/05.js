// https://school.programmers.co.kr/learn/courses/30/lessons/12949

/**
 *
 * @name 행렬의 곱셈
 * @time_complexity O(N^3)
 * @duration 40m
 * @condition length 2 이상 100 이하 / 각 원소 -10이상 20 이하 자연수 / 곱할 수 있는 배열만 주어짐
 * @q
 */
function solution(arr1, arr2) {
  // ➊ 행렬 arr1과 arr2의 행과 열의 수
  const r1 = arr1.length;
  const c1 = arr1[0].length;

  const r2 = arr2.length;
  const c2 = arr2[0].length;

  // ➋ 결과를 저장할 2차원 배열 초기화
  const ret = [];
  for (let i = 0; i < r1; i++) {
    ret.push(new Array(c2).fill(0));
  }

  // ➌ 첫 번째 행렬 arr1의 각 행과 두 번째 행렬 arr2의 각 열에 대해
  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      // ➍ 두 행렬의 데이터를 곱해 결과 배열에 더해줌
      for (let k = 0; k < c1; k++) {
        ret[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return ret;
}
