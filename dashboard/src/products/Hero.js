import React from 'react';
import styles from './Hero.products.module.css'; // Import the CSS module

function Hero() {
    return (
        <div className={styles.container}>
            <div className={`${styles['text-center']} ${styles['mt-5']} ${styles.p-5}`}>
                <h1>Zerodha Products</h1>
                <h3 className={`${styles['text-muted']} ${styles['mt-3']} ${styles['fs-4']}`}>Sleek, modern, and intuitive trading platforms</h3>
                <p className={`${styles['mt-1']} ${styles['mb-1']}`} style={{marginTop: '-100px'}}>
                    Check out our{' '}
                    <a href="" className={styles.link}>investment offerings</a>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </p>
            </div>
        </div>
    );
}

export default Hero;




