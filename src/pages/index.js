import React from 'react';

import Hero from '../components/Herosection/Hero';
import Listings from '../components/Listings/Listings';
import Features from '../components/Features/Features';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import {SliderData} from '../data/SliderData';
import InfoSection from '../components/Infosection/InfoSection';


const Home = () => {
    return (
       <>
       <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <Listings/>
      <Features/>
      <InfoSection {...InfoDataTwo}/>
       </>
    );
};

export default Home;
