//H: 긴 문자열, N: 찾을 문자열
function kmpSearch(H, N) {
  const n = H.length, m = N.length;
  const ret = [];
  const pi = getPartialMatch(N);
  let begin = 0, matched = 0;
  while (begin <= n - m) {
    // console.log(H[begin + matched],N[matched])
    if (matched < m && H[begin + matched] === N[matched]) {
      ++matched;
      //모든 문자열이 일치했을 경우, 첫 인덱스 push
      if(matched === m) ret.push(begin);
    } else {
      if (matched === 0) {
        //첫 글자가 일치하지 않으면 begin을 +1 이동
        ++begin;
      } else {
        //begin을 접미사의 시작으로 옮김.
        begin += matched - pi[matched -1];
        //접미사가 일치하는 것을 알기 때문에 비교할 필요없음. 접미사 다음으로 이동
        matched = pi[matched -1];
      }
    }
  }
  return ret;
}

//N: 찾을 문자열
function getPartialMatch(N) {
  const m = N.length; 3
  const pi = Array.apply(null, new Array(m)).map(() => 0);
  //begin 1부터 (자기자신 찾지 않도록)
  let begin = 1, matched = 0;
  while (begin + matched < m) {
    if (N[begin + matched] === N[matched]) {
      ++matched;
      //begin 1부터 시작하기때문에 -1
      pi[begin + matched - 1] = matched;
    } else {
      if (matched === 0) {
        ++begin;
      } else {
        begin += matched - pi[matched -1];
        matched = pi[matched -1];
      }
    }
  }
  return pi;
}