import React, { useState, useEffect } from 'react';

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const characters = [
    {
      id: 1,
      name: "黑砂",
      tagline: "「超越你的想像」",
      description: "這是一個勇敢且充滿智慧的角色，具有強大的技能和堅定的意志。",
      faction: "超級英雄聯盟",
      quotes: [
        "讓我們一起創造奇蹟！",
        "沒有什麼是不可能的。",
        "相信自己的力量。"
      ],
      image: "./images/mix/Hesa.JPG",
      theme: {
        primary: '#13775A',
        primaryTransparent: '#13775A33',
        contrast: 'black'
      }
    },
    {
      id: 2, 
      name: "粒粒",
      tagline: "「永不放棄的心」",
      description: "擁有堅韌不拔的精神，總是以積極的態度面對挑戰的戰士。",
      faction: "光明守護者",
      quotes: [
        "光明永遠與你同在！",
        "讓我們一起守護這個世界。",
        "黑暗終將被驅散。"
      ],
      image: "./images/mix/lili.JPG",
      theme: {
        primary: '#CCB7FF',
        primaryTransparent: '#CCB7FF33',
        contrast: 'white'
      }
    },
    {
      id: 3,
      name: "浣培",
      tagline: "「科技的力量」",
      description: "精通各種高科技裝備的天才發明家，為團隊提供強大的技術支援。",
      faction: "科技研究所",
      quotes: [
        "科技改變世界！",
        "創新永不止步。",
        "知識就是力量。"
      ],
      image: "./images/Shop/Coasters/Huanpei.jpg",
      theme: {
        primary: '#A6E5FF',
        primaryTransparent: '#A6E5FF33',
        contrast: 'black'
      }
    },
    {
      id: 4,
      name: "貝陸",
      tagline: "「戰場的指揮官」",
      description: "具有非凡的戰略眼光，帶領團隊走向勝利的優秀領袖。",
      faction: "戰略部隊",
      quotes: [
        "勝利屬於有準備的人！",
        "團結就是力量。",
        "策略決定成敗。"
      ],
      image: "./images/Shop/Coasters/BearLu.jpg",
      theme: {
        primary: '#FFE75F',
        primaryTransparent: '#FFE75F33',
        contrast: 'black'
      }
    },
    {
      id: 5,
      name: "亞雞",
      tagline: "「神秘的預言者」",
      description: "擁有預知未來能力的神秘角色，指引團隊避開危險。",
      faction: "預言教團",
      quotes: [
        "未來掌握在我們手中！",
        "命運可以改變。",
        "聆聽內心的聲音。"
      ],
      image: "./images/Shop/Coasters/Yaji.jpg",
      theme: {
        primary: '#3B42A7',
        primaryTransparent: '#3B42A733',
        contrast: 'white'
      }
    },
    {
      id: 6,
      name: "勾勾",
      tagline: "「熱血的戰士」",
      description: "充滿熱情和正義感的戰士，永遠站在弱者這一方。",
      faction: "正義聯盟",
      quotes: [
        "正義永遠不會遲到！",
        "為了守護而戰。",
        "勇氣就是我的力量。"
      ],
      image: "./images/Shop/Coasters/GouGou.jpg",
      theme: {
        primary: '#E64254',
        primaryTransparent: '#E6425433',
        contrast: 'white'
      }
    }
  ];

  const handleCharacterChange = (index) => {
    if (index === selectedCharacter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCharacter(index);
      setIsTransitioning(false);
    }, 300);
  };

  const currentCharacter = characters[selectedCharacter];

  return (
    <div className="character-page" 
      style={{ 
        backgroundColor: currentCharacter.theme.contrast === 'black' ? '#ffffff' : '#1a1a1a',
        '--character-primary': currentCharacter.theme.primary,
        '--character-primary-transparent': currentCharacter.theme.primaryTransparent
      }}>
      
      <div className="character-content" style={{
        background: `linear-gradient(135deg, ${currentCharacter.theme.primaryTransparent} 0%, ${currentCharacter.theme.contrast === 'black' ? '#ffffff' : '#1a1a1a'} 100%)`
      }}>
        <div className="character-info" style={{
          color: currentCharacter.theme.contrast
        }}>
          <h1 className="character-name">{currentCharacter.name}</h1>
          <p className="tagline">{currentCharacter.tagline}</p>
          
          <div className="info-grid">
            <div className="info-block faction">
              {currentCharacter.faction}
            </div>
            
            <div className="info-block description">
              {currentCharacter.description}
            </div>
            
            <div className="info-block quotes">
              <ul>
                {currentCharacter.quotes.map((quote, index) => (
                  <li key={index}>{quote}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="character-visual">
          <img src={currentCharacter.image} alt={currentCharacter.name} />
        </div>
      </div>

      <div className="character-selector">
        {characters.map((char, index) => (
          <button
            key={char.id}
            onClick={() => setSelectedCharacter(index)}
            className={`selector-button ${selectedCharacter === index ? 'active' : ''}`}
            style={{
              '--character-primary': char.theme.primary
            }}
          >
            <div className="selector-inner">
              <img src={char.image} alt={char.name} />
            </div>
            <span className="selector-name">{char.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Characters;