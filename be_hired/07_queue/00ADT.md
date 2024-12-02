큐 (FIFO)

## 큐의 ADT

- head, tail, size
- isEmpty, isFull
- shift, push

## 자바스크립트에서 큐 구현

> shift는 O(1)이 아니다. 큐를 구현하려면 다음 방법들을 생각해보자.

1. 배열 이용 (간단하지만 메모리 낭비. 하지만 자바스크립트가 잘 관리하기 때문에 사용해도 됨)

2. 연결리스트
