// https://school.programmers.co.kr/learn/courses/30/lessons/81303

function solution(n, k, cmd) {
  // ➊ 삭제된 행의 인덱스를 저장하는 리스트
  const deleted = [];

  // ➋ 링크드 리스트에서 각 행 위아래의 행의 인덱스를 저장하는 리스트

  // ➌ 현재 위치를 나타내는 인덱스

  // ➍ 주어진 명령어(cmd) 리스트를 하나씩 처리
  for (const item of cmd) {
    // ➎ 현재 위치를 삭제하고 그다음 위치로 이동
    if (item.startsWith("C")) {
    }

    // ➏ 가장 최근에 삭제된 행을 복원

    // ➐ U 또는 D를 사용해 현재 위치를 위아래로 이동
    else {
    }
  }

  // ➑ 삭제된 행의 위치에 'X'를, 그렇지 않은 행의 위치에 'O'를 포함하는 문자열 반환
  const answer = new Array(n).fill("O");
  for (const i of deleted) {
    answer[i - 1] = "X";
  }
  return answer.join("");
}
