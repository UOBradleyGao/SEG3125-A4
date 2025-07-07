import React, { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Red Hoodie", size: "M", color: "Red", category: "Hoodies" },
  { id: 2, name: "Blue Jeans", size: "L", color: "Blue", category: "Pants" },
  { id: 3, name: "Green T-Shirt", size: "S", color: "Green", category: "Shirts" },
  { id: 4, name: "Black Jacket", size: "XL", color: "Black", category: "Outerwear" },
  { id: 5, name: "Yellow Sweater", size: "M", color: "Yellow", category: "Sweaters" },
  { id: 6, name: "White Tank Top", size: "S", color: "White", category: "Shirts" },
  { id: 7, name: "Gray Sweatpants", size: "L", color: "Gray", category: "Pants" },
  { id: 8, name: "Navy Blazer", size: "M", color: "Blue", category: "Outerwear" },
  { id: 9, name: "Beige Cardigan", size: "XL", color: "Beige", category: "Sweaters" },
  { id: 10, name: "Pink Crop Top", size: "S", color: "Pink", category: "Shirts" },
  { id: 11, name: "Brown Leather Jacket", size: "L", color: "Brown", category: "Outerwear" },
  { id: 12, name: "Olive Chinos", size: "M", color: "Green", category: "Pants" }
];


export default function ProductPage() {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ size: "", color: "", category: "" });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProducts = sampleProducts.filter((p) =>
    (!filters.size || p.size === filters.size) &&
    (!filters.color || p.color === filters.color) &&
    (!filters.category || p.category === filters.category)
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <h2>🛍️ Shop Our Collection</h2>
      <p>Use filters below to find what you're looking for.</p>

      <div className="facets">
        <select name="size" onChange={handleFilterChange}>
          <option value="">All Sizes</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">X-Large</option>
        </select>

        <select name="color" onChange={handleFilterChange}>
          <option value="">All Colors</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Black">Black</option>
          <option value="Yellow">Yellow</option>
        </select>

        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="Hoodies">Hoodies</option>
          <option value="Pants">Pants</option>
          <option value="Shirts">Shirts</option>
          <option value="Outerwear">Outerwear</option>
          <option value="Sweaters">Sweaters</option>
        </select>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Size: {product.size}</p>
            <p>Color: {product.color}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
