/**
 *
 * @name 배열제어하기
 * @time_complexity O(NlogN)
 * @condition 정수 배열 2개 이상 1,000개 이하 / 각 데이터 크기 -100,000 이상 100,000 이하
 * @q 이 배열에서 중복된 값을 제거하고 내림차순으로 정렬하여 반환하세요.
 */
function solution(arr) {
  // Set은 해시 알고리즘으로 중복값을 제거하기 때문에 O(N)의 시간복잡도를 보장
  const uniqueArr = [...new Set(arr)]; // ➊ 중복값 제거
  // O(NlogN)
  uniqueArr.sort((a, b) => b - a); // ➋ 내림차순 정렬

  // O(N) + O(NlogN) = O(NlogN)
  return uniqueArr;
}

// cf) for 반복문으로 일일이 확인하면 O(N^2)의 시간복잡도를 가지게 되므로 좋지 않음
// 왜 O(N^2)의 시간복잡도를 가지게 되는가?
// 1. for 반복문을 돌면서 배열의 각 요소를 확인
// 2. 중복된 값이 있는지 확인하기 위해 배열의 모든 요소를 다시 확인
// O(N) * O(N) = O(N^2)

// TEST 코드 입니다. 주석을 풀고 실행시켜 보세요
// console.log(solution([4, 2, 2, 1, 3, 4])); // 반환값 : [4, 3, 2, 1]
// console.log(solution([2, 1, 1, 3, 2, 5, 4])); // 반환값 : [5, 4, 3, 2, 1]
