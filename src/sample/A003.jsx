import { useState, useRef } from 'react';

export default function A003() {
  const [render, setRender] = useState(false);
  const countRef = useRef(0);
  let countVar = 0;

  console.log('***** 렌더링 후 Ref:', countRef.current);
  console.log('***** 렌더링 후 Var:', countVar);

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref Up! --->', countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('Var Up! --->', countVar);
  };

  const doRender = () => {
    setRender(!render);
  };

  return (
    <div className="box">
      <header className="App-header">
        <p>Ref: {countRef.current}</p>
        <p>Var: {countVar}</p>

        <div>
          <button onClick={increaseRef}>Ref Up!</button>
          <button onClick={increaseVar}>Var Up!</button>
          <button onClick={doRender}>Render!</button>
        </div>
      </header>
    </div>
  );
}

/*
    useRef()는 저장공간(변수관리)을 만들어주는 함수이다.
    DOM 요소에 접근을 위해 사용되기도 하지만, 변수를 관리하기 위해 사용되기도 한다.
    ref는 reference의 줄임말이다.

    useState 대신 ueRef()를 사용하면 사용한 변수는 렌더링이 되어도 초기화되지 않는다.
    랜더링을 하지 말아야 할 때 사용하면 유용하다.

    요점.
    state 변경 -> 렌더링 -> 컨포넌트 내부 변수 초기화
    ref 변경 -> 렌더링 X -> 컨포넌트 내부 변수 유지
    state 변경 -> 렌더링 -> ref의 값은 유지됨
*/
