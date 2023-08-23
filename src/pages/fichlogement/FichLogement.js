import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Carrousel from '../../components/carrousel/Carrousel';
import Collapse from '../../components/collapse/Collapse';
import datas from '../../data/db';
import redStar from '../../assets/red_star.png';
import greyStar from '../../assets/grey_star.png';
import './fichLogement.scss';
import NotFound from '../404/NotFound';

const FichLogement = () => {
  const idLogement = useParams('id').id;
  const dataCurrentLogement = datas.filter((data) => data.id === idLogement);

  return (
    <>
      {dataCurrentLogement.length === 1 ? (
        <div>
          <main>
            <Header />
            <Carrousel imageSlider={dataCurrentLogement[0].pictures} />
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
                      <span>
                        {dataCurrentLogement[0].host.name.split(' ')[0]}
                      </span>
                      <span>
                        {dataCurrentLogement[0].host.name.split(' ')[1]}
                      </span>
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
                          src={
                            ratingValue <= dataCurrentLogement[0].rating
                              ? redStar
                              : greyStar
                          }
                          alt='star'
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='logement_collapse'>
                <div className='logement_collapse_item'>
                  <Collapse
                    title={'Description'}
                    content={dataCurrentLogement[0].description}
                  />
                </div>
                <div className='logement_collapse_item'>
                  <Collapse
                    title={'Équipements'}
                    content={dataCurrentLogement[0].equipments}
                  />
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default FichLogement;
