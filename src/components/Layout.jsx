// components/Layout.jsx (共通使用相同的導航欄和頁首)
import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"; // Outlet

function Layout() {
  const [isPlaying, setIsPlaying] = useState(true); //音樂按鈕
  const audioRef = useRef(null); //音樂開關
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const location = useLocation();

  const navigate = useNavigate(); // 初始化 useNavigate 回上一頁

  // 音樂區塊
  useEffect(() => {
    // 確保音頻元素已載入
    if (audioRef.current) {
      // 設置音頻為循環播放
      audioRef.current.loop = true;

      // 嘗試自動播放
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // 自動播放成功
            setIsPlaying(true);
          })
          .catch((error) => {
            // 自動播放失敗（瀏覽器可能阻止）
            console.log("自動播放被阻止:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []); // 只在組件掛載時執行一次

  // 處理播放/暫停
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // 暫停音樂
      } else {
        const playPromise = audioRef.current.play(); // 播放音樂
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("播放音樂失敗:", error);
          });
        }
      }
      setIsPlaying(!isPlaying); // 切換播放狀態
    }
  };

  // 導覽列
  const navItems = [
    { title: "首頁", to: "/" },
    { title: "角色介紹", to: "/characters" },
    { title: "商品", to: "/products" },
    { title: "作品", to: "/Video" },
  ];


  return (
    <div className="website-share">
      {/* 共用的頁首 */}
      <header className="header">
        {/* Logo 放置區 */}
        <div className="logo">
          {/* 如果使用 <HashRouter> 前端路由，路徑只要有Link to 記得前面加#，to="#/Home"。 */}
          <Link to="#/Home">
            <img src={`./images/Home/WhatsTheHesa_LOGO.svg`} alt="Logo" />
          </Link>
        </div>

        {/* 音樂按鈕 */}
        <div className="header-right">
          {/* 音頻元素 */}
          <audio
            ref={audioRef}
            src="./audio/MUSIC.mp3" // 替換為你的音樂檔案路徑
            loop // 設置循環播放
          />
          <div
            className="music-toggle"
            onClick={toggleAudio} // 直接調用 toggleAudio 函數
          >
            <img
              src={
                isPlaying
                  ? "./images/Home/musicon.svg"
                  : "./images/Home/Volume-off.svg"
              }
              alt={isPlaying ? "Volume On" : "Volume Off"}
            />
          </div>
        </div>
      </header>
      {/* 共用的內容 */}
      <div className="main-content">
        {/* 導航欄 */}
        {isNavbarOpen && (
          <div className="navbar-container">
            {/* 左右箭頭 */}
            <div className="navbar-header">
              <button
                className="nav-toggle-left"
                onClick={() => setIsNavbarOpen(false)}
                aria-label="Close navigation"
              >
                <div className="nav-icon arrow-left"></div>
              </button>
              <button
                className="nav-toggle-right"
                onClick={() => setIsNavbarOpen(false)}
                aria-label="Close navigation"
              >
                <div className="nav-icon arrow-right"></div>
              </button>
            </div>

            {/* 導航選單 */}
            <nav className="nav-menu">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className={`nav-item ${
                    location.pathname === item.to ? "active" : ""
                  }`}
                >
                  {item.title}
                  <hr />
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* 初始菱形圖案按鈕 */}
        {!isNavbarOpen && (
          <button
            className="nav-toggle-diamond"
            onClick={() => setIsNavbarOpen(true)}
            aria-label="Toggle navigation"
          >
            <div className="nav-icon diamond"></div>
          </button>
        )}

        {/*  <Outlet /> {/* 這裡會渲染子路由的內容 */}
        <main className={`content ${isNavbarOpen ? "navbar-open" : ""}`}>
          <Outlet />
        </main>
        {/* 浮動連結到專屬社群 */}
        <div className="social-links-container">
          <div className="social-links">
            <a
              href="https://www.facebook.com/HesaKizenn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Home/FB.jpg" alt="Facebook" />
            </a>
            <a
              href="https://x.com/Hesa_chisato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Home/X.jpg" alt="X" />
            </a>
            <a
              href="https://www.instagram.com/hesa_chisato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Home/IG.jpg" alt="Instagram" />
            </a>
            <a
              href="https://home.gamer.com.tw/profile/index.php?owner=kuso12336"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Home/Baha.jpg" alt="Bahamut" />
            </a>
          </div>
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
                <a href="https://www.facebook.com/HesaKizenn">
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }./images/Home/icon-sns-facebook.svg`}
                    alt="Facebook"
                  />
                </a>
                <a href="https://www.instagram.com/hesa_chisato">
                  <img src="./images/Home/icon-sns-IG.svg" alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/@Hesakizenn">
                  <img src="./images/Home/icon-sns-youtube.svg" alt="YouTube" />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>這是聯絡黑砂的方式</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Copyright&copy; Hesakizenn 2025 All Rights Reserved 學生練習作品
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
