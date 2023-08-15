import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Carrousel from '../../components/carrousel/Carrousel';
import Collapse from '../../components/collapse/Collapse';
import datas from '../../data/db.json';
import redStar from '../../assets/red_star.png';
import greyStar from '../../assets/grey_star.png';
import './fichLogement.scss';

const FichLogement = () => {
  const [imageSlider, setImageSlider] = useState([]);

  const idLogement = useParams('id').id;
  const dataCurrentLogement = datas.filter((data) => data.id === idLogement);

  useEffect(() => {
    const dataCurrentLogement = datas.filter((data) => data.id === idLogement);
    setImageSlider(dataCurrentLogement[0].pictures);
  }, [idLogement]);

  const name = dataCurrentLogement[0].host.name.split(' ');
  const rating = dataCurrentLogement[0].rating;
  const description = dataCurrentLogement[0].description;
  const equipments = dataCurrentLogement[0].equipments;

  return (
    <div>
      <main>
        <Header />
        <Carrousel imageSlider={imageSlider} />
        <div className='logement'>
          <div className='logement_content'>
            <div className='logement_content_infos'>
              <h1>{dataCurrentLogement[0].title}</h1>
              <p>{dataCurrentLogement[0].location}</p>
              <div>
                {dataCurrentLogement[0].tags.map((tag, index) => {
                  return <button key={index}>{tag}</button>;
                })}
              </div>
            </div>
            <div className='logement_content_host'>
              <div>
                <div className='logement_content_host_name'>
                  <span>{name[0]}</span>
                  <span>{name[1]}</span>
                </div>
                <img
                  src={dataCurrentLogement[0].host.picture}
                  alt='host of this logement'
                />
              </div>

              <div className='logement_content_host_stars'>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <img
                      key={index}
                      src={ratingValue <= rating ? redStar : greyStar}
                      alt='star'
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className='logement_collapse'>
            <div className='logement_collapse_item'>
              <Collapse title={'Description'} content={description} />
            </div>
            <div className='logement_collapse_item'>
              <Collapse title={'Équipements'} content={equipments} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FichLogement;
