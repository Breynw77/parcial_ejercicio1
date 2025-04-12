import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.scss';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button className="remove-button" onClick={() => removeFromCart(index)}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="total">Total: ${getTotal()}</div>
        </>
      )}
    </div>
  );
};

export default Cart;



