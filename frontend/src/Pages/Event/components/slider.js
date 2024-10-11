import React, { useEffect } from 'react';
import './slider.css'; // Import the CSS for styling

const Slider = () => {

  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    next.addEventListener('click', handleNext);
    prev.addEventListener('click', handlePrev);

    return () => {
      next.removeEventListener('click', handleNext);
      prev.removeEventListener('click', handlePrev);
    };
  }, []);

  const handleNext = () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  };

  const handlePrev = () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  };

  return (
    <div>
    <div className="container-slider">
      <div className="slide">
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/qCkd9jS/img1.jpg)' }}
        >
          <div className="content">
            <div className="name">Vasista 2K24</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/jrRb11q/img2.jpg)' }}
        >
          <div className="content">
            <div className="name">Chaitra 2K24</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)' }}
        >
          <div className="content">
            <div className="name">Pramidha 2K24</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)' }}
        >
          <div className="content">
            <div className="name">Vasista 2K23</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)' }}
        >
          <div className="content">
            <div className="name">Chaitra 2K23</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
      </div>

      <div className="button">
        <button className="prev">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Slider;
