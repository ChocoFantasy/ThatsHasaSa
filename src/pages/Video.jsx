// pages/Works.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//默認導出（Default Exports），不使用 {} 導入，使用
// import Video from './pages/Video';
const videoList = [
  { id: 1, title: '第一集', url: './audio/Lili&Hesa.mp4' },
  { id: 2, title: '第二集', url: './audio/sunny.mp4' },
];

function Video() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  return (
    <div className="video-page">
      {/* 滿版並嵌入影片區 */}
      <div className="video-player">
        <iframe
          src={currentVideo.url}
          title={currentVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2>{currentVideo.title}</h2>
      </div>

       {/* 橫向影片列表 */}
       <div className="video-list">
        {videoList.map((video) => (
          <div
            key={video.id}
            className={`video-thumbnail ${currentVideo.id === video.id ? 'active' : ''}`}
            onClick={() => setCurrentVideo({ ...video, url: `${video.url}?autoplay=1` })}
          >
            <div className="thumbnail"></div>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;