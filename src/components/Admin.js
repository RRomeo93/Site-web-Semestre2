import React, { useState } from 'react';

function Admin() {
  // State to keep track of form inputs
  const [car, setCar] = useState({
    name: '',
    year: '',
    gear: '',
    price: '',
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

    fetch('http://localhost:3001/api/cars', {
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
      setCar({ name: '', year: '', gear: '', price: '', fuel: '' });
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
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={car.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gear"
          placeholder="Gear"
          value={car.gear}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={car.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fuel"
          placeholder="Fuel"
          value={car.fuel}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;
