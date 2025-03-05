import { useState, useEffect } from "react";
import ProductListing from "../components/ProductListing.jsx"; // Ensure correct import

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); // Convert response to JSON
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  

  return (
    <div className="home">
      <h1>Product Listings</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => <ProductListing key={product.id} product={product} />)
      )}
    </div>
  );
};

export default Home;
