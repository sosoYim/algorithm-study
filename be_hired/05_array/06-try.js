// https://school.programmers.co.kr/learn/courses/30/lessons/42889
/**
 *
 * @name 실패율
 * @time_complexity O(M+NlogN)
 * @duration 60m
 * @condition
 * @q
 */
function solution(N, stages) {
  // 스테이지별 도전자 수를 구함
  const challengersPerStage = new Array(N + 2).fill(0);
  // O(N)
  stages.forEach(
    (stage, i) => (challengersPerStage[stage] = challengersPerStage[stage] += 1)
  );

  // 스테이지별 실패한 사용자 수 계산
  const failedPerStage = new Array(N + 2).fill({ per: 0, idx: 0 });

  let restChallengers = stages.length;

  // O(N)
  challengersPerStage.forEach((challenger, idx) => {
    if (idx === 0) {
      failedPerStage[idx] = { per: 0, idx: 0 };
      return;
    }

    failedPerStage[idx] = { per: challenger / restChallengers, idx };

    restChallengers -= challenger;
  });

  // O(N)
  const validFailedPerStage = failedPerStage
    .slice(1, N + 1)
    .sort((a, b) => b.per - a.per);

  // O(N)
  const result = validFailedPerStage.map(({ idx }) => idx);

  // O(N) + O(N) + O(N) + O(N) = O(N)
  return result;
}
