import React from 'react';
import styles from './Education.module.css'; // Import the CSS module

function Education() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles['col-left']}>
                    <img src='images/education.svg' alt="Education" className={styles.image} />
                </div>
                <div className={styles['col-right']}>
                    <h2 className={`${styles.heading} fs-2`}>Free and open market education</h2>
                    <p className={styles.description}>
                        Varsity, the largest stock market education book in the world
                        <br />
                        covering everything from the basics to advanced training.
                    </p>
                    <a href="" className={styles.link}>
                        Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className={`${styles.description} mt-5`}>
                        Trading Q&A, the most active trading and investment community in
                        <br />
                        India for all your market-related queries.
                    </p>
                    <a href="" className={styles.link}>
                        Trading Q&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
