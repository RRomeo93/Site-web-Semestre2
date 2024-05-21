import React, { useState } from 'react';
import '../css/style_contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    job: '',
    birthDate: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/php/sendmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        alert('Email envoyé avec succès !');
      } else {
        alert('Erreur lors de l\'envoi de l\'email : ' + data.message);
      }
    })
    .catch(error => {
      console.error('Erreur :', error);
      alert('Erreur lors de l\'envoi de l\'email.');
    });
  };

  return (
    <div className="container_contact">
      <p>Contactez-nous</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          placeholder="Votre Prénom"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          placeholder="Votre Nom"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="exemple@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        <div>
          <label>Genre :</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Homme
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Femme
          </label>
        </div>
        <select
          name="job"
          required
          value={formData.job}
          onChange={handleChange}
        >
          <option value="">Sélectionnez votre métier</option>
          <option value="Developer">Développeur</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
          <option value="Other">Autre</option>
        </select>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          required
          value={formData.birthDate}
          onChange={handleChange}
        />
        <input
          type="text"
          id="subject"
          name="subject"
          required
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          id="message"
          name="message"
          required
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="container_checkbox">
          <button className="contact-button" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
