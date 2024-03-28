import React, { useState } from 'react';
import '../css/style_connexion.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de gestion de la soumission du formulaire
  };

  return (
    <div className="signin-container">
      <p>Connexion</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          required
        />
        <div className="signin-remember">
          <label>
            <input type="checkbox" name="remember" /> <span>Remember me</span>
            <a href="/forgot-password"> <span> | Mot de passe oublié ?</span></a>
          </label>
        </div>
        <button type="submit" className="signin-button"><p>Connexion</p></button>
        <div className="signin-footer">
          <span>
            Don't have an account ? 
          </span>
          <br></br>
          <a href="/inscription"><span>Inscription</span></a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
