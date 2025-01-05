import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Loading from "./components/Loading"; // 引入 Loading 組件
import Home from './pages/Home';
import Characters from './pages/Characters';
import Products from './pages/Products';
import Video from './pages/Video';
import "./styles/style.scss";

function App() {

  //Loading
  const [isLoading, setIsLoading] = useState(true);

  // 模擬網站內容加載
  useEffect(() => {
    const MIN_LOADING_TIME = 3000; // 最短 Loading 時間 (4秒)
    const startTime = Date.now(); // 記錄開始時間

    // 資源加載完成處理邏輯
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime; // 計算已經過去的時間
      const remainingTime = MIN_LOADING_TIME - elapsedTime; // 剩餘時間
      setTimeout(() => setIsLoading(false), Math.max(remainingTime, 0)); // 確保至少顯示 5 秒
    };

    // 監聽資源加載完成事件
    window.addEventListener("load", handleLoad);

    // 模擬加載時間超時處理
    const timeout = setTimeout(() => setIsLoading(false), MIN_LOADING_TIME);

    // 清理事件和定時器
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>

        {isLoading ? (
          <Loading /> // 顯示 Loading 畫面
        ) : (
          <Routes>
            {/* 將根路徑導向到 Home 首頁組件 */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* 其他頁面路由 */}
              <Route path="/Characters" element={<Characters />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Video" element={<Video />} />
            </Route>
            {/* 404 頁面 - 將所有未匹配的路徑重定向到首頁 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}

    </>
  );
}

export default App;
