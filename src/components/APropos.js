// components/APropos.js

import React from 'react';
import '../css/style_apropos.css';
import person1 from '../assets/person1.jpg'; // Assurez-vous d'avoir ces images dans votre dossier
import person2 from '../assets/person1.jpg';
import person3 from '../assets/person1.jpg';
import luxuryCar from '../assets/Voiture_a_propos.avif'; // Assurez-vous d'avoir cette image dans votre dossier

function APropos() {
  return (
    <div className="apropos-container">
      <h1>À propos de nous</h1>
      <div className="apropos-content">
        <div className="apropos-team">
          <div className="team-member">
            <img src={person1} alt="Adem YIGIT" />
            <p>Adem YIGIT</p>
          </div>
          <div className="team-member">
            <img src={person2} alt="Samuel SILVA" />
            <p>Samuel SILVA</p>
          </div>
          <div className="team-member">
            <img src={person3} alt="Enzo EDMOND" />
            <p>Enzo EDMOND</p>
          </div>
        </div>
        <div className="apropos-text">
          <p>Bienvenue chez Ademauto, votre destination ultime pour la location et la vente de voitures de luxe. Fondée en 2024, notre entreprise s'est engagée à offrir des véhicules haut de gamme et un service exceptionnel à nos clients.</p>
          <p>Notre histoire a commencé avec une passion pour les voitures de luxe et un désir de partager cette passion avec les autres. Depuis nos humbles débuts, nous avons grandi pour devenir un leader dans l'industrie, grâce à notre engagement envers l'excellence et la satisfaction client.</p>
          <p>Nos valeurs fondamentales sont l'intégrité, l'innovation et la qualité. Nous croyons que chaque client mérite une expérience unique et personnalisée, et nous nous efforçons de dépasser leurs attentes à chaque interaction.</p>
          <p>Merci de nous choisir comme votre partenaire de confiance pour vos besoins en matière de voitures de luxe. Nous sommes impatients de vous servir et de vous offrir une expérience inoubliable.</p>
        </div>
      </div>
      <div className="luxury-car-image">
        <img src={luxuryCar} alt="Voiture de luxe" />
      </div>
    </div>
  );
}

export default APropos;
