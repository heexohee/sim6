import React, { useCallback, useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";



const boxesStyle = {
  display: "flex",
  marginTop: "10px",
};



function App() {
  console.log("App 컴포넌트가 렌더링되었씁니다");
  const [count, setCount] = useState(0);

  // 1증가 함수
  const onPlusButtonClickButtonHandler = () => {
    setCount(count + 1);
  };

  // 1감소 함수
  const onMinusButtonClickButtonHandler = () => {
    setCount(count - 1);
  };

  // count를 초기화해주는 함수. 
  // 우리의 목적은 count가 됬을 때, 
  // box1 컴포넌트가 렌더링 되지 않게하는 것!
const initCount = useCallback(() =>{
  console.log(`${count}에서 0으로 변경되었슴다.`);
  setCount(0);
}, [count]);
// 유즈콜백도 특정 스테이트가 변경될 때, 처음에 저장했던 콜백함수가
// 갱신되어야하면 이 의존성 배열에 그 해당 state를 넣어야만 함. 
// 그래서 의존성 배열 공간을 만들어 줬던 것.
// 의존성 배열의 값이 비어있으면, usecallback이 count가 0일
// 때의 시점을 기준으로 메모리에 함수를 저장했기 때문임. 
// 그래서 기존 코드의 의존성 배열에 count를 넣으면 count가 변경될 때마다 새롭게 함수를 할당함.


  return (
    <>
      <h3>카운트 예제</h3>
      <p>현재 카운트 : {count}임</p>
      <button onClick={onPlusButtonClickButtonHandler}>+</button>
      <button onClick={onMinusButtonClickButtonHandler}>-</button>
      <div style={boxesStyle}>
        <Box1 initCount={initCount}/>
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
