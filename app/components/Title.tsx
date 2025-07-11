import React from 'react';

const Matchup = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <span style={styles.match}>MATCH&apos;</span>
        <span style={styles.up}>UP</span>
      </div>
      <div style={styles.subtitle}>Bientôt disponible</div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85vh',
    backgroundColor: '#000', // fond noir
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  match: {
    color: '#fff', // texte blanc
    fontSize: '48px',
    fontWeight: 'bold',
  },
  up: {
    color: '#00CC66', // texte vert
    fontSize: '48px',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff', // texte blanc
    fontSize: '20px', // plus petit texte
    marginTop: '10px', // espacement entre les deux textes
  },
};

export default Matchup;
