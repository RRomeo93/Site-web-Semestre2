import React, { useState } from 'react';

function Admin() {
  const [car, setCar] = useState({
    name: '',
    marque: '',
    year: '', // Ceci pourrait être un nombre, donc assurez-vous que cela soit cohérent avec le type de données dans votre base de données
    gear: '',
    price: '', // Assurez-vous que le prix soit un nombre dans votre base de données
    fuel: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost/projet_web/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Reset form
      setCar({ name: '', marque: '', year: '', gear: '', price: '', fuel: '' });
      alert('Car added successfully');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to add car');
    });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome to the Admin Panel. Manage your site from here.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={car.name}
          onChange={handleChange}
          required // Cela rend le champ obligatoire
        />
        <input
          type="text"
          name="marque"
          placeholder="marque"
          value={car.marque}
          onChange={handleChange}
          required // Cela rend le champ obligatoire
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={car.year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gear"
          placeholder="Gear"
          value={car.gear}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={car.price}
          onChange={handleChange}
          required
          step="0.01" // Autorise les valeurs décimales pour le prix
        />
        <input
          type="text"
          name="fuel"
          placeholder="Fuel"
          value={car.fuel}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;