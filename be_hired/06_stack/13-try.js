// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  // ➊ 각 열에 대한 스택을 생성합니다.
  const lanes = [...new Array(board[0].length)].map(() => []);

  // ➋ board를 역순으로 탐색하며, 각 열의 인형을 lanes에 추가합니다.
  for (let i = board.length; i >= 0; i--) {
    for (let j = 0; j < board.length; j++) {
      console.log({ i, j });

      if (board[i]?.[j]) {
        lanes[j].push(board[i][j]);
      }
    }
  }
  // ➌ 인형을 담을 bucket을 생성합니다.
  const bucket = [];

  // ➍ 사라진 인형의 총 개수를 저장할 변수를 초기화합니다.
  let answer = 0;

  // ➎ moves를 순회하며, 각 열에서 인형을 뽑아 bucket에 추가합니다.
  // 해당 열에 인형이 있는 경우
  // ➏ 바구니에 인형이 있고, 가장 위에 있는 인형과 같은 경우

  // ➐ 바구니에 인형이 없거나, 가장 위에 있는 인형과 다른 경우
  moves.forEach((move) => {
    const col = move - 1;
    const doll = lanes[col].pop();
    if (doll && doll === bucket[bucket.length - 1]) {
      bucket.pop();
      answer += 2;
    } else {
      bucket.push(doll);
    }
  });

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
