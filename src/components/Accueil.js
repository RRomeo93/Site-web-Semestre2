import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/carousel-1.jpg';
import '../css/style_dashboard.css';

function Accueil() {
  let navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const goToAbout = () => {
    navigate('/a-propos');
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
