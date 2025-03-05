import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import DeleteProductPage from "./pages/DeleteProductPage"
import EditProductPage from "./pages/EditProductPage"
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
  
  export default App;