function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5], // 1번 수포자의 찍기 패턴
    [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자의 찍기 패턴
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 수포자의 찍기 패턴
  ];

  const scores = patterns.map((pattern, i) => {
    return answers.reduce((acc, answer, idx) => {
      const choice = pattern[idx % pattern.length];
      return choice === answer ? (acc += 1) : acc;
    }, 0);
  });

  const maxScore = Math.max(...scores);

  const result = [];

  scores.forEach((score, i) => {
    if (score === maxScore) result.push(i + 1);
  });

  return result;
}
