import React from 'react';

import Footer from '../others/Footer';
import './Create.css';

const CreateTicket = () => {
    return (
        <div className="support-portal">
            {/* Header Section */}
            <div className="header">
                <h1 style={{marginTop: '-1px'}}>Support Portal</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Eg. how do I activate F&O"
                        className="search-input"
                    />
                    <div className="quick-links">
                        <a href="#">Track account opening</a>
                        <a href="#">Track segment activation</a>
                        <a href="#">Intraday margins</a>
                        <a href="#">Kite user manual</a>
                    </div>
                </div>
            </div>

            {/* Featured Links Section */}
            <div className="featured">
                <h2 style={{ marginTop: '100px' }}>Featured</h2>
                <ul>
                    <li>
                        <a href="#">Current Takeovers and Delisting – January 2024</a>
                    </li>
                    <li>
                        <a href="#">Latest Intraday leverages - MIS & CO</a>
                    </li>
                </ul>
            </div>

            {/* Ticket Topics Section */}
            <div className="ticket-topics">
                <h2 style={{ marginTop: '80px' }}>To create a ticket, select a relevant topic</h2>
                <div className="topics-grid">
                    {[...Array(3)].map((_, colIndex) => (
                        <div className="topic-column" key={colIndex} style={{ marginTop: '80px' }}>
                            <ul>
                                <li><a href="#">Online Account Opening</a></li>
                                <li><a href="#">Offline Account Opening</a></li>
                                <li><a href="#">Company, Partnership and HUF Account Opening</a></li>
                                <li><a href="#">NRI Account Opening</a></li>
                                <li><a href="#">Charges at Zerodha</a></li>
                                <li><a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                                <li><a href="#">Getting Started</a></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{marginTop: '600px'}}>
                <Footer />
            </div>
        </div>
    );
};

export default CreateTicket;