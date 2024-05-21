import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './css/style_sidebar.css';
import * as Images from './assets/images'; 
import Accueil from './components/Accueil';
import Acheter from './components/Acheter';
import Panier from './components/Panier';
import PageVierge from './components/Pagevierge';
import Contact from './components/Contact';
import APropos from './components/APropos';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import Admin from './components/Admin';
import Profil from './components/Profil';
import './css/transitions.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (isAdmin) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
  };

  return (
    <Router>
      <>
        <Nav isLoggedIn={isLoggedIn} isAdmin={isAdmin} onLogout={handleLogout} />
        <div className="container">
          <Sidebar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
          <div className="grid">
            <Routes>
              <Route path="/accueil" element={<AnimatedRoute component={<Accueil />} />} />
              <Route path="/acheter" element={<AnimatedRoute component={<Acheter />} />} />
              <Route path="/pagevierge" element={<AnimatedRoute component={<PageVierge />} />} />
              <Route path="/contact" element={<AnimatedRoute component={<Contact />} />} />
              <Route path="/inscription" element={<AnimatedRoute component={<Inscription />} />} />
              <Route path="/se_connecter" element={<AnimatedRoute component={<Connexion onLogin={handleLogin} />} />} />
              <Route path="/a-propos" element={<AnimatedRoute component={<APropos />} />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/profil" element={<AnimatedRoute component={<Profil />} />} />
              <Route path="/panier" element={<AnimatedRoute component={<Panier />} />} />
              <Route path="*" element={<Navigate to="/accueil" />} /> {/* Redirection par défaut */}
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

function Onglet({ NomImage, Text }) {
  const ImageComponent = Images[NomImage];

  if (!ImageComponent) {
    console.error(`No image component found for key: ${NomImage}`);
    return null;
  }

  return (
    <div className="onglet">
      <ImageComponent />
      <span>{Text}</span>
    </div>
  );
}

function Sidebar({ isLoggedIn, isAdmin }) {
  return (
    <aside>
      <div className="container_sidebar">
        <Link to="/accueil"><Onglet NomImage="DashboardIcon" Text="Accueil" /></Link>
        <Link to="/acheter"><Onglet NomImage="ShoppingCart" Text="Acheter" /></Link>
        <Link to="/a-propos"><Onglet NomImage="Assets" Text="A propos de nous" /></Link>
        <Link to="/contact"><Onglet NomImage="Messages" Text="Contact" /></Link>

        <div className="test">
          {isLoggedIn ? (
            <>
              <Link to="/profil"><Onglet NomImage="Assets" Text="Profil" /></Link>
              {isAdmin && <Link to="/admin"><Onglet NomImage="Assets" Text="Admin Panel" /></Link>}
            </>
          ) : (
            <>
              <Link to="/inscription"><Onglet NomImage="Assets" Text="S'inscrire" /></Link>
              <Link to="/se_connecter"><Onglet NomImage="Assets" Text="Connexion" /></Link>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}

function Nav({ isLoggedIn, isAdmin, onLogout }) {
  return (
    <nav className="Navbar">
      <div className="Navbarleft">
        <Images.Logo className="logo" />
        <p className="titre">Ademauto</p>
      </div>
      <div className="Navbarright">
        <div className="Navbarright_input">
          <Images.Loupe className="loupe" />
          <input placeholder='Search a car ..'></input>
        </div>
        <div className="bouton_navbar">
          <div className="Signconnec">
            {isLoggedIn ? (
              <>
                <button onClick={onLogout} >SignOut</button>
                <Link to="/panier" ><Images.ShoppingCart  className="shoppingcart" /></Link>
              </>
            ) : (
              <Link to="/se_connecter"><Images.Assets  className="shoppingcart" /></Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
