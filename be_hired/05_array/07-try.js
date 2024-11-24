// https://school.programmers.co.kr/learn/courses/30/lessons/49994
/**
 *
 * @name 방문_길이
 * @time_complexity O(N)
 * @duration 40m
 * @condition
 * @q
 */

const move = (command) => {
  switch (command) {
    case "U":
      return [0, 1];
    case "D":
      return [0, -1];
    case "R":
      return [1, 0];
    case "L":
      return [-1, 0];
  }
};

const isValid = ([x, y]) => {
  return x >= -5 && y >= -5 && x <= 5 && y <= 5;
};

function solution(dirs) {
  let x = 0;
  let y = 0;

  // 출발-도착 좌표를 저장하기 위한 Set
  const visited = new Set();

  // O(N)
  [...dirs].forEach((dir) => {
    // 다음 좌표를 구함
    const [dx, dy] = move(dir);
    const nextPoint = [dx + x, dy + y];
    // 좌표평면을 벗어나는 경우 무시
    if (!isValid(nextPoint)) return;

    const [nx, ny] = nextPoint;

    // A에서 B로 간 경우 B에서 A도 추가해야 함(총 경로의 개수는 방향성이 없음)
    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    // 현재 좌표 업데이트
    x = nx;
    y = ny;
  });

  // 방문한 좌표간 거리의 개수를 반환
  return visited.size / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
