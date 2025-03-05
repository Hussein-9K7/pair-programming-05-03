import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DeleteProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("id: ", id);
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const onDeleteClick = (productId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?" + productId
    );
    if (!confirm) return;

    deleteProduct(productId);
    navigate("/");
  };

  return (
    <div className="job-preview">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>{product.title}</h2>
          <p>Type: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Company: {product.price}</p>
          <p>Email: {product.stockQuantity}</p>
          <p>Phone: {product.supplierName}</p>
          <button onClick={() => onDeleteClick(product._id)}>delete</button>
        </>
      )}
    </div>
  );
};

export default DeleteProductPage;
      