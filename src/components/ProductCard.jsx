import "./ProductCard.css";
import { FaStar, FaShoppingCart, FaEye } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-badge">{product.category}</div>
      
      <div className="product-image">
        <img src={product.image || "/placeholder.jpg"} alt={product.name} />
        <div className="product-overlay">
          <button className="quick-view-btn">
            <FaEye /> Quick View
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < Math.floor(product.rating) ? "filled" : ""}
              />
            ))}
            <span className="rating-text">({product.rating})</span>
          </div>
          <span className="review-count">{product.reviews} reviews</span>
        </div>
        
        <div className="product-price-section">
          <div className="price-container">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="discount-badge">-{product.discount}%</span>
            )}
          </div>
          
          <button className="add-to-cart-btn">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
        
        <div className="product-features">
          {product.features?.slice(0, 2).map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
      </div>
    </div>
  );
}