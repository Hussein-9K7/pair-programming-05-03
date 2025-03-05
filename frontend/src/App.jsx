import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// pages & components
import Home from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage.jsx";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import DeleteProductPage from "./pages/DeleteProductPage.jsx";
import EditProductPage from "./pages/EditProductPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {
  // Define state for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage for user authentication status
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/products/:id" element={<DeleteProductPage />} />
            <Route path="/edit-product/:id" element={<EditProductPage />} />

            <Route 
              path="/login" 
              element={!isAuthenticated ? <LoginPage setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" replace />} 
            />
            <Route 
              path="/signup" 
              element={!isAuthenticated ? <SignupPage setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" replace />} 
            />

             
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;


/* 

const App = () => {

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-job" element={<AddProductPage />} />
              <Route path='*' element={<NotFoundPage />} />
              <Route path ="/products/:id" element ={<DeleteProductPage.js />} />
              <Route path="/edit-product/:id" element={<EditProductPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App; */