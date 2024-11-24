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

  const visited = new Set();

  // O(N)
  [...dirs].forEach((dir) => {
    const [dx, dy] = move(dir);
    const nextPoint = [dx + x, dy + y];
    if (!isValid(nextPoint)) return;

    const [nx, ny] = nextPoint;

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    x = nx;
    y = ny;
  });

  return visited.size / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
