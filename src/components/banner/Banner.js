import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './banner.scss';
const Banner = () => {
  const [banner, setBanner] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/about') {
      setBanner(true);
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={banner ? 'banner_about' : 'banner'}>
      {!banner && <p>Chez vous, partout et ailleurs</p>}
    </div>
  );
};

export default Banner;
