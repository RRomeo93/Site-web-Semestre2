import React, { useEffect, useState } from 'react';
import '../css/style_acheter.css';
import * as Images from '../assets/images';


function Cards({ NomImage, Text, id, prix, seats, transmission, onAddProduct }) {
  const ImageComponent = Images[NomImage];
  const ImageComponentPlace = Images["Place"];
  const ImageComponentBoite = Images["Boite"];

  return (
    <div className="card" data-card-id={id}>
      <div className="container_titre">
        <p className="titre_cards">{Text}</p>
        <span className="coupe">Coupe</span>
      </div>
      <br />
      <br />
      <div className="container_image">
        <ImageComponent className="svg" />
      </div>
      <div className="container_prix">
        <ImageComponentPlace />
        <span className="reset">{seats}</span>
        <ImageComponentBoite className="gauche" />
        <span className="resete">{transmission}</span>
        <p className="prix">{prix}€</p>
        <span className="day">/d</span>
      </div>
      <button className="AddPanier" onClick={() => onAddProduct({ id, Text, prix, image: NomImage })}>
        Ajouter au panier
      </button>
    </div>
  );
}


function Acheter({ panier, addProduct }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('http://localhost/php/getProducts.php')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    fetch('http://localhost/php/getCategories.php')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        setSelectedCategory(data.length > 0 ? data[0].type : '');
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddProduct = (product) => {
    console.log('Adding product to cart:', product);

    fetch('http://localhost/php/addToCart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: product.id,
        quantity: 1,
      }),
      credentials: 'include'
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      console.log('Response from server:', data);
      if (data.status === 'success') {
        addProduct(product);
        alert('Produit ajouté au panier avec succès.');
      } else {
        alert('Produit ajouté au panier avec succès.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Produit ajouté au panier avec succès.');
    });
  };

  const filteredProducts = products.filter(product => product.category_type === selectedCategory);

  return (
    <>
      <p className="titler">Booking</p>
      <div className="dropdown">
        <select value={selectedCategory} onChange={handleCategoryChange} className="selectAdem">
          {categories.map(category => (
            <option key={category.id} value={category.type}>
              {category.type}
            </option>
          ))}
        </select>
      </div>
      <div className="container_grid">
        {filteredProducts.map(product => (
          <Cards
            key={product.id}
            NomImage="AudiA3"
            Text={product.name}
            id={product.id}
            prix={product.price}
            seats={product.seats}
            transmission={product.transmission}
            onAddProduct={handleAddProduct}
          />
        ))}
      </div>
   
    </>
  );
}

export default Acheter;
