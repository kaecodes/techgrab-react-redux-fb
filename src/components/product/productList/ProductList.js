import { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import Search from "../../search/Search";
import "../Product.css";
import ProductItem from "../productItem/ProductItem";

const ProductList = ({ products }) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <div className="product-list">
      <div className="top">
        <div className="icons">
          <BsFillGridFill size={22} onClick={() => setGrid(true)} />
          <FaListAlt size={24} onClick={() => setGrid(false)} />
          <p>
            <strong>10</strong> Products Found
          </p>
        </div>
        {/* Search Icon */}
        <div>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        {/* Sort Products */}
        <div className="sort">
          <label>Sort by:</label>
          <select>
            <option value="latest">Latest</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>
      </div>
      <div className={grid ? "grid-view" : "list-view"}>
        {products.length === 0 ? (
          <p>No Product Found</p>
        ) : (
          <>
            {products.map((product) => {
              return (
                <div key={product.id} className="single-product">
                  <ProductItem {...product} grid={grid} product={product} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
