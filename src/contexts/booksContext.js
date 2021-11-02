import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  console.log("cartItems", cartItems);
  console.log("books: ", books);

  useEffect(() => {
    axios("https://api.itbook.store/1.0/search/react/2").then((response) =>
      setBooks(response.data.books)
    );
  }, []);

  const addItem = (item) => {
    const newItem = cartItems.find((element) => {
      return item.isbn13 === element.isbn13;
    });

    const nextItem = books.find((element) => {
      return element.isbn13 === item.isbn13;
    });

    if (newItem) {
      alert("Item already selected.");
    } else {
      return setCartItems([...cartItems, nextItem]);
    }
  };

  const removeItem = (id) => {
    const filteredItems = cartItems.filter((item) => item.isbn13 !== id);

    return setCartItems(filteredItems);
  };

  const value = {
    books,
    addItem,
    removeItem,
    cartItems,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
