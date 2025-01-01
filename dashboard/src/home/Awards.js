import React from 'react';
import styles from './Awards.module.css';

function Awards() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles['col-left']}>
                    <img src="images/largestBroker.svg" alt="Largest Broker" />
                </div>
                <div className={styles['col-right']}>
                    <h1 className={styles.heading}>Largest stock broker in India</h1>
                    <p className={styles.description}>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and
                        investing in:
                    </p>
                    <div className={styles['list-container']}>
                        <div className={styles['list-column']}>
                            <ul>
                                <li className={styles['list-item']}>
                                    <p>Futures and Options</p>
                                </li>
                                <li className={styles['list-item']}>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li className={styles['list-item']}>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles['list-column']}>
                            <ul>
                                <li className={styles['list-item']}>
                                    <p>Stocks and IPOs</p>
                                </li>
                                <li className={styles['list-item']}>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li className={styles['list-item']}>
                                    <p>Bonds and Govt. securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src="images/pressLogos.png"
                        alt="Press Logos"
                        className={styles['press-logos']}
                    />
                </div>
            </div>
        </div>
    );
}

export default Awards;

