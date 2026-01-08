import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import { FaFilter, FaSearch, FaSortAmountDown } from "react-icons/fa";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = ["all", ...new Set(products.map(p => p.category))];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        default: return b.featured ? 1 : -1;
      }
    });

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <h1>Our Tech Products</h1>
        <p>Quality computers, accessories, and peripherals at competitive prices</p>
      </section>

      {/* Filters and Search */}
      <div className="products-controls">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="controls-right">
          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter /> Filters
          </button>

          <div className="sort-container">
            <FaSortAmountDown />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="filter-panel">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <span>$0</span>
              <input type="range" min="0" max="2000" className="range-slider" />
              <span>$2000+</span>
            </div>
          </div>

          <div className="filter-actions">
            <button 
              className="clear-filters"
              onClick={() => {
                setSelectedCategory("all");
                setSearchTerm("");
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search or filters</p>
            <button 
              className="reset-btn"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Results Info */}
      <div className="results-info">
        <p>Showing {filteredProducts.length} of {products.length} products</p>
      </div>

      {/* Call to Action */}
      <section className="products-cta">
        <h2>Need Help Choosing?</h2>
        <p>Our tech experts can help you find the perfect products for your needs</p>
        <button className="consult-btn">
          Book Free Consultation
        </button>
      </section>
    </div>
  );
}