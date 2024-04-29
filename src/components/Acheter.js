import React from 'react';
import '../css/style_acheter.css';



import * as Images from '../assets/images';
function Cards({ NomImage, Text, id,prix }) {

  const ImageComponent = Images[NomImage];
  const ImageComponentPlace = Images["Place"];
  const ImageComponentBoite = Images["Boite"];

  return (
    <div className="card" data-card-id={id}>
      <div className="container_titre">
        <p className="titre_cards">{Text}</p>
        <span className="coupe">Coupe</span>
      </div>
      <br />
      <br/>
      <div className="container_image">
        <ImageComponent className="svg" />
      </div>
      <div className="container_prix">
      <ImageComponentPlace />
      <span className="reset">4</span>
      <ImageComponentBoite className="gauche" />
      <span className="resete">Manuelle</span>

      <p className="prix">{prix}€</p>
      <span className="day">/d</span>
      </div>
    </div>
  );
}

function Acheter() {
  return <>
  <p className="titler">Booking</p>
  <div className="dropdown">
        <select>
            <option value="New"><span>New</span></option>
            <option value="Ocassion"><span>Ocassion</span></option>
            <option value="option3"><span>Option 1</span></option>
        </select>
   
    </div>

    <div className="container_grid">
    <Cards NomImage="AudiA3" Text="Porsche 718 Cayman S" id="1" prix="400"  />
    <Cards NomImage="AudiA3" Text="Porsche 718 Cayman S" id="2" prix="350"/>
    <Cards NomImage="AudiA3" Text="Porsche 718 Cayman S" id="3" prix="450"/>
    <Cards NomImage="AudiA3" Text="Porsche 718 Cayman S" id="4" prix="400"/>
    </div>


  
  </>;
}

export default Acheter;