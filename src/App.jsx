import React, { useState } from "react";


function App() {

  console.log('App 컴포넌트가 렌더링되었씁니다');
  const [count, setCount] = useState(0);


  // 1증가 함수
  const onPlusButtonClickButtonHandler = () =>
  {
    setCount(count+1);
  }


  // 1감소 함수
  const onMinusButtonClickButtonHandler = () =>
  {
    setCount(count-1);
  }


  return <>
  <h3>카운트 예제</h3>
  <p>현재 카운트 : {count}임</p>
<button onClick={onPlusButtonClickButtonHandler}>+</button>
<button onClick={onMinusButtonClickButtonHandler}>-</button>

  </>
  ;
}

export default App;
