import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import errImg from '../../assets/404.png';
import { Link } from 'react-router-dom';
import './notFound.scss';
const NotFound = () => {
  return (
    <div>
      <main>
        <Header />
        <div className='notFound'>
          <img src={errImg} alt='Error' />
          <p>Oups! La page que vous demandez n'existe pas.</p>

          <Link className='home-link' to='/'>
            Retourner sur la page d'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
