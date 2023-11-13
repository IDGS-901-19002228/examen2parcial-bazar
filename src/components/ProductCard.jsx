function ProductCard({ product }) {
    return (
      <div className="card">
        <img src={product.image} />
        <h5>{product.title}</h5>
        <p>${product.price}</p>
      </div>
    );
  }
  
  export default ProductCard;