---
emoji: 🍊
title: 파이썬 문법 정리 | TIL ＃3
date: '2022-09-11 22:44:00'
author: goldggyul
tags: TIL Python
categories: TIL Python
---

# `any`와 `all`

- 둘다 인자로 iterable한 객체(문자열, 리스트, 튜플 등)를 받는다.
- 객체를 돌면서 조건을 검사한 후 True나 False를 반환한다.
- any는 or, all은 and 연산

```python
vowels = 'aeiou'
word = 'abcd'
# word에 vowels의 문자 하나라도 포함되면 any는 True
# 즉 not any(~)이므로 vowels가 하나도 없다면 return False
if not any(v in word for v in vowels):
  return False
```

# `min`과 `max`

- 둘다 인자로 iterable한 객체를 받는다.
- 그래서 그냥 여러 인자를 줘도 된다.

# String `format()`

- format을 이용해서 placeholder({})를 사용하여 더 쉽게 문자열을 만들 수 있다.

```python
txt1 = "My name is {fname}, I'm {age}".format(fname = "John", age = 36)
txt2 = "My name is {0}, I'm {1}".format("John",36)
txt3 = "My name is {}, I'm {}".format("John",36)
```

- 소수점 아래 n째 자리까지도 나타낼 수 있다.

```
txt = "For only {price:.2f} dollars!"
print(txt.format(price = 49))
# For only 49.00 dollars!
```

- [참고](https://www.w3schools.com/python/ref_string_format.asp)

## `f-string` 문자열 안에 변수 쉽게 삽입하기

- 일반적인 문자열('', "") 앞에 `f`또는 `F` 문자만 붙여주면 f-string이 된다.
- f-string은 괄호를 사용하여 f-string 안에 표현식을 삽입할 수 있다.

```python
>>> first_name = "John"
>>> last_name = "Doe"
>>> f"Welcome, {first_name} {last_name}!"
'Welcome, John Doe!'
```

- [참고](https://www.daleseo.com/python-f-strings/)

# 삼항 연산자

- `condition ? true : false`대신에 다르게 쓴다.
- **`[True일 때] if [condition] else [False일 때]`**
- 삼항 연산자도 중첩이 가능하지만 가독성을 생각하자.

```python
# 짝수인지 홀수인지 판단하는 예제
a = 10

# 삼항 연산
print("even") if a % 2 == 0 else print("odd")

# 기본 연산
if a % 2 == 0:
    print("even")
else:
    print("odd")

```

- [참고](https://blockdmask.tistory.com/551)

# 여러 인자 리턴하기

- 파이썬은 함수에서 여러 인자 리턴하는 게 된다..!

- 그냥 `return A`하듯이 `return A, B, C`하면 된다.

- 어쩔 때는 하나 리턴하고 어쩔 땐 두개 리턴하는 것도 가능하다

  ```python
  # 짝수일 때만 2로 나눈 몫도 같이 리턴
  def is_even(num):
    if num % 2 == 0 and num > 0:
      return True, num/2
    else:
      return False
    
  is_even(2) # (True, 1.0)
  is_even(3) # False
  ```

- 리턴될 때는 때는 튜플이 반환된다. 그래서 하나의 튜플이 아니고 여러 변수에 `언패킹`할 수 있다.

## [언패킹](https://codetorial.net/tips_and_examples/tuple_unpacking.html)

- 언패킹 시 필요 없는 변수는 언더스코어(_)
- 리스트로 받고 싶으면 *표시

```python
# Unpacking 5
a, b, *c, d = (1, 2, 3, 4, 5, 6)
print(a)
print(b)
print(c)
print(d)

# 출력
1
2
[3, 4, 5]
6
```

```python
# * with underscore
a, b, *_, d = (1, 2, 3, 4, 5, 6, 7)
print(a)
print(b)
# print(c)
print(d)

# 출력
1
2
7
```

# [`zip()`](https://codetorial.net/tips_and_examples/zip.html)

- 여러 리스트의 값을 동시에 사용할 때 유용하다

- 이 때 가장 작은 리스트에 맞게 실행된다.

  ```python
  >>> names = ['Peter Parker', 'Clark Kent', 'Wade Wilson', 'Bruce Wayne']
  >>> heroes = ['Spiderman', 'Superman', 'Deadpool', 'Batman']
  >>> universes = ['Marvel', 'DC', 'Marvel']
  >>>
  >>> for name, hero, universe in zip(names, heroes, universes):
  ...     print(name + ' is actually ' + hero + ' from ' + universe)
  ...
  Peter Parker is actually Spiderman from Marvel
  Clark Kent is actually Superman from DC
  Wade Wilson is actually Deadpool from Marvel
  ```

- 한 변수로 묶을 수도 있다.

  ```python
  names = ['Peter Parker', 'Clark Kent', 'Wade Wilson', 'Bruce Wayne']
  heroes = ['Spiderman', 'Superman', 'Deadpool', 'Batman']
  universes = ['Marvel', 'DC', 'Marvel', 'DC']
  
  for values in zip(names, heroes, universes):
      print(values[0] + ' is actually ' + values[1] + ' from ' + values[2])
  ```

# `Array[::]` - [Extended Slices](https://docs.python.org/release/2.3.5/whatsnew/section-slices.html)

- `arr[A:B:C]`는 <u>A부터 B까지 C의 간격으로 배열을 만들라</u>는 뜻이다.

- A가 생략되면 처음부터, B가 생략되면 끝까지, C가 생략되면 한칸 간격

  - C가 -일 경우 역순이다.

  - 따라서 word == word[::-1]을 통해 회문을 쉽게 구할 수 있다.

    ```python
    >>> word = '토마토마'
    >>> word[::-1]
    '마토마토'
    >>> word = '토마토'
    >>> word[::-1]
    '토마토'
    ```

- 이 때 `A <= X < B`이다. 즉 B는 포함하지 않는다

```toc
```

