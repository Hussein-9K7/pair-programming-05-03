import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Product Search</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products/add-product">Add Product</Link>
        <Link to="/products/edit-product">Edit Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;
