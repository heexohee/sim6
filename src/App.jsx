import React, { useState } from "react";
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

  return (
    <>
      <h3>카운트 예제</h3>
      <p>현재 카운트 : {count}임</p>
      <button onClick={onPlusButtonClickButtonHandler}>+</button>
      <button onClick={onMinusButtonClickButtonHandler}>-</button>
      <div style={boxesStyle}>
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
