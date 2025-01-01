import React from 'react';
import styles from './Hero.pricing.module.css'; // Import the CSS module

function Hero() {
    return (
        <div className={styles.container}>
            <h1 style={{fontWeight: 'normal', marginTop: '-50px'}}>Charges</h1>
            <h3 style={{textAlign: 'center'}}className={styles['mt-4']}>List of all charges and taxes</h3>
            <div className={`${styles.container} ${styles.mt - 5}`}>
                <div className={styles.row}>
                    <div className={styles['col-4']} style={{width: '20%', marginTop: '-100px'}}>
                        <img src='images/pricingEquity.svg' className={styles.img} />
                        <h2 className={styles['mt-3']}>Free equity delivery</h2>
                        <p className={styles['text-muted']}>All equity delivery investments (NSE, BSE), <br />
                            are absolutely free — ₹ 0 brokerage</p>
                    </div>
                    <div className={styles['col-4']} style={{width: '20%', marginTop: '-100px'}}>
                        <img src='images/intradayTrades.svg' className={styles.img} />
                        <h2 className={styles['mt-3']}>Intraday and F&O trades</h2>
                        <p className={styles['text-muted']}>Flat ₹ 20 or 0.03% (whichever is lower) per <br />
                            executed order on intraday trades across <br />equity, currency, and commodity trades. Flat <br />
                            ₹20 on all option trades.</p>
                    </div>
                    <div className={styles['col-4']} style={{width: '20%', marginTop: '-100px'}}>
                        <img src='images/pricingEquity.svg' className={styles.img} />
                        <h2 className={styles['mt-3']}>Free direct MF</h2>
                        <p className={styles['text-muted']}>All direct mutual fund investments are<br />
                            absolutely free — ₹ 0 commissions & DP <br /> charges.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
