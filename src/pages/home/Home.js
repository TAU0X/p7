import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import './home.scss';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <main>
        <Header />
        <Banner />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
