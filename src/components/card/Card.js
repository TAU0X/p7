import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';
function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className='gallery_card'>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

export default Card;
