
// import mon fichier style_navbar.css

/* Pour mettre sur le github: 
>>>>>>> e9ed09653d925b13a922d6dfab4e7f18873efd91
>>>>>>> connexions
git add .
git commit -m "Commentaire de votre choix"
git push origin (branche */

/* git checkoutgit  master ( pour aller sur la branche)
git pull origin main (pour récupérer les modifications du github en local)
git merge (branche) (pour fusionner la branche avec la master dans ton pc)
git push origin master (pour mettre sur le github) ( depot distant) */


// git checkout -b branche// pour creer
// git push -u origin test


import './css/style_sidebar.css';
import * as Images from './assets/images';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Acheter from './components/Acheter';
import Vendre from './components/Vendre';
import PageVierge from './components/Pagevierge';
import Contact from './components/Contact';
import APropos from './components/APropos';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/transitions.css';
import Admin from './components/Admin';


function AnimatedRoute({ component }) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={window.location.pathname}
        timeout={500}
        classNames="fade"
      >
        {component}
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {

  return <>
    <Router>
      <>
        <Nav />
        <div className="container">
          <Sidebar />
          <div className="grid">
            <Routes>
              <Route path="/accueil" element={<AnimatedRoute component={<Accueil />} />} />
              <Route path="/acheter" element={<AnimatedRoute component={<Acheter />} />} />
              <Route path="/vendre" element={<AnimatedRoute component={<Vendre />} />} />
              <Route path="/pagevierge" element={<AnimatedRoute component={<PageVierge />} />} />
              <Route path="/contact" element={<AnimatedRoute component={<Contact />} />} />
              <Route path="/inscription" element={<AnimatedRoute component={<Inscription />} />} />
              <Route path="/se_connecter" element={<AnimatedRoute component={<Connexion />} />} />
              <Route path="/a-propos" element={<AnimatedRoute component={<APropos />} />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>

  </>


}
function Onglet({ NomImage, Text }) {

  const ImageComponent = Images[NomImage];

  return (
    <div className="onglet">
      <ImageComponent />
      <span>{Text}</span>
    </div>
  );
}
function Sidebar() {
  return <>
    <aside>
      <div className="container_sidebar">
        <Link to="/accueil"><Onglet NomImage="DashboardIcon" Text="Accueil" /></Link>
        <Link to="/acheter"><Onglet NomImage="ShoppingCart" Text="Acheter" /></Link>
        <Link to="/vendre"><Onglet NomImage="ShoppingBag" Text="Vendre" /></Link>
        <Link to="/a-propos"><Onglet NomImage="Assets" Text="A propos de nous" /></Link>
        <Link to="/contact"><Onglet NomImage="Messages" Text="Contact" /></Link>

        <div className="test">
          <Link to="/inscription"><Onglet NomImage="Assets" Text="S'inscrire" /></Link>
          <Link to="/se_connecter"><Onglet NomImage="Assets" Text="Connexion" /></Link>
        </div>


      </div>
    </aside>
  </>
}

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <>
    <nav className="Navbar">
      <div className="Navbarleft">
        <Images.Logo className="logo" />
        <p>Adem.</p>
      </div>
      <div className="Navbarright">
        <div className="Navbarright_input">
          <Images.Loupe className="loupe" />
          <input placeholder='Search a car ..'></input>
        </div>
        <div className="bouton_navbar">
      
          <div className="Signconnec">
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Sign Out</button>
            ) : (
              <Link to="/inscription">Sign In</Link>
            )}
          </div>
        </div>
      </div>

    </nav>
  </>
}
export default App;
