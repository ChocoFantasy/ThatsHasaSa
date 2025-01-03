// pages/Works.jsx
import React from 'react';
import { Link } from 'react-router-dom';

//默認導出（Default Exports），不使用 {} 導入，使用
// import Works from './pages/Works';
function Works() {
  return (
    <div className="works-page">
      <h1>作品展示</h1>
      <Link to="/">返回首頁</Link>
    </div>
  );
}

export default Works;