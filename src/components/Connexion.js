import React, { useState } from 'react';
import '../css/style_connexion.css';

function SignIn({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('password', password);

    console.log('Form Data:', formData.toString()); // Log pour vérifier les données envoyées

    try {
      const response = await fetch('http://localhost/php/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        credentials: 'include' // Inclure les cookies avec la requête
      });

      const result = await response.json();
      console.log(result);

      if (result.status === 'success') {
        alert('Connexion réussie!');
        onLogin(email === 'admin@admin.com'); // Passer l'information de l'administrateur
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la connexion');
    }
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
    
        <button type="submit" className="signin-button"><p className="signin">Connexion</p></button>
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
