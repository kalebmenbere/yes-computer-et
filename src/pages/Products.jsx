import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import { 
  FaFilter, 
  FaSearch, 
  FaSortAmountDown,
  FaStar,
  FaFire,
  FaTag,
  FaShippingFast,
  FaShieldAlt,
  FaPhoneAlt,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = ["all", "laptops", "desktops", "accessories", "peripherals", "networking"];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        case "popular": return b.popularity - a.popularity;
        default: return b.featured ? 1 : -1;
      }
    });

  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div className="modern-products-page">
      {/* Hero Banner */}
      <section className="modern-products-hero">
        <div className="modern-hero-content">
          <div className="modern-hero-badge">
            <FaTag /> Hot Deals This Week
          </div>
          <h1 className="modern-hero-title">
            Discover Amazing <span className="highlight">Tech Products</span>
          </h1>
          <p className="modern-hero-description">
            Premium computers, accessories, and peripherals at unbeatable prices. 
            Shop with confidence backed by our 2-year warranty.
          </p>
          <div className="modern-hero-stats">
            <div className="modern-hero-stat">
              <FaStar />
              <span>500+ 5-Star Reviews</span>
            </div>
            <div className="modern-hero-stat">
              <FaShippingFast />
              <span>Free Shipping Over $100</span>
            </div>
            <div className="modern-hero-stat">
              <FaShieldAlt />
              <span>2-Year Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="modern-featured-section">
        <div className="modern-section-header">
          <h2 className="modern-section-title">
            <FaFire /> Featured Products
          </h2>
          <p className="modern-section-subtitle">
            Top picks from our collection
          </p>
        </div>
        
        <div className="modern-featured-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="modern-featured-card">
              <div className="featured-badge">
                <FaStar /> Featured
              </div>
              <div className="featured-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="featured-content">
                <h3>{product.name}</h3>
                <div className="featured-price">${product.price}</div>
                <button className="featured-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Products Section */}
      <section className="modern-products-section">
        <div className="modern-products-header">
          <div className="modern-header-content">
            <h2>All Products</h2>
            <p>{filteredProducts.length} products found</p>
          </div>
          
          <div className="modern-header-controls">
            {/* Search Bar */}
            <div className="modern-search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="modern-search-input"
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button 
              className={`modern-filter-toggle ${showFilters ? 'active' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>

            {/* Sort Dropdown */}
            <div className="modern-sort-container">
              <FaSortAmountDown />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="modern-sort-select"
              >
                <option value="featured">Featured First</option>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Content */}
        <div className="modern-products-content">
          {/* Filter Sidebar */}
          {showFilters && (
            <div className="modern-filter-sidebar">
              <div className="filter-header">
                <h3>Filters</h3>
                <button 
                  className="close-filters"
                  onClick={() => setShowFilters(false)}
                >
                  <FaTimes />
                </button>
              </div>

              <div className="filter-group">
                <h4>Category</h4>
                <div className="filter-options">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`filter-option ${selectedCategory === category ? 'selected' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                      {selectedCategory === category && <FaChevronRight />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <h4>Price Range</h4>
                <div className="price-range-controls">
                  <div className="price-inputs">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      min="0"
                      max="2000"
                      className="price-input"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      min="0"
                      max="2000"
                      className="price-input"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="range-slider"
                  />
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="range-slider"
                  />
                </div>
                <div className="price-labels">
                  <span>$0</span>
                  <span>$2000+</span>
                </div>
              </div>

              <div className="filter-actions">
                <button 
                  className="apply-filters"
                  onClick={() => setShowFilters(false)}
                >
                  Apply Filters
                </button>
                <button 
                  className="reset-filters"
                  onClick={() => {
                    setSelectedCategory("all");
                    setPriceRange([0, 2000]);
                  }}
                >
                  Reset All
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="modern-products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="modern-no-products">
                <div className="no-products-content">
                  <h3>No products found</h3>
                  <p>Try adjusting your search criteria or filters</p>
                  <button 
                    className="modern-reset-btn"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      setPriceRange([0, 2000]);
                    }}
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Summary */}
        <div className="modern-results-summary">
          <p>Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products</p>
          <div className="active-filters">
            {selectedCategory !== "all" && (
              <span className="active-filter">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory("all")}>×</button>
              </span>
            )}
            {priceRange[0] > 0 || priceRange[1] < 2000 ? (
              <span className="active-filter">
                Price: ${priceRange[0]} - ${priceRange[1]}
                <button onClick={() => setPriceRange([0, 2000])}>×</button>
              </span>
            ) : null}
            {searchTerm && (
              <span className="active-filter">
                Search: "{searchTerm}"
                <button onClick={() => setSearchTerm("")}>×</button>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-products-cta">
        <div className="modern-cta-content">
          <div className="cta-text">
            <h2>Need Expert Advice?</h2>
            <p>Our tech specialists can help you choose the perfect products for your needs</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+1234567890" className="modern-cta-btn primary">
              <FaPhoneAlt /> Call for Consultation
            </a>
            <button className="modern-cta-btn secondary">
              Schedule Virtual Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}