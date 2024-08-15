import React from 'react';

const WelcomeCard = () => {
  return (
    <div style={styles.cardContainer}>
      <h2 style={styles.welcomeText}>Welcome</h2>
      <p style={styles.descriptionText}>To access account and manage orders</p>
      <button style={styles.loginButton}>LOGIN / SIGNUP</button>
    </div>
  );
};

const styles = {
  cardContainer: {
    padding: '20px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    margin: '0 auto',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
  },
  welcomeText: {
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  descriptionText: {
    color: '#555',
    marginBottom: '20px',
  },
  loginButton: {
    backgroundColor: '#FF3F6C',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default WelcomeCard;
