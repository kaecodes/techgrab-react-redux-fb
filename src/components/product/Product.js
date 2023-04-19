import "./Product.css";
import ProductFilter from "../../components/product/productFilter/ProductFilter";
import ProductList from "../../components/product/productList/ProductList";

const Product = () => {
  return (
    <section>
      <div className="container">
        <aside className="filter">
          <ProductFilter />
        </aside>
        <div className="content">
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default Product;
