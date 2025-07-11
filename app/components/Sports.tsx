import React from 'react';
import { FaFootballBall, FaBasketballBall } from 'react-icons/fa';
import { GiTennisBall } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className="blur-bkg">
    <div style={styles.banner}>
      <div style={styles.icons}>
        <FaFootballBall style={styles.icon} />
        <FaBasketballBall style={styles.icon} />
        <GiTennisBall style={styles.icon} />
      <div style={styles.text}>Et bien plus encore</div>
      </div>
    </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  banner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // fond semi-transparent
    borderRadius: '15px',
    padding: '100px 50px',
    height: '100px',
    backdropFilter: 'blur(10px)', // applique un flou derrière
    border: '1px solid #00CC66', // légère bordure blanche semi-transparente
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // ombre subtile
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  icon: {
    fontSize: '70px',
    margin: '0 15px',
    color: '#fff', // icônes blanches
  },
  text: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Banner;
