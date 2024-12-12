function solution(record) {
  const map = new Map();

  // action, id, name
  const enter = (id, name) => {
    map.set(id, name);
  };
  const change = (id, name) => {
    map.set(id, name);
  };

  record.forEach((r) => {
    const [action, id, name] = r.split(" ");
    if (action === "Enter") enter(id, name);
    if (action === "Change") change(id, name);
  });

  // 결과 출력
  const messages = record
    .filter((r) => {
      const [action, id, name] = r.split(" ");
      return action !== "Change";
    })
    .map((r) => {
      const [action, id, name] = r.split(" ");
      if (action === "Enter") return `${map.get(id)}님이 들어왔습니다.`;
      if (action === "Leave") return `${map.get(id)}님이 나갔습니다.`;
    });

  return messages;
}
