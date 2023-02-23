import React from 'react';
import Banner from '../../../components/banner/Banner';
import Cards from '../../../components/cards/Cards';
import DataTabs from '../../../components/data-tabs/data-tabs';
import './home.scss';
const HomePage = () => {
  return <div className='home'>
    <Banner />
    <Cards />
    <DataTabs />
  </div>;
};

export default HomePage;
