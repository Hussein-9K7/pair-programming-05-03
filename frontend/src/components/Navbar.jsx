/* import { Link } from "react-router-dom";

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

export default Navbar; */
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="navbar flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">My App</h1>

      <div className="auth-links flex items-center gap-6 text-lg">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/add-product" className="hover:text-gray-400">Add Product</Link>
        <Link to="/edit-product/:id" className="hover:text-gray-400">Edit Product</Link>

        {user ? (
          <>
            <span className="text-white">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-800 text-white rounded-md px-4 py-2"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="hover:text-gray-400">Log In</NavLink>
            <NavLink to="/signup" className="hover:text-gray-400">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
