# 배열

## 배열의 효율성

앞서 배열은 1차원으로 관리한다는 설명이 있었다. (2,3 차원도 각각의 메모리 주소에 arr[0][0], arr[0][1]... 식으로 1차원으로 저장)

배열을 맨 뒤에 삽입할 경우 -> O(1)
배열을 맨 앞이나 중간에 삽입할 경우 -> 삽입 이후의 값들을 하나씩 밀어야 함 -> O(N)

1. 할당할 수 있는 메모리 크기

- 정수형 1차원 배열: 1000만개, 2차원 배열: 3000\*3000 크기를 최대로 생각하기

2. 중간에 데이터 삽입이 많은지 확인

- 많으면 시간 복잡도가 높아져 시간 초과 발생 확률 높음
