import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/admin/navbar/Navbar";
import Home from "../../components/admin/home/Home";
import ViewProducts from "../../components/admin/viewProducts/ViewProducts";
import AddProduct from "../../components/admin/addProduct/AddProduct";
import Orders from "../../components/admin/orders/Orders";
import "./Admin.css"; 

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="all-products" element={<ViewProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
