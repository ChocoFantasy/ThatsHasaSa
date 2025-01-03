// components/Layout.jsx (共通使用相同的導航欄和頁首)
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom"; // Outlet

function Layout() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const navItems = [
    { title: "首頁", to: "/" },
    { title: "角色介紹", to: "/characters" },
    { title: "商品", to: "/products" },
    { title: "作品", to: "/works" },
  ];

  return (
    <div className="website-share">
      {/* 共用的頁首 */}
      <header className="header">
        {/* Logo 放置區 */}
        <div className="logo">
          <Link to="/">
            <img src="/images/Home/LOGO.jpg" alt="Logo" />
          </Link>
        </div>
        {/* 音樂按鈕 */}
        <button
          className="music-toggle"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <img
            src={
              isPlaying ? "/images/Home/Volume-On" : "/images/Home/Volume-On"
            }
            alt={isPlaying ? "Volume On" : "Volume Off"}
          />
        </button>
      </header>
      {/* 共用的內容 */}
      <div className="main-content">
        {/* 共用的導航欄 */}
        <nav className={`navbar ${isNavbarOpen ? "open" : ""}`}>
          <button
            className="navbar-toggle"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            <img
              src={
                isNavbarOpen
                  ? "/images/Home/navbar-UI.jpg"
                  : "/images/Home/Loading.jpg"
              }
              alt={isNavbarOpen ? "Close Navbar" : "Open Navbar"}
            />
          </button>
          {isNavbarOpen && (
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link to={item.to}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        {/*  <Outlet /> {/* 這裡會渲染子路由的內容 */}
        <main className={`content ${isNavbarOpen ? "navbar-open" : ""}`}>
          <Outlet />
        </main>
        {/* 浮動連結到專屬社群 */}
        <div className="social-links">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}images/Home/icon-sns-facebook.svg`} alt="Facebook" />
          </a>
          <a href="#">
            <img src="/ThatsHasaSa/images/Home/icon-sns-IG.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/ThatsHasaSa/images/Home/icon-sns-youtube.svg" alt="YouTube" />
          </a>
        </div>
      </div>
      {/* 共用的頁尾 */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>About</h3>
              <p>關於黑砂的大家庭</p>
            </div>
            <div className="footer-section">
              <h3>Social Media</h3>
              <div className="social-icons">
                <a href="#">
                  <img
                    src="/images/Home/icon-sns-facebook.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="#">
                  <img src="/images/Home/icon-sns-IG.svg" alt="Instagram" />
                </a>
                <a href="#">
                  <img src="/images/Home/icon-sns-youtube.svg" alt="YouTube" />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>這是聯絡黑砂的方式</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
