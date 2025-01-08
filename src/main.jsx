import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.scss";

import { BrowserRouter, HashRouter } from "react-router-dom"; // 確保正確導入是 React 路由系統的核心組件 <BrowserRouter>

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   {/* 後端路由 */}
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>
  // </React.StrictMode>,

  //   {/* 不能使用相對路徑時，改用以下"前端路由" */}
  //   {/* 將 <BrowserRouter> 改成 <HashRouter> */}
  <React.StrictMode>
    {/* 後端路由 */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
