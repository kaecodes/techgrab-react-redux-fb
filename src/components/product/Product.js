import "./Product.css";
import ProductFilter from "../../components/product/productFilter/ProductFilter";
import ProductList from "../../components/product/productList/ProductList";
import useFetchCollection from "../../customHooks/useFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  STORE_PRODUCTS,
  selectProducts,
} from "../../redux/features/productSlice";
import spinner from "../../assets/spinner.jpg";

const Product = () => {
  const { data, isLoading } = useFetchCollection("products");
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
  }, [dispatch, data]);
  return (
    <section>
      <div className="container">
        <aside className="filter">{isLoading ? null : <ProductFilter />}</aside>
        <div className="content">
          {isLoading ? (
            <img
              src={spinner}
              alt="Loading..."
              style={{ width: "150px" }}
              className="spinner"
            />
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
