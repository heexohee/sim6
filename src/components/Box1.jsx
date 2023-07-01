import React from "react";

const boxStyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "#91c49f",
  color: "white",

  // 가운데 정렬 3종세트
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Box1({initCount}) {
  console.log("Box1이 렌더링되었습니다.");
  return (
    <div style={boxStyle}>
      <button
        onClick={() => {
          initCount();
        }}
      >
        초기화
      </button>
    </div>
  );
}

export default React.memo(Box1);

//초기화해주는 함수는 box1에서 관리하는 것이 아니라,
// App.js에서 작성해서 관리, 그 안에 useState가 있기 때문.
