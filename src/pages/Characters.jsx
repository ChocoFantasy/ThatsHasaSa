import React, { useState } from "react";

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  // 假設的角色數據
  const characters = [
    {
      id: 1,
      name: "黑砂",
      tagline: "「超越你的想像」",
      description: "這是一個勇敢且充滿智慧的角色，具有強大的技能和堅定的意志。",
      images: [
        "/ThatsHasaSa/images/mix/Hesa.JPG",
        "/ThatsHasaSa/images/mix/Hesa01.JPG",
        "/ThatsHasaSa/images/mix/Hesa03.JPG",
      ],
    },
    {
      id: 2,
      name: "粒粒",
      tagline: "「海風吹在身上真是舒服~」",
      description: "這是一個平靜且睿智的角色，善於觀察和思考。",
      images: [
        "/ThatsHasaSa/images/mix/lili.JPG",
        "/ThatsHasaSa/images/mix/lilichi.jpg",
        "/ThatsHasaSa/images/Home/LOGO.jpg",
      ],
    },
    {
      id: 3,
      name: "浣培",
      tagline: "「不要動我的垃圾！」",
      description: "這是一個靈活且充滿能量的角色，總能在危機時刻發揮作用。",
      images: [
        "/ThatsHasaSa/images/mix/chi01.JPG",
        "/ThatsHasaSa/images/mix/chi02.JPG",
        "/ThatsHasaSa/images/mix/chichi.JPG",
      ],
    },
    {
      id: 4,
      name: "貝陸",
      tagline: "「想看看我最新的發現科技嗎?」",
      description: "這是一個靈活且充滿能量的角色，總能在危機時刻發揮作用。",
      images: [
        "/ThatsHasaSa/images/Shop/Coasters/BearLu.jpg",
        "/ThatsHasaSa/images/Shop/Coasters/BearLu.jpg",
        "/ThatsHasaSa/images/Shop/Coasters/BearLu.jpg",
      ],
    },
    {
      id: 5,
      name: "亞雞",
      tagline: "「想吃點什麼，都能做給你吃」",
      description: "這是一個靈活且充滿能量的角色，總能在危機時刻發揮作用。",
      images: [
        "/ThatsHasaSa/images/mix/yaya.JPG",
        "/ThatsHasaSa/images/mix/yaya01.JPG",
        "/ThatsHasaSa/images/mix/yaya02.JPG",
      ],
    },
    {
      id: 6,
      name: "勾勾",
      tagline: "「帶給大家歡樂，是我最開心的事」",
      description: "這是一個靈活且充滿能量的角色，總能在危機時刻發揮作用。",
      images: [
        "/ThatsHasaSa/images/mix/guoguo.JPG",
        "/ThatsHasaSa/images/mix/guoguo01.JPG",
        "/ThatsHasaSa/images/mix/guoguo.JPG",
      ],
    },
  ];

  const currentCharacter = characters[selectedCharacter];

  return (
    <div className="characters-page">
      {/* 角色詳細內容 */}
      <div className="character-details">
        <div className="details-header">
          <h1>{currentCharacter.name}</h1>
          <h2>{currentCharacter.tagline}</h2>
          <p>{currentCharacter.description}</p>
        </div>
        <div className="character-carousel">
          {currentCharacter.images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`${currentCharacter.name} - ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* 角色選擇區 */}
      <div className="character-selector">
        <div className="character-list">
          {characters.map((char, index) => (
            <div
              key={char.id}
              className={`character-card ${
                index === selectedCharacter ? "active" : ""
              }`}
              onClick={() => setSelectedCharacter(index)}
            >
              <div className="card-overlay"></div>
              <img src={char.images[0]} alt={char.name} />
              <div className="card-info">
                <h4>{char.name}</h4>
                <p>{char.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
