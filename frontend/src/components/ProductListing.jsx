import { Link } from "react-router-dom";
const ProductListing = ({product}) => {
    return (
      <div className="job-preview">
        <h2>{product.title}</h2>
        <p>Type: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Supplier:{product.supplier}</p>
        <p>Rating:{product.rating}</p>
        <Link to={`/products/${product.id}`}  className="btn">View Product</Link> 
        <Link to={`/edit-product/${product.id}`} className="btn">Edit Product</Link>
      </div>
    );
  };
  
  export default ProductListing;
  