// 고객들이 원하는 토핑을 골라 주문할 수 있는 피자집의 주문 시스템을 만든다.
// 이 피자집에는  0부터 19까지의 버호를 갖는 스무 가지의 토핑이 있으며,
// 주문시 토핑을 넣기/넣지 않기를 선택할 수 있다.

// 0000000000,0000000000
공집합 = 상수 0;
// 1,0000000000,0000000000 -1 ==> 1111111111,1111111111 
꽉 찬 집합 = (1 << 20) -1;

//페퍼로니 번호 p (0 <= p < 20)
(1 << p) 
//페퍼로니 토핑에 추가  js에 '|='가 안됨..
toppings = toppings | (1 << p);

// 토핑에 페퍼로니가 있는지 확인
if (toppings & (1 << p)) {
  //페퍼로니 존재
} 

//토핑에서 페퍼로니 삭제
toppgins &= ~(1 << p);

//토핑에 있으면 빼고 없으면 넣고 (토글)
toppings ^= (1 << p)

//집합 연산
add = a | b;
intersection = a & b;
remove = a & ~b;
toggle = a ^ b;

//최소 원소 찾기 2의 보수를 사용.
const firstTopping = toppings & -toppings;
//js테스트. 결과값이 10진수로 나오기 때문에 topping번호를 찾기 위해서 추가 작업필요.
//0부터 시작하기 때문에 -1.
const toppingNumber = firstTopping.toString(2).length -1;

//켜진 비트수 세기  1을 모두 합한다.
toppings.split('').reduce(( a, b ) => a*1 + b*1);

//최소 원소 지우기
toppings &= toppings-1;

//모든 부분 집합 순회하기
for(let subset = toppings; subset > 0; subset=(subset-1)&toppings){
	console.log(subset.toString(2));
}

//참고 예
정수를 오른쪽으로 3비트 시프트 = 8로 나눈것.
7과 AND연산하는 것은 8로 나눈 나머지.

