const ProductListing = ({product}) => {
    return (
      <div className="job-preview">
        <h2>{product.title}</h2>
        <p>Type: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Supplier:{product.supplier}</p>
      </div>
    );
  };
  
  export default ProductListing;
  