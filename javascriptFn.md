# Default parameter vs Rest parameter

## Default parameter

- [Default parameters MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- default values로 initialize 될 수 있는 parameters
- 만약 no value or undefined면 pass함
- 매개변수 갯수만큼 인자가 안들어오면 오류가 남
- 그래서 나머지 매개변수가 undefined일 경우, default값을 설정해주는 작업이 필요했어나봄
- ES2015에서는 Default parameter를 매개변수가 갖도록 세팅할 수 있게 함

## Rest parameter

- [Rest parameters MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- 인자가 얼마나 들어올지 모르는 함수를 작성할 때, argument를 array로 받아올 수 있다.
  - 현재 infinitySum()에서 arguments의 길이만큼 for문을 돌려서 sum을 하고 있는데,
  - restParam을 사용하면 될 것 같다.
- restParam은 한개만 쓸 수 있음
- last argument만 가능
- destructed Arrays만 가능
- multiplier로써 사용가능

### Rest parameters와 arguments object는 다르다

- arguments는 not a real array, restParam은 Array
  - array methods 사용가능
- arguments도 Array.from(arguments)로 바꿔서 Array mothods사용가능

# Call by value vs Call by reference

- [YouTube Link1](https://www.youtube.com/watch?v=HEiPxjVR8CU)
- [YouTube Link2](https://www.youtube.com/watch?v=ooyJIopwnrk)
- ll, ll -i 등 재미있는 요소 발견
- linux에서 ln과 cp를 통해 메모리 용량과 주소값을 보면 이해가 쉽다.
  > ➜ callByPractice git:(master) ✗ ll -i
  > total 0
  > 6755399442384221 -rwxrwxrwx 4 juddroid juddroid 34 Dec 27 02:32 a
  > 72902018968104607 -rwxrwxrwx 1 juddroid juddroid 19 Dec 27 02:26 cpa
  > 6755399442384221 -rwxrwxrwx 4 juddroid juddroid 34 Dec 27 02:32 lna
  > 6755399442384221 -rwxrwxrwx 4 juddroid juddroid 34 Dec 27 02:32 lna2
  > 6755399442384221 -rwxrwxrwx 4 juddroid juddroid 34 Dec 27 02:32 lna3
  > ➜ callByPractice git:(master) ✗ vi lna3
  > ➜ callByPractice git:(master) ✗ ll
  > total 0
  > -rwxrwxrwx 4 juddroid juddroid 53 Dec 27 02:34 a
  > -rwxrwxrwx 1 juddroid juddroid 19 Dec 27 02:26 cpa
  > -rwxrwxrwx 4 juddroid juddroid 53 Dec 27 02:34 lna
  > -rwxrwxrwx 4 juddroid juddroid 53 Dec 27 02:34 lna2
  > -rwxrwxrwx 4 juddroid juddroid 53 Dec 27 02:34 lna3

## Call by value

- 함수호출시 값을 복사함
- 메모리 공간 없다가 함수호출시 값을 복사하며 메모리 생성
- 스코프를 탈출할 때, 메모리는 사라짐

## Call by reference

- 함수호출시 값의 메모리 주소를 참조함
- 메모리 공간 생성할 필요 없이 주소를 참조함
- 복사하는 것이 아니고, 주소에 있는 본래 값을 변경하게 됨
