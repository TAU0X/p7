import React, { useState } from 'react';
import arrow from '../../assets/arrow.svg';
import './collapse.scss';
const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='collapse'>
      <h3 className='collapse_title' onClick={() => setIsOpen(!isOpen)}>
        {title}

        <img
          className={isOpen ? 'arrow arrow_up' : 'arrow arrow_down'}
          src={arrow}
          alt='arrow'
        />
      </h3>
      <div className={isOpen ? 'collapse_content' : 'collapse_content_hidden'}>
        {Array.isArray(content)
          ? content.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          : content}
      </div>
    </div>
  );
};

export default Collapse;
