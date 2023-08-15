import React from 'react';
import './Gallery.scss';

import Card from '../card/Card';
import datas from '../../data/db.json';
const Gallery = () => {
  return (
    <div className='home_gallery'>
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
