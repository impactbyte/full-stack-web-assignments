import React, { useState } from "react";

function App() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /// EDIT HERE
  };

  return (
    <div style={{ padding: "2em 5em" }}>
      <h1>Shopping Cart</h1>
      <form onSubmit={handleSubmit}>
        <label>Product: </label>
        <input type="text" />
        <br />
        <label>Price: </label>
        <input type="number" min="0" />
        <br />
        <button type="submit">submit</button>
      </form>

      <ul id="cart-list">
        <li id="total-harga">
          total harga: {cart.reduce((acc, cur) => acc + cur.price, 0)}
        </li>
      </ul>
    </div>
  );
}

export default App;
