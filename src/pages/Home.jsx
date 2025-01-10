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
      image: `./images/Shop/Activity/New _productpost.png`,
    },
    {
      id: 2,
      title: "Event 2",
      image: `./images/Shop/Activity/Movie_New.png`,
    },
    {
      id: 3,
      title: "Event 3",
      image: `./images/Shop/Activity/New_Product_Acne_Care.png`,
    },
  ];

  // 推特籤入的文章
  const tweetIds = [
    "1832614806949654601",
    "1876698488454647923",
  ];

  const newsItems = [
    {
      date: "2025/01/06",
      title: "新作發布！《黑砂的日常》第一集現已上線",
      content: "最新一集探討了黑砂如何與朋友們在日常生活中創造歡樂。",
      image: "./images/Home/Loading.jpg",
    },
    {
      date: "2025/01/04",
      title: "週末簽名會預告",
      content:
        "本週末將在台北舉辦簽名會，歡迎大家來交流！地點：台北市信義區...",
      image: "./images/Home/Loading.jpg",
    },
    {
      date: "2025/01/02",
      title: "新年特別企劃開跑",
      content: "新年限定周邊商品即將發售，敬請期待！",
      image: "./images/Home/Loading.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="home-container">
        {/* 主視覺圖 */}
        <div className="main-visual-section">
        <div className="main-visual">
          <img
            src="./images/Home/Main-Vision.jpg"
            alt="Main Visual"
            className="main-visual-image"
          />
        </div>
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
          <div className="news-section">
            <h2>最新消息</h2>
            <div className="news-grid">
              {newsItems.map((item, index) => (
                <div key={index} className="news-card">
                  {/* 移除圖片部分 */}
                  <div className="news-content">
                    <span className="news-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 原創 IP 介紹文字 */}
        <div className="ip-introduction">
          <h2>「那個啥黑砂!?」</h2>
          <p>《那個啥黑砂!?》——創作者「黑砂」的原創角色與故事世界</p>
          <p>
            故事圍繞主角黑砂與他的夥伴們的日常展開，透過不同角色的個性與互動，呈現搞笑、人生感悟、
            感動、中二、青春和惡搞等多樣元素。
          </p>
          <p>
            作品內容以漫畫、圖畫、動畫、文字及聲音等形式，通過社群媒體和網路平台分享，
            創造出獨特的世界觀與體驗。
          </p>
          <p>作品設定包括「一般版」和「TV版」兩種</p>
          <p>「TV版」是虛擬世界中的電視卡通，居住著一群圓滾滾神秘生物。</p>
          <p>
            主角是一顆充滿好奇心的「黑色砂子」，常因能力不足而感到困擾，
            但他依然勇於嘗試，並踏上尋找夥伴的旅程，一同探索他夢想中的新世界。
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
