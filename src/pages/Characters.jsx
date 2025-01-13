import React, { useState, useEffect } from 'react';

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const characters = [
    {
      id: 1,
      name: "黑砂",
      tagline: "「創造的力量」",
      description: "充滿好奇心的一粒黑色砂粒，像砂礫一樣堅毅，勇於嘗試各種事物，喜愛藝術，也象徵著將細小的砂粒匯聚成無限創造力。",
      faction: "創意之心",
      quotes: [
        "讓我們一起創造奇蹟！",
        "藝術是心靈的力量。",
        "小小的砂粒，也能成為巨大的創造。"
      ],
      image: "./images/LOGO/hesa_logo_BU.png",
      theme: {
        primary: '#13775A',
        primaryTransparent: '#13775A33',
        contrast: 'black'
      }
    },
    {
      id: 2, 
      name: "Z.Z",
      tagline: "「大自然的療癒者」",
      description: "一顆喜歡大自然的蛤蜊，熱愛植物、海洋和所有令人療癒的事物。粒粒較少說話，總能靜靜地觀察並理解人心，給予夥伴們溫暖與支持，是最值得信賴的好夥伴。",
      faction: "自然守護者",
      quotes: [
        "大自然是心靈的療癒。",
        "海風吹在身上，真是涼爽。",
        "讓我們慢下來，感受這一刻。"
      ],
      image: "./images/Profile/Stickers-without-words/ZZ_4.png",
      theme: {
        primary: '#CCB7FF',
        primaryTransparent: '#CCB7FF33',
        contrast: 'white'
      }
    },
    {
      id: 3,
      name: "浣培",
      tagline: "「閃耀的夢」",
      description: "一隻藍色的浣熊，懷抱著成為偶像的夢想，擁有閃閃發亮的偶像眼睛。平時懶懶的，常因遇到挫折而抱怨，但內心始終充滿熱情與堅持，喜歡唱歌且對喜愛的事物執著。",
      faction: "星光之夢",
      quotes: [
        "每個努力的日子，都是閃耀的時刻。",
        "不要碰我的垃圾。",
        "不管多累，光芒不能熄滅！"
      ],
      image: "./images/Profile/Stickers-without-words/Vanpe_1.png",
      theme: {
        primary: '#A6E5FF',
        primaryTransparent: '#A6E5FF33',
        contrast: 'black'
      }
    },
    {
      id: 4,
      name: "貝陸",
      tagline: "「音樂與科技的智者」",
      description: "一隻愛好音樂的熊，頭戴耳機，擅長DJ盤和各種科技設備。貝陸博學多聞，像一本百科全書，總能回答夥伴們的疑問，是團隊中不可或缺的智者。",
      faction: "音律與智慧",
      quotes: [
        "科技讓我們更接近未來。",
        "任何問題，都有解決之道！",
        "策略決定成敗。"
      ],
      image: "./images/Profile/Stickers-without-words/Bearu_3.png",
      theme: {
        primary: '#FFE75F',
        primaryTransparent: '#FFE75F33',
        contrast: 'black'
      }
    },
    {
      id: 5,
      name: "亞雞",
      tagline: "「快樂的料理家」",
      description: "一隻灰色的雞，頭頂深藍色毛髮，熱愛美食與料理，是團隊中最會做菜的角色。亞雞擅長用幽默的語氣化解氣氛，懂得許多梗圖，帶給大家快樂與溫暖。",
      faction: "美味與快樂",
      quotes: [
        "人生就是一場美味的盛宴！",
        "想吃什麼，馬上做給你吃",
        "幽默，是最棒的調味料。"
      ],
      image: "./images/Profile/Stickers-without-words/Yaki_1.png",
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
      description: "一隻紅色的刺蝟，頭戴護目鏡，充滿熱情與正義感，總能和所有人打成一片。在實驗室裡，他專注於研究科技機械，表面熱情，內心對事情認真執著，是團隊裡最年輕但最有衝勁的一員。",
      faction: "熱血發明家",
      quotes: [
        "交朋友？簡單的事！",
        "熱血，就是我的動力！",
        "專注才能成就未來。"
      ],
      image: "./images/Profile/Stickers-without-words/GOGO_4.png",
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