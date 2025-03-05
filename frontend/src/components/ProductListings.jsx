import ProductListing from './ProductListing';
const ProductListings = ({ products }) => {
  return (
    <div className="job-list">
          {products.map((product) => (
              <ProductListing key={product.id} product={product} />
            ))}
    </div>
     
  );
};

export default ProductListings;