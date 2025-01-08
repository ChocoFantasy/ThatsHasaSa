import React from "react";

const Loading = () => {

  return (
    <div className="loading-screen">
      <div className="loading-animation">
        {/* 這裡可以是 LOGO 或轉圈動畫 */}
        <img
          src="./images/Home/Loading.jpg" // 替換為你的 LOGO 或動畫圖片
          alt="Loading..."
        />
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;