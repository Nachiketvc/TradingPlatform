import React from 'react';
import styles from './Stats.module.css'; // Import the CSS module

function Stats() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles['col-left']}>
                    <h2 style={{fontWeight: 'bold'}}>Trust with confidence</h2>
                    <h3 className={styles.subheading}>Customer-first always</h3>
                    <p className={styles.description}>
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15%
                        of daily retail exchange volumes in India.
                    </p>

                    <h3 className={styles.subheading}>No spam or gimmicks</h3>
                    <p className={styles.description}>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace,
                        the way you like.
                    </p>

                    <h3 className={styles.subheading}>The Zerodha universe</h3>
                    <p className={styles.description}>
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15%
                        of daily retail exchange volumes in India.
                    </p>

                    <h3 className={styles.subheading}>Do better with money</h3>
                    <p className={styles.description}>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services
                        specific to your needs.
                    </p>
                </div>

                <div className={styles['col-right']}>
                    <img
                        src="images/ecosystem.png"
                        alt="Ecosystem"
                        className={styles.image}
                    />

                    <div className={styles.links}>
                        <a href="" className={styles.link}>
                            Explore our product <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href="" className={styles.link}>
                            Try kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;

