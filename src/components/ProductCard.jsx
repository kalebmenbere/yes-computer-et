import React from 'react';
import { FaStar, FaShoppingCart, FaEye } from 'react-icons/fa';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="modern-product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.featured && (
          <div className="featured-badge">
            <FaStar /> Featured
          </div>
        )}
        <div className="product-actions">
          <button className="action-btn quick-view">
            <FaEye />
          </button>
          <button className="action-btn add-to-cart">
            <FaShoppingCart />
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
            />
          ))}
          <span className="rating-text">({product.rating})</span>
        </div>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="price">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
          </div>
          <button className="buy-now-btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}