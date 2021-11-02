import React from "react";
import CartItem from "../components/CartItem";
import { BooksContext } from "../contexts/booksContext";
import { useContext } from "react";

const ShoppingCart = () => {
  const { cartItems } = useContext(BooksContext);

  const cartTotal = cartItems
    .reduce((prev, curr) => {
      const nextPrice = curr.price.split("$").find((el) => {
        return el;
      });
      return parseFloat(prev) + parseFloat(nextPrice);
    }, 0)
    .toFixed(2);

  return (
    <div className="shopping-cart">
      {cartItems.map((item) => {
        return <CartItem key={item.isbn13} {...item} />;
      })}
      <div className="shopping-cart__checkout">
        <p>Total: $ {cartTotal}</p>
        <button className="shopping-cart__checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
