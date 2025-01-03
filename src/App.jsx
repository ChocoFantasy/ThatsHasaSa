import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Products from './pages/Products';
import Works from './pages/Works';
import "./styles/style.scss";

function App() {
  return (
    <>

        <Routes>
          {/* 將根路徑導向到 Home 首頁組件 */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* 其他頁面路由 */}
            <Route path="/characters" element={<Characters />} />
            <Route path="/products" element={<Products />} />
            <Route path="/works" element={<Works />} />
          </Route>
          {/* 404 頁面 - 將所有未匹配的路徑重定向到首頁 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </>
  );
}

export default App;
