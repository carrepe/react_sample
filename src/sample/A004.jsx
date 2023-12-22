import { useRef, useEffect } from 'react';

export default function A003() {
  const inputRef = useRef();
  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);
  const loginAlert = () => {
    // alert(`환영합니다. ${inputRef.current.value}`);
    window.confirm(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  };
  return (
    <div className="box">
      <header className="App-header">
        <input ref={inputRef} type="text" placeholder="id" />
        <button onClick={loginAlert}>Login</button>
      </header>
    </div>
  );
}

/*
  useRef는 inputRef.current.focus() 처럼 DOM에 직접 접근할 때 사용한다.
  로그인 화면에서 input을 클릭하지 않고 바로 입력할 수 있도록 focus가 되어 있게 처리할 때 사용한다.
*/
