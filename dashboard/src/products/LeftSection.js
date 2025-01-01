import React from "react";
import "./LeftSection.css";

const LeftSection = ({ imageSrc, altText, productName, ProductDescription, tryDemo, learnMore, playStore, appStore }) => {
    return (
        <div className="image-content-container" style={{marginTop: '-180px'}}>
            <div className="image-container">
                <img src={imageSrc} alt={altText} />
            </div>
            <div className="content-container">
                <h2>{productName}</h2>
                <p>{ProductDescription}</p>
                <br></br>
                <div style={{ marginLeft: '0px' }}>
                    <a href={tryDemo}>{tryDemo}</a>
                    <a href={learnMore} style={{ marginLeft: '15px' }}>{learnMore}</a>
                </div>
                <div style={{ marginLeft: '0px', marginTop: '16px' }}>
                    <a href=''>
                        <img
                            src={playStore}
                            style={{ marginRight: '15px', width: '120px', height: 'auto' }}
                            alt="Google Play Badge"
                        />
                    </a>
                    <a href=''>
                        <img
                            src={appStore}
                            style={{ marginLeft: '15px', width: '120px', height: 'auto' }}
                            alt="App Store Badge"
                        />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default LeftSection;

