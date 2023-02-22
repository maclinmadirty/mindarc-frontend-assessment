import React from 'react';
import Banner from '../../../components/banner/Banner';
import Cards from '../../../components/cards/Cards';
import './home.scss';
const HomePage = () => {
  return <div className='home'>
    <Banner />
    <Cards />
  </div>;
};

export default HomePage;
