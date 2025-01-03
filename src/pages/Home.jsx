// pages/Home.jsx
import React, { useState, useEffect } from 'react';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, title: "Event 1", image: "/api/placeholder/800/400" },
    { id: 2, title: "Event 2", image: "/api/placeholder/800/400" },
    { id: 3, title: "Event 3", image: "/api/placeholder/800/400" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </div>

      <div className="content-grid">
        <div className="twitter-feed">
          <h2>Twitter Feed</h2>
          <div className="twitter-content"></div>
        </div>
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
      </div>
    </>
  );
};

export default Home;