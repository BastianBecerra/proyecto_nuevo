import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Usando URLs externas para imágenes y videos
const ImagenVid1 = 'https://via.placeholder.com/150';
const ImagenVid2 = 'https://via.placeholder.com/150';
const ImagenVid3 = 'https://via.placeholder.com/150';
const poster1 = 'https://via.placeholder.com/800x400';
const poster2 = 'https://via.placeholder.com/800x400';
const poster3 = 'https://via.placeholder.com/800x400';

const General = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const media = [
    {
      type: 'video',
      source: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: poster1,
      thumbnail: ImagenVid1,
    },
    {
      type: 'video',
      source: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: poster2,
      thumbnail: ImagenVid2,
    },
    {
      type: 'video',
      source: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: poster3,
      thumbnail: ImagenVid3,
    },
  ];

  const handleClickThumbnail = (index) => {
    setActiveIndex(index);
  };

  const renderMediaItem = (item, index) => {
    if (item.type === 'video') {
      return (
        <Carousel.Item key={index}>
          <video className="d-block w-100" controls poster={item.poster}>
            <source src={item.source} type="video/mp4" />
          </video>
        </Carousel.Item>
      );
    } else if (item.type === 'url') {
      return (
        <Carousel.Item key={index}>
          <iframe
            src={item.source}
            title={`External Video ${index + 1}`}
            allowFullScreen
            className="d-block w-100"
          ></iframe>
        </Carousel.Item>
      );
    }
  };

  return (
    <section className="bg-white py-5" id='descripcionGeneral'>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <div className="videoSlider">
              <h1 className='RobotoBold'>Video</h1>
              <div>
                <Carousel className='py-5 px-2' activeIndex={activeIndex} onSelect={handleSelect} controls={false} indicators={false}>
                  {media.map((item, index) => renderMediaItem(item, index))}
                </Carousel>
                <div className="media-thumbnails">
                  {media.map((item, index) => (
                    <div key={index} className={`media-thumbnail ${index === activeIndex ? 'active' : ''}`} onClick={() => handleClickThumbnail(index)}>
                      <div className='thumbnail-square'>
                        <img src={item.thumbnail} alt={`Media ${index + 1}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default General;
