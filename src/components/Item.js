import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false); // State to track whether the item is in the cart

  const handleAddToCart = () => {
    // Toggle the isInCart state when the button is clicked
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

