import React from "react";

const productFilter = () => {
  return (
    <div className="filter">
      <h4>Categories</h4>
      <div className="choose-categories">
        <button>All Products</button>
      </div>
      <h4>Brand</h4>
      <div className="brands">
        <select name="brands">
          <option value="all">All Products</option>
        </select>
      </div>
      <h4>Price</h4>
      <p>1500</p>
      <div className="price-slider">
        <input type="range" name="price" min="100" max="1000" />
      </div>
      <button className="btn btn-primary">Clear Filters</button>
    </div>
  );
};

export default productFilter;
