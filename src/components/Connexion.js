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
      <h2>Get’s started.</h2>
      <div className="social-signin">
        <button className="google-signin">Sign in with Google</button>
        <button className="facebook-signin">Sign in with Facebook</button>
      </div>
      <div className="signin-or">or</div>
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
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>
        <button type="submit" className="signin-button">Sign In</button>
        <div className="signin-footer">
          <span>Don't have an account? <a href="/signup">Sign up</a></span>
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
