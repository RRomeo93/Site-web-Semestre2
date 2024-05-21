import React, { useEffect, useState } from 'react';
import '../css/style_panier.css';
import * as Images from '../assets/images'; // Importez toutes les images dans un objet

function Panier() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost/php/getCart.php', {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setCartItems(data.cartItems);
          calculateTotal(data.cartItems);
        } else {
          console.error('Error fetching cart items:', data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleRemoveProduct = (cartId) => {
    fetch('http://localhost/php/removeFromCart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart_id: cartId,
      }),
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        setCartItems(prevItems => {
          const updatedCartItems = prevItems.filter(item => item.cart_id !== cartId);
          calculateTotal(updatedCartItems);
          return updatedCartItems;
        });
        alert('Produit supprimé du panier avec succès.');
      } else {
        console.error('Error:', data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const calculateTotal = (items) => {
    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal(cartItems);
  }, [cartItems]);

  return (
    <div className="panier-container">
      <h2>Panier</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((product) => {
            const ImageComponent = Images[product.image]; // Utilisez le nom de l'image dynamique
            return (
              <div key={product.cart_id} className="panier-item">
                {ImageComponent && <img src={ImageComponent} className="thumbnail" alt={product.name} />}
                <p className="product-name">{product.name}</p>
                <p className="product-details">{product.quantity} x {product.price}€</p>
                <button className="remove-button" onClick={() => handleRemoveProduct(product.cart_id)}>
                  Supprimer du panier
                </button>
              </div>
            );
          })}
          <div className="total">
            <p>Total à payer : {total}€</p>
            <button className="pay-button" onClick={() => alert('Paiement non implémenté')}>
              Payer
            </button>
          </div>
        </>
      ) : (
        <p>Votre panier est vide</p>
      )}
    </div>
  );
}

export default Panier;
