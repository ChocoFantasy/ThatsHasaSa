// pages/Home.jsx
import React, { useState, useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 輪播圖
  const slides = [
    {
      id: 1,
      title: "Event 1",
      image: `${import.meta.env.BASE_URL}/images/mix/Home-banner.jpg`,
    },
    {
      id: 2,
      title: "Event 2",
      image: `${import.meta.env.BASE_URL}/images/mix/Hesa.JPG`,
    },
    {
      id: 3,
      title: "Event 3",
      image: `${import.meta.env.BASE_URL}/images/mix/Chi.JPG`,
    },
  ];

  //
  const tweetIds = [
    "1832614806949654601",
    "1758506013739937826",
    "1657691529098727424",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 主視覺圖 */}
      <div className="main-visual">
        <img
          src="/ThatsSaHesa/images/Home/Main-Vision.jpg"
          alt="Main Visual"
          className="main-visual-image"
        />
      </div>

      {/* 活動輪播圖 */}
      <div className="carousel-section">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${currentSlide === index ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} />
            </div>
          ))}
        </div>
      </div>
      {/* 推廣與最新消息區 */}
      <div className="content-grid">
        {/* 推特推廣區 */}
        <div className="twitter-feed">
          <h2>Twitter Feed</h2>
          <div className="twitter-content">
            {/* 嵌入指定的推文 ID */}
            {/* 使用 map 渲染多個推文 */}
            {tweetIds.map((id) => (
              <div key={id} className="tweet-item">
                <TwitterTweetEmbed tweetId={id} />
              </div>
            ))}
          </div>
        </div>
        {/* 最新消息 */}
        <div className="announcements">
          <h2>Latest Updates</h2>
          <div className="updates-list">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="update-item">
                Update {i + 1}
              </div>
            ))}
          </div>
        </div>

          {/* 原創 IP 介紹文字 */}
          <div className="ip-introduction">
          <h2>「那個啥黑砂!?」</h2>
          <p>
            「那個啥黑砂!?」是一個以創意、角色互動和故事為主軸的品牌。我們的目標是結合小夥伴們的冒險和幻想，讓大家沉浸體驗小夥伴的日常生活。
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
