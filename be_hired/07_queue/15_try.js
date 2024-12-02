class Queue {
  items = [];
  head = 0;
  tail = 0;

  size() {
    return this.tail - this.head;
  }

  push(data) {
    this.items.push(data);
    this.tail++;
  }

  pop() {
    return this.items[this.head++];
  }
}

function solution(N, K) {
  const queue = new Queue();

  // 1. 번호표 큐 만들기
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  // 한개 남을 때 까지
  // 2. 제거하기 전 번호들 뒤로 옮기기
  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      const popped = queue.pop();
      queue.push(popped);
    }
    queue.pop();
  }
  console.log(queue);
  return queue.pop(); // ❺ 마지막으로 남은 요소 반환
}

console.log(solution(5, 2)); // 3
