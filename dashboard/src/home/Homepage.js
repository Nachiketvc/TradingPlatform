import React from 'react';

import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import Openaccount from '../others/Openaccount';
import '../others/Openaccount.css';
import Navbar from '../others/Navbar';
import Dashboard from '../others/Footer';




function HomePage() {
    return (
        <>
           <Navbar/>
           <Hero/>
           <Awards/>
           <Stats/>
           <Pricing/>
           <Education/>
           <Openaccount/>
           <Dashboard/>
        </>
    );
}

export default HomePage;