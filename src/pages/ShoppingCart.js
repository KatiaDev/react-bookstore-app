import React from "react";
import CartItem from "../components/CartItem";

const ShoppingCart = ({ books }) => {
  return (
    <div className="shopping-cart">
      {books.map((item) => (
        <CartItem key={item.isbn13} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: $</p>
        <button className="shopping-cart__checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
