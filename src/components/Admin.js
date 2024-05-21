// components/Admin.js

import React, { useState, useEffect } from 'react';
import '../css/style_admin.css';

function Admin() {
  const [category, setCategory] = useState({ type: '' });
  const [product, setProduct] = useState({
    name: '',
    category_id: '',
    image: '',
    description: '',
    seats: '',
    transmission: '',
    price: '',
    stock: '',
  });

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = () => {
    fetch('http://localhost/php/getCategories.php')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  };

  const fetchProducts = () => {
    fetch('http://localhost/php/getProducts.php')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategory(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/php/api_add_category.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(category),
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      setCategory({ type: '' });
      alert('Category added successfully');
      fetchCategories();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to add category: ' + error.message);
    });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/php/api_add_product.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      setProduct({ name: '', category_id: '', image: '', description: '', seats: '', transmission: '', price: '', stock: '' });
      alert('Product added successfully');
      fetchProducts();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to add product: ' + error.message);
    });
  };

  const handleDeleteCategory = (id) => {
    fetch('http://localhost/php/api_delete_category.php', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      alert('Category deleted successfully');
      fetchCategories();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to delete category: ' + error.message);
    });
  };

  const handleDeleteProduct = (id) => {
    fetch('http://localhost/php/api_delete_product.php', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      alert('Product deleted successfully');
      fetchProducts();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to delete product: ' + error.message);
    });
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <p>Gérez votre site à partir d'ici.</p>

      <div className="form-section">
        <h2>Ajoutez une catégorie</h2>
        <form onSubmit={handleCategorySubmit}>
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={category.type}
            onChange={handleCategoryChange}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>

      <div className="form-section">
        <h2>Ajoutez un produit</h2>
        <form onSubmit={handleProductSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={product.name}
            onChange={handleProductChange}
            required
          />
          <select
            name="category_id"
            value={product.category_id}
            onChange={handleProductChange}
            required
          >
            <option value="">Selectionner une catégorie</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.type}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="image"
            placeholder="Image Path"
            value={product.image}
            onChange={handleProductChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleProductChange}
            required
          />
          <input
            type="number"
            name="seats"
            placeholder="Seats"
            value={product.seats}
            onChange={handleProductChange}
            required
          />
          <input
            type="text"
            name="transmission"
            placeholder="Transmission"
            value={product.transmission}
            onChange={handleProductChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleProductChange}
            required
            step="0.01"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleProductChange}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>

      <div className="list-section">
        <h2>Categories</h2>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              {cat.type}
              <button onClick={() => handleDeleteCategory(cat.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="list-section">
        <h2>Produits</h2>
        <ul>
          {products.map((prod) => (
            <li key={prod.id}>
              {prod.name} - {prod.category_type}
              <button onClick={() => handleDeleteProduct(prod.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
