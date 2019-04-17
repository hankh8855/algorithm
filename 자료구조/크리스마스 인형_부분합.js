// 크리스마스를 맞이하여 산타 할아버지는 전세계의 착한 어린이 K명에게 인형을 사 주려고 합니다. 
// 산타 할아버지는 인형구입을 위해서 유명한 인형가게인 '놀이터'에 찾아갔습니다.
// 놀이터에는 N개의 인형 상자가 한 줄로 진열되어 있고, 각 인형 상자에는 하나 이상의 인형이 들어 있습니다.
// 놀이터에서는 주문의 편의성을 위해 각 상자에 0부터 N-1까지의 번호를 붙여 놓았고,
// 주문은 'H번 상자부터 T번 상자까지 다 주세요'라고만 할 수 있습니다.(H <= T)
// 산타 할아버지는 한 번 주문할 때마다, 주문한 상자에 있는 인형들을 모두 꺼내서 각각을 K명에게
// 정확히 같은 수만큼 나누어 주고, 남는 인형이 없도록 합니다.

// 1. 한 번 주문할 수 있다면, 가능한 주문 방법은 몇 가지인가요?
// 2. 여러 번 주문할 수 있다면, 주문이 겹치지 않게 최대 몇 번 주문할 수 있을까요?

// 'H번 상자부터 T번 상자까지 다 주세요' ==> 구간 합 => 부분 합 문제
// 남는 인형이 없도록 합니다. ==> 구간 합을 K명으로 나누면 나머지 0 
(psum[T] - psum[H-1]) % K === 0; 
psum[T] % K === psum[H-1] % k;
// ==> 나머지만 필요

// 1. 한 번 주문할 수 있다면, 가능한 주문 방법은 몇 가지인가요?
//input
const N = 6, K=4;
const toys = [1,2,3,4,5,6];
//-------------------
//부분 합
const psum = [];
psum[-1] = 0;
for(let i = 0; i < toys.length; i++){
	psum[i] = (psum[i-1] + toys[i]) % K;
}
// psum = [1, 3, 2, 2, 3, 1, -1: 0]

//같은 원소 세기
const count = {};
for(let i = 0; i < psum.length; i++){
	if(isNaN(count[psum[i]])) count[psum[i]] = 0;
	count[psum[i]]++;
}
// count = {1: 2, 2: 2, 3: 2}

//count >= 2 인 원소 중 2개 선택할 경우의 수 ( n(n-1)/2 )
let result = 0;
const countArray = Object.values(count);
for (let i = 0; i < countArray.length; i++) {
  result += countArray[i] * (countArray[i] - 1) / 2;
}
//result = 3;

// 2. 여러 번 주문할 수 있다면, 주문이 겹치지 않게 최대 몇 번 주문할 수 있을까요?
// 완전 탐색 알고리즘, 동적 계획법
// ret[i] = i번째 상자까지 고려했을 때 최대 주문 횟수
const result = {};
//prev[s] = psum[]이 s였던 마지막 위치
const prev = {};
// 초기화
for(let i = 0; i < psum.length; i++){
  result[i] = 0;
  prev[i] = -1;
}

for(let i = 0; i < psum.length; i++){
  //i번째 상자를 아예 고려하지 않는 경우.
  if(i > 0 ){
    result[i] = result[i-1];
  } else {
    result[i] = 0;
  }

  //psum[i]를 전에도 본 적이 있으면, prev[psum[i]]+1부터 
  let loc = prev[psum[i]];
  if (loc != -1) {
    result[i] = Math.max(result[i], result[loc]+1);
  }
  prev[psum[i]] = i;
}

//result[Object.values(result).length-1];
//1
//동적계획법 공부 후 다시 보자..