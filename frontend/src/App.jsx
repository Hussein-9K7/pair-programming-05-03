import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import DeleteProductPage from "./pages/DeleteProductPage";
import EditProductPage from "./pages/EditProductPage";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.token ? true : false;
  });
  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<DeleteProductPage isAuthenticated={isAuthenticated} />} />
            <Route
              path="/products/add-product"
              element={isAuthenticated ? <AddProductPage /> : <Navigate to="/signup" />}
            />           
            <Route
              path="/edit-product/:id"
              element={isAuthenticated ? <EditProductPage /> : <Navigate to="/signup" />}
            />
           
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;