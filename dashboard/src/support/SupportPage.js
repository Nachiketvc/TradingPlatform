import React from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero';
import Navbar from '../others/Navbar';

function SupportPage() {
    return (
        <div>
            <Navbar/>
            {/* <Hero/> */}
            <CreateTicket/>
        </div>
    );
}

export default SupportPage;


