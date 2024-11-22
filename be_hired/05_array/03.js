// https://school.programmers.co.kr/learn/courses/30/lessons/68644
/**
 *
 * @name 두_개_뽑아서_더하기
 * @time_complexity O(N^2logN^2)
 * @condition 정수 배열 2 이상 100 이하 / 각 데이터 크기 0 이상 100 이하  => 복잡도 고려할 필요 없음
 * @q 정수 배열에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하세요.
 */
function solution(numbers) {
  const ret = []; // ➊ 빈 배열 생성
  // ➋ 두 수를 선택하는 모든 경우의 수를 반복문으로 구함 => O(N^2)
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      // ➌ 두 수를 더한 결과를 새로운 배열에 추가
      ret.push(numbers[i] + numbers[j]);
    }
  }
  // ➍ 중복된 값을 제거하고, 오름차순으로 정렬 후 반환 => O(NlogN)
  const result = [...new Set(ret)].sort((a, b) => a - b);

  // O(N^2) + O(NlogN) = O(N^2logN) ???
  // 왜 O(N^2logN^2)의 시간복잡도를 가지게 되는가?
  return result;
}

// TEST 코드입니다. 주석을 풀어서 실행시켜 보세요
// console.log(solution([2, 1, 3, 4, 1])); // 반환값 : [2, 3, 4, 5, 6, 7]
// console.log(solution([5, 0, 2, 7])); // 반환값 : [2, 5, 7, 9, 12]
