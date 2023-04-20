import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../../../redux/features/productSlice";
import { FILTER_BY_CATEGORY } from "../../../redux/features/filterSlice";
import "../Product.css";

const ProductFilter = () => {
  const [category, setCategory] = useState("All Products");
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const allCategories = [
    "All Products",
    ...new Set(products.map((product) => product.category)),
  ];

  // console.log(allCategories);

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  return (
    <div className="filter">
      <h3>Categories</h3>
      <div className="choose-categories">
        {allCategories.map((cat, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${category}` === cat ? "active-cat" : null}
              onClick={() => filterProducts(cat)}
            >
              &#8250; {cat}
            </button>
          );
        })}
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

export default ProductFilter;
