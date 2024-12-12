// https://school.programmers.co.kr/learn/courses/30/lessons/159994?language=javascript

class Queue {
  queue = [];
  first = 0;
  rear = 0;
  constructor(arr) {
    if (!Array.isArray(arr)) return;
    this.queue = arr;
    this.rear = arr.length;
  }

  pop() {
    return this.queue[this.first++];
  }
  push(item) {
    this.queue[this.rear++] = item;
  }
  isEmpty() {
    return this.first === this.rear;
  }
  firstItem() {
    return this.queue[this.first];
  }
}

function solution(cards1, cards2, goal) {
  const q1 = new Queue(cards1);
  const q2 = new Queue(cards2);
  const g = new Queue(goal);

  while (!g.isEmpty()) {
    // q1이 비어있지 않고 첫카드가 같다면 팝
    if (!q1.isEmpty() && q1.firstItem() === g.firstItem()) {
      q1.pop();
      g.pop();
      // q2
    } else if (!q2.isEmpty() && q2.firstItem() === g.firstItem()) {
      q2.pop();
      g.pop();
    } else {
      // 둘 다 아니면 종료 (진행 불가)
      break;
    }
  }

  return g.isEmpty() ? "Yes" : "No";
}

// console.log(
//   solution(
//     ["i", "drink", "water"],
//     ["want", "to"],
//     ["i", "want", "to", "drink", "water"]
//   )
// ); // Yes

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // No
