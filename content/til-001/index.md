---
emoji: 🍊
title: Synchronous vs. Non-blocking? / 파이썬 기본 문법 정리 | TIL ＃1
date: '2022-09-08 18:30:00'
author: goldggyul
tags: TIL Python
categories: TIL Python
---

# Synchronous vs. Non-blocking? 

- 교수님께서 Synchronous의 반대가 Nonblocking처럼 설명하셨는데 둘은 반대라기보다는 다른 느낌으로 알고 있어서 한 번 찾아봤다.
- [동기 vs 비동기 (feat. blocking vs non-blocking)](https://velog.io/@wonhee010/%EB%8F%99%EA%B8%B0vs%EB%B9%84%EB%8F%99%EA%B8%B0-feat.-blocking-vs-non-blocking)
- [[10분 테코톡] 🎧 우의 Block vs Non-Block & Sync vs Async](https://www.youtube.com/watch?v=IdpkfygWIMk)

## Blocking vs. Non-blocking

- `제어권` 에 초점을 둔다.
- 예를 들어 함수 A에서 함수 B를 call했을 때
- **Blocking**: B는 할 일을 다 마쳐야 A에게 제어권을 준다.
- **Non-blocking**: B는 할 일을 마치지 않았어도 A에게 제어권을 넘겨준다.
- 따라서 Blocking이라면 A는 다른 일을 못하고 대기해야 한다.

## Synchronous vs. Asynchronous

- `요청의 결과`를 처리하는 쪽에 초점을 둔다.
- 예를 들어 함수 A에서 함수 B를 call했을 때
- **Synchronous**: A는 함수 B가 완료 했는 지를 계속 체크한다.
- **Asynchronous**: B에서 스스로 완료 여부를 처리한다. (Callback)



# Python 기본 문법들

- 파이썬으로 코테 처음 준비해서 기본 문법들 정리

# Naming convention

- 소문자 l, 대문자 O, 대문자 I는 단일 문자 변수명으로 쓰지 않기
- 클래스는 CamelCase
- 함수는 snake_case

## 1. 입력 받기

- 숫자 입력받기

  ```python
  n = int(input())
  ```

- 띄어쓰기로 구분된 **문자** 입력받기

  ```python
  arr = list(input().split)
  ```

- 띄어쓰기로 구분된 **숫자** 입력받기

  ```python
  arr = list(map(int, input().split()))
  ```

- 띄어쓰기가 아닌 엔터로 구분된 **문자**일 경우

  ```python
  n = int(input()) # 총 리스트 길이
  arr = []
  for i in range(n):
    arr.append(input()) # 숫자일 경우 int(input())
  ```

## 2. 반복문

- for

  ```python
  for i in range(n): 
  ```

  - 0부터 n-1까지 반복된다.
  - 주의할 건 for문 안에서 index 변경은 불가능하다. 반복문 내에서 i를 바꿔봤자 다시 돌면 i가 원래 반복문 숫자대로 리셋된다.... 이거 때문에 삽질했다.
  - 그래서 반복문 내에서 i를 바꿔야될 경우엔 while을 쓰자.

- while

  ```python
  while i < len(x):
    # ...
    i+=1
  ```

  - while일 때는 i를 변경해도 문제 없이(C++처럼) 변경된다.

## 3. 문자

### 문자 ↔️ 아스키코드

- `ord()`: 문자에서 아스키코드로

  - 예를 들어 알파벳으로 비트마스킹할 경우

  ```python
  mask |= 1 << (ord(word[i])-ord('a'))
  ```

- `chr()`: 아스키코드에서 문자로

### 문자 vs. 숫자

- 문자인지 숫자인지 판단하기

  ```python
  word.isalpha() # word에 공백, 기호, 숫자가 있을 때 False -> 문자 판단
  word.isdigit() # word에 공백, 기호, 문자가 있을 때 False -> 숫자 판단
  word.isalnum() # word에 공백, 기호가 있을 때 False -> 문자, 숫자 판단
  ```

- 문자인 경우 한글과 영어 비교해야할 경우

  ```python
  word.encode().isalpha() # 한글이면 False
  ```

- 영어만 있는 단어인지 확인하기

  - 정규식 활용

    ```python
    import re
    word = "hello"
    reg = re.compile(r'[a-zA-Z]')
    if reg.match(word):
      # 영어로만 이루어진 단어
    ```

  - `lower()`와 `upper()` 이용하기

    - `word.lower()`는 영어를 모두 소문자로 변경하고, `word.upper()`는 영어를 모두 대문자로 변경한다.

    - 그렇다면 영어가 없는 단어라면 `lower()`한 결과와 `upper()`한 결과는 **같을 것이다.**

      ```python
      word = "hello"
      if word.upper() != word.lower():
          # 영어임!
      else:
          # 영어 없음
      ```

- [참고](https://codethief.io/ko/%ED%8C%8C%EC%9D%B4%EC%8D%ACpython%EC%97%90%EC%84%9C-%EB%8B%A8%EC%96%B4%EA%B0%80-%EC%98%81%EC%96%B4%EC%9D%B8%EC%A7%80-%EC%95%84%EB%8B%8C%EC%A7%80-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0/)

- 문자열 정수 변환

  ```python
  dig = int(word)
  ```

  

### 자료형 크기?

- Python 3에서는 long 타입이 없어지고 int 타입만 남았다.
- 이 때 int는 arbitrary precision을 지원한다.
- 즉, 사용할 수 잇는 메모리양이 정해진 fixed-precision과 달리, 특정 값을 나타날 때 바이트가 부족하다면 유동적으로 늘리면서 메모리 크기를 변경하는 것이다.
- 그래서 int가 C++처럼 4바이트값만 담을 수 있는 것이 아니고 long, 또는 더 큰 수도 담을 수 있다.
- [참고](https://ahracho.github.io/posts/python/2017-05-09-python-integer-overflow/)

# 문자열 자르기(Slicing)

```python
result = word[start:end] # start~end-1까지
```

- start가 0일 경우는 생략 가능

```python
result = word[start:start+count] # start에서부터 count개
result = [-num:] # 마지막 -num 번째부터(포함) 마지막까지
```

# 정렬

## 비교자 cmp

- C++에서 operator< 연산자 오버로딩하던 것처럼, 파이썬에서도 맘대로 정렬해보자

- 인자가 두 개 들어오는 함수를 만들자

  ```python
  def compare(x,y):
    if 어쩌구: # y가 앞으로 와야한다면 
      return 1
    elif 저쩌구: # x가 앞으로 와야한다면
      return -1
    else:
      return 0 # 같다
  ```

- 정렬해보자

  ```python
  arr.sort(cmp=compare)
  result = sorted(arr, cmp=compare)
  ```

### Python3

- 하지만 위 처럼 cmp에 넣을 수 있는 건 Python2다. Python3부턴 cmp가 없다.

  ```python
  from functools import cmp_to_key
  result = sorted(arr, key=cmp_to_key(compare))
  ```

  - cmp_to_key를 import해서 cmp를 key로 바꿔줘야한다.

- [참고](https://velog.io/@sparkbosing/python-%EB%82%B4-%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C-%EC%A0%95%EB%A0%ACsort)

## Key 함수 넣어서 정렬하기

- key를 기준으로 정렬할 수 있다.

- 즉, 리스트에서 앞 원소부터 비교하면서 정렬한다면 

  ```python
  li = [[1,2],[0,4],[0,1]]
  li.sort(key=lambda x: (x[0], x[1])) # 오름차순 
  print(li) # [[0, 1], [0, 4], [1, 2]]
  li.sort(key=lambda x: (-x[0], -x[1])) # 내림차순
  print(li) # [[1, 2], [0, 4], [0, 1]]
  li.sort(key=lambda x: (x[0], -x[1])) # 0번째 원소 기준 오름차순, 동일하다면 1번째 원소 기준 내림차순 정렬
  ```

- reverse하고 싶다면 `reverse=True` 옵션을 줘도 된다

- 딕셔너리 역시 정렬할 수 있다

  ```python
  dict = {'A':1, 'D':4, 'C':3, 'B':2}
  sdict = sorted(dict.items()) 
  # 기본은 key값 기준 정렬
  # [('A', 1), ('B', 2), ('C', 3), ('D', 4)]
  sdict = sorted(dict.items(), key=lambda x: x[1])
  # [('A', 1), ('B', 2), ('C', 3), ('D', 4)]
  ```

```toc
```