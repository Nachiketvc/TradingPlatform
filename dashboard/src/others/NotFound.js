import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function NotFound() {
    return (
        <div>
   <Navbar/>

            <div style={{marginTop: '100px'}}>
                <h2 style={{ marginLeft: '120px' }}>404 Not Found</h2>
                <h4 style={{ marginLeft: '120px', opacity: '0.8', fontSize: '18px' }}>Sorry, the page you are looking for does not exist.</h4>
            </div>

<div style={{marginTop: '700px'}}>
    <Footer/>
</div>
        </div>
    );
}

export default NotFound;