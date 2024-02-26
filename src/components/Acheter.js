import React from 'react';
import '../css/style_acheter.css';
import * as Images from '../assets/images';
function Cards({ NomImage, Text, id,prix }) {

  const ImageComponent = Images[NomImage];
  const ImageComponentPlace = Images["Place"];
  const ImageComponentBoite = Images["Boite"];

  return (
    <div class="card" data-card-id={id}>
      <div class="container_titre">
        <p class="titre_cards">{Text}</p>
        <span class="coupe">Coupe</span>
      </div>
      <br />
      <br/>
      <div class="container_image">
        <ImageComponent class="svg" />
      </div>
      <div class="container_prix">
      <ImageComponentPlace />
      <span class="reset">4</span>
      <ImageComponentBoite class="gauche" />
      <span class="resete">Manuelle</span>

      <p class="prix">{prix}€</p>
      <span class="day">/d</span>
      </div>
    </div>
  );
}

function Acheter() {
  return <>
  <p class="title">Booking</p>
  <div class="dropdown">
        <select>
            <option value="New"><span>New</span></option>
            <option value="Ocassion"><span>Ocassion</span></option>
            <option value="option3"><span>Option 1</span></option>
        </select>
        <select>
            <option value="New"><span>New</span></option>
            <option value="Ocassion"><span>Ocassion</span></option>
            <option value="option3"><span>Option 1</span></option>
        </select>
    </div>

    <div class="container_grid">
    <Cards NomImage="AudiA3" Text="Porsche 718 Cayman S" id="1" prix="400" />
    <Cards NomImage="AudiA3" Text="Porsche 718 Cayman S" id="2" prix="350"/>
    <Cards NomImage="AudiA3" Text="Porsche 718 Cayman S" id="3" prix="450"/>
    <Cards NomImage="AudiA3" Text="Porsche 718 Cayman S" id="4" prix="400"/>
    </div>


  
  </>;
}

export default Acheter;