import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../firebase/config";
import { toast } from "react-toastify";
import spinnerImg from "../../../assets/spinner.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const obj = {
        id: id,
        ...docSnap.data(),
      };
      setProduct(obj);
    } else {
      toast.error("Product Not Found");
    }
  };

  return (
    <section>
      <div className="details-container">
        <div className="product-details">
          <h2>Product Details</h2>
          <div>
            <Link to="/shop">&larr; Back to Products</Link>
          </div>
        </div>
        {product === null ? (
          <img src={spinnerImg} alt="Loading..." />
        ) : (
          <>
            <div className="product-details-container">
              <div className="img">
                <img src={product.imageURL} alt={product.name} />
              </div>
              <div className="content">
                <h3>{product.name}</h3>
                <p className="price">{`$${product.price}`}</p>
                <p>{product.desc}</p>
                <p>
                  <strong>SKU: </strong>
                  {product.id}
                </p>
                <p>
                  <strong>Brand: </strong>
                  {product.brand}
                </p>
                <div className="count">
                  <button className="remove">-</button>
                  <p>
                    <strong>1</strong>
                  </p>
                  <button className="add">+</button>
                </div>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
