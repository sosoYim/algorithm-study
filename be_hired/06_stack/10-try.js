// https://school.programmers.co.kr/learn/courses/30/lessons/76502

const isOpen = (c) => c === "[" || c === "(" || c === "{";
const isClose = (c) => c === "]" || c === ")" || c === "}";
const isPair = (open, close) => {
  if (open === "[" && close === "]") return true;
  if (open === "(" && close === ")") return true;
  if (open === "{" && close === "}") return true;
  return false;
};

function solution(s = "}]()[{") {
  const array = s.split("");
  const n = array.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const stack = [];
    for (j = 0; j < n; j++) {
      // console.log({ i, j });
      const offset = (i + j) % n;
      const compare = s[offset];

      // console.log({ compare });

      if (isOpen(compare)) {
        stack.push(compare);
      }

      if (isClose(compare)) {
        if (!stack.length) break;

        const top = stack.pop();
        // console.log({ top });
        if (!isPair(top, compare)) break;

        if (!stack.length) {
          answer = answer + 1;
          break;
        }
      }
    }
  }

  // console.log({ answer });
  return answer;
}

solution();
