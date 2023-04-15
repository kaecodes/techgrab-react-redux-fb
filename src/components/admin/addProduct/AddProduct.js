import { useState } from "react";
import "./AddProduct.css";
import Card from "../../card/Card";
import { db, storage } from "../../../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";

const categories = [
  { id: 1, name: "Laptops" },
  { id: 2, name: "Smartphones" },
  { id: 3, name: "Smartwatches" },
  { id: 4, name: "Cameras" },
  { id: 5, name: "Bluetooth Speakers" },
  { id: 6, name: "Headphones" },
  { id: 7, name: "Gaming" },
  { id: 8, name: "Tablets" },
];

const initialState = {
  name: "",
  imageURL: "",
  price: 0,
  category: "",
  brand: "",
  desc: "",
};

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({ ...initialState });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);

    const storageRef = ref(storage, `techgrab/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
          toast.success("Image uploaded successfully!");
        });
      }
    );
  };

  const addProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const docRef = addDoc(collection(db, "product"), {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        category: product.category,
        brand: product.brand,
        desc: product.desc,
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setUploadProgress(0);
      setProduct({ ...initialState });
      toast.success("Product uploaded successfully!");
      navigate("/admin/all-products");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="product">
        <h1>Add New Product</h1>
        <Card className="card">
          <form onSubmit={addProduct}>
            <div className="product-name">
              <label>Product Name:</label>
              <input
                type="text"
                placeholder="Product Name"
                required
                name="name"
                value={product.name}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="product-image">
              <label>Product Image:</label>
              <div className="group">
                {uploadProgress === 0 ? null : (
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${uploadProgress}%` }}
                    >
                      {uploadProgress < 100
                        ? `Uploading ${uploadProgress}`
                        : `Upload Completed ${uploadProgress}%`}
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  placeholder="Product Image"
                  name="image"
                  value={""}
                  onChange={(e) => handleImageChange(e)}
                />
                {product.imageURL === "" ? null : (
                  <input
                    type="text"
                    required
                    name="imageURL"
                    value={product.imageURL}
                    placeholder="Image URL"
                    disabled
                  />
                )}
              </div>
            </div>
            <div className="product-price">
              <label>Product Price:</label>
              <input
                type="number"
                placeholder="Product Price"
                required
                name="price"
                value={product.price}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="product-cat">
              <label>Product Category:</label>
              <select
                className="categories"
                name="category"
                required
                value={product.category}
                onChange={(e) => handleInputChange(e)}
              >
                <option value="" disabled>
                  -- Choose Product Category --
                </option>
                {categories.map((cat) => {
                  return (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="product-brand">
              <label>Product Brand:</label>
              <input
                type="text"
                placeholder="Product Brand"
                required
                name="brand"
                value={product.brand}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="product-desc">
              <label>Product Description:</label>
              <textarea
                name="desc"
                required
                value={product.desc}
                cols="30"
                rows="10"
                onChange={(e) => handleInputChange(e)}
              ></textarea>
            </div>

            <button className="btn btn-primary">Save Product</button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default AddProduct;
