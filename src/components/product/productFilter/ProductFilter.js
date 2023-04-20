import React from "react";

const productFilter = () => {
  return (
    <div className="filter">
      <h3>Categories</h3>
      <div className="choose-categories">
        <button>All Products</button>
      </div>
      <h3>Brand</h3>
      <div className="brands">
        <select name="brands">
          <option value="all">All Products</option>
        </select>
      </div>
      <h3>Price</h3>
      <p>1500</p>
      <div className="price-slider">
        <input type="range" name="price" min="100" max="1000" />
      </div>
      <button className="btn btn-primary clear">Clear Filters</button>
    </div>
  );
};

export default productFilter;
