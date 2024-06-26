import React, { useState } from 'react';
import '../css/style_inscription.css';

function Inscription() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    const formData = new URLSearchParams();
    formData.append('username', name);
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('http://localhost/php/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      const result = await response.text();
      console.log(result);

      if (response.ok) {
        alert('Inscription réussie !');
      } else {
        alert('Erreur lors de l\'inscriptione');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'inscriptione');
    }
  };

  return (
    <div className="container_inscription">
      <p>Inscription</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          required
        />
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
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit" className="inscription-button"><p className="inscription">Inscription</p></button>
      </form>
    </div>
  );
}

export default Inscription;
