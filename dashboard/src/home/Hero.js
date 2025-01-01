// import React from 'react';
// import styles from './Hero.module.css';

// function Hero() {
//     return (
//         <div className={styles.container}>
//             <div className={styles.row}>
//                 <img
//                     src="images/homeHero.png"
//                     alt="Hero Image"
//                     className={styles['hero-image']
//                     }
//                 />
//                 <h1 className={styles.heading}>Invest in everything</h1>
//                 <p className={styles.description}>
//                     Online platforms to invest in stocks, derivatives, mutual funds, and more
//                 </p>
//                 <button className={styles['signup-button'] + ' btn btn-primary'}>
//                     Signup now
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Hero;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

function Hero() {
  const navigate = useNavigate(); // Hook for navigation

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the Signup page
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img
          src="images/homeHero.png"
          alt="Hero Image"
          className={styles['hero-image']}
        />
        <h1 className={styles.heading}>Invest in everything</h1>
        <p className={styles.description}>
          Online platforms to invest in stocks, derivatives, mutual funds, and more
        </p>
        <button
          onClick={handleSignupClick}
          className={styles['signup-button'] + ' btn btn-primary'}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
