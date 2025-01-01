import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Openaccount.css'; // Import the CSS file

function Openaccount() {
    const navigate = useNavigate(); // Hook for navigation

    const handleSignupClick = () => {
        navigate('/signup'); // Navigate to the Signup page
    };

    return (
        <div className="container" style={{ marginTop: '-80px' }}>
            <div className="text-center">
                <h1>Open a Trading account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button 
                    className="btn btn-primary fs-5" 
                    onClick={handleSignupClick} // Add click handler
                >
                    Signup for free
                </button>
            </div>
        </div>
    );
}

export default Openaccount;




