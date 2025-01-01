import React from "react";
import styles from './Pricing.module.css'; // Import the CSS module

function Pricing() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles["col-left"]}>
          <h1 className={`${styles.heading} mb-3`}>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className={styles.link}>
            See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className={styles["col-right"]}>
          <div className={styles["pricing-cards"]}>
            <div className={styles.card}>
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className={styles.card}>
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
