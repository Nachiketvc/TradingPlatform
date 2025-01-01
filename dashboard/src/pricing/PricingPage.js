import React from 'react';
import Brokerage from './Brokerage';
import Pricing from './Pricing';
import Hero from './Hero';
import Navbar from '../others/Navbar';
import Footer from '../others/Footer';

function PricingPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <Brokerage />
            <Pricing /> */}
            <div style={{marginTop: '500px'}}>
            <Footer/>
            </div>
        </div>
    );
}

export default PricingPage;