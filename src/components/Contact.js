import React from 'react';
import '../css/style_contact.css';
function Contact() {
  return <>
  <div className="container_inscription">
    <p>Contactez-nous</p>
    <form  action="#" method="post"> 

    <input type="text" id="name" name="name" required placeholder="Votre Nom"></input>
   
    <input type="email" id="email" name="email" required placeholder="exemple@gmail.com"></input>
   
    <textarea id="message" name="message" required></textarea>
    <div className="container_checkbox">
    <button className="inscription-button" type="submit" value="Submit"><p>Envoyer</p></button>
    </div>
      
    </form>


  </div>
  </>;
}

export default Contact;