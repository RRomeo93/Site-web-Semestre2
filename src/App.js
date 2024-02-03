
// import mon fichier style_navbar.css
import './css/style_sidebar.css';
import * as Images from './assets/images';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Acheter from './components/Acheter';
import Vendre from './components/Vendre';
import PageVierge from './components/Pagevierge';
import Contact from './components/Contact';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/transitions.css';

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
              <Route path="/dashboard" element={<AnimatedRoute component={<Dashboard />} />} />
              <Route path="/acheter" element={<AnimatedRoute component={<Acheter />} />} />
              <Route path="/vendre" element={<AnimatedRoute component={<Vendre />} />} />
              <Route path="/pagevierge" element={<AnimatedRoute component={<PageVierge />} />} />
              <Route path="/contact" element={<AnimatedRoute component={<Contact />} />} />
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
      <div class="container_sidebar">
      <Link to="/dashboard"><Onglet NomImage="DashboardIcon" Text="Dashboard" /></Link>
        <Link to="/acheter"><Onglet NomImage="ShoppingCart" Text="Acheter" /></Link>
        <Link to="/vendre"><Onglet NomImage="ShoppingBag" Text="Vendre" /></Link>
        <Link to="/pagevierge"><Onglet NomImage="Assets" Text="Page Vierge" /></Link>
        <Link to="/contact"><Onglet NomImage="Messages" Text="Contact" /></Link>

      </div>
    </aside>
  </>
}

function Nav() {
  return <>
    <nav class="Navbar">
      <div class="Navbarleft">
        <Images.Logo class="logo" />
        <p>Adem.</p>
      </div>
      <div class="Navbarright">testright</div>
    </nav>
  </>
}
export default App;
