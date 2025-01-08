// pages/Products.jsx
import React, { useState, useEffect } from 'react';

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedCharacter, setSelectedCharacter] = useState('全部');
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  // 輪播圖數據
  const carouselItems = [
    { id: 1, image: "./images/Shop/Activity/New _productpost.png", title: "新品上市" },
    { id: 2, image: "./images/Shop/Activity/Movie_New.png", title: "最新消息" },
    { id: 3, image: "./images/Shop/Activity/New_Product_Acne_Care.png", title: "新品上市" },
  ];

  // 商品種類
  const categories = ["全部", "T-shirt", "杯墊"];

  // 角色列表
  const characters = ["全部", "黑砂", "貝陸", "浣培", "粒粒", "亞雞", "勾勾"];

  // 商品數據 - 修正ID重複問題
  const products = [
    { id: 1, name: "黑砂B", image: "./images/Shop/t-shirt/Hesa-B.jpg", type: "T-shirt", character: "黑砂", price: 790 },
    { id: 2, name: "黑砂W", image: "./images/Shop/t-shirt/Hesa-W.jpg", type: "T-shirt", character: "黑砂", price: 790 },
    { id: 3, name: "黑砂杯墊", image: "./images/Shop/Coasters/Hesa.jpg", type: "杯墊", character: "黑砂", price: 390 },
    { id: 4, name: "貝陸B", image: "./images/Shop/t-shirt/BearLu-B.jpg", type: "T-shirt", character: "貝陸", price: 790 },
    { id: 5, name: "貝陸W", image: "./images/Shop/t-shirt/BearLu-W.jpg", type: "T-shirt", character: "貝陸", price: 790 },
    { id: 6, name: "貝陸杯墊", image: "./images/Shop/Coasters/BearLu.jpg", type: "杯墊", character: "貝陸", price: 390 },
    { id: 7, name: "浣培B", image: "./images/Shop/t-shirt/Huanpei-B.jpg", type: "T-shirt", character: "浣培", price: 790 },
    { id: 8, name: "浣培W", image: "./images/Shop/t-shirt/Huanpei-W.jpg", type: "T-shirt", character: "浣培", price: 790 },
    { id: 9, name: "浣培杯墊", image: "./images/Shop/Coasters/Huanpei.jpg", type: "杯墊", character: "浣培", price: 390 },
    { id: 10, name: "粒粒B", image: "./images/Shop/t-shirt/Lili-B.jpg", type: "T-shirt", character: "粒粒", price: 790 },
    { id: 11, name: "粒粒W", image: "./images/Shop/t-shirt/Lili-W.jpg", type: "T-shirt", character: "粒粒", price: 790 },
    { id: 12, name: "粒粒杯墊", image: "./images/Shop/Coasters/Lili.jpg", type: "杯墊", character: "粒粒", price: 390 },
    { id: 13, name: "亞雞B", image: "./images/Shop/t-shirt/Yaji-B.jpg", type: "T-shirt", character: "亞雞", price: 790 },
    { id: 14, name: "亞雞W", image: "./images/Shop/t-shirt/Yaji-W.jpg", type: "T-shirt", character: "亞雞", price: 790 },
    { id: 15, name: "亞雞杯墊", image: "./images/Shop/Coasters/Yaji.jpg", type: "杯墊", character: "亞雞", price: 390 },
    { id: 16, name: "勾勾B", image: "./images/Shop/t-shirt/GouGou-B.jpg", type: "T-shirt", character: "勾勾", price: 790 },
    { id: 17, name: "勾勾W", image: "./images/Shop/t-shirt/Gou-Gou-W.jpg", type: "T-shirt", character: "勾勾", price: 790 },
    { id: 18, name: "勾勾杯墊", image: "./images/Shop/Coasters/GouGou.jpg", type: "杯墊", character: "勾勾", price: 390 }
  ];

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    setAutoplayInterval(interval);
    return () => clearInterval(interval);
  }, []);

  // 切換輪播圖
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // 篩選商品 
  const filteredProducts = products.filter(product => {
    if (selectedCategory === '全部' && selectedCharacter === '全部') {
      return true;
    }
    if (selectedCategory === '全部') {
      return product.character === selectedCharacter;
    }
    if (selectedCharacter === '全部') {
      return product.type === selectedCategory;
    }
    return product.type === selectedCategory && product.character === selectedCharacter;
  });


  return (
    <div className="product-container">
      <section className="carousel-section">
        <div className="carousel-container">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)} // 點擊時切換到該圖片
              style={{
                transform: `translateX(${(index - currentSlide) * 120}%) scale(${currentSlide === index ? 1 : 0.8})`,
                zIndex: currentSlide === index ? 2 : 1,
                opacity: currentSlide === index ? 1 : 0.5,
              }}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
          <button className="carousel-button prev" onClick={prevSlide}>
            &lt;
          </button>
          <button className="carousel-button next" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </section>




      <section className="announcement-section">
        <div className="card">
          <h2>最新消息</h2>
          <div className="news-item">
            <span className="tag new">NEW</span>
            <p>歡迎光臨那個啥黑砂!?小夥伴的商店！現在購買任何商品都享有免運費優惠。</p>
          </div>
          <div className="news-item">
            <span className="tag announcement">公告</span>
            <p>新品上架通知：每週四更新最新商品，請持續關注！</p>
          </div>
          <div className="news-item">
            <span className="tag event">活動</span>
            <p>會員專屬優惠活動進行中，立即註冊即可享有專屬折扣。</p>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="filter-container">
          <div className="filter-group">
            <h3>商品類型</h3>
            <div className="button-group">
              {categories.map(category => (
                <button
                  key={category}
                  className={`${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>角色</h3>
            <div className="button-group">
              {characters.map(character => (
                <button
                  key={character}
                  className={`${selectedCharacter === character ? 'active' : ''}`}
                  onClick={() => setSelectedCharacter(character)}
                >
                  {character}
                </button>
              ))}
            </div>
          </div>
          {/* 商品總數移到角色篩選右邊 */}
          <div className="total-counter">全 {filteredProducts.length} 件</div>
        </div>


      </section>

      <section className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="card-content">
              <div className="image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="info-container">
                <h3>{product.name}</h3>
                <p className="type">{product.type}</p>
                <div className="product-info">
                  {/* 角色標籤移到價格右側 */}
                  <p className="price">
                    NT$ {product.price}
                  </p>
                  <span className="character-tag">{product.character}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;