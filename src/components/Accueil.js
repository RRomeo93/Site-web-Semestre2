import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import backgroundImage from '../assets/im_fond.jpg';
import '../css/style_dashboard.css';

function Accueil() {
  let navigate = useNavigate(); // Use useNavigate for redirection

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 10%'
  };

  // Function to handle the button click
  const goToAbout = () => {
    navigate('/about'); // Redirects to the /about page
  };

  return (
    <div style={backgroundStyle} className="home-container">
      <div className="intro-text">
        <h1>Bienvenue chez Luxury Cars</h1>
        <p>Découvrez notre collection exclusive de voitures de luxe.</p>
        <button onClick={goToAbout}>À propos de nous</button>
      </div>
    </div>
  );
}

export default Accueil;
