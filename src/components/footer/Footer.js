import React from 'react';
import logo from '../../assets/LOGO-footer.png';
import './footer.scss';
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='logo' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
