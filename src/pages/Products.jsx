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
  FaTimes,
  FaShoppingCart,
  FaCheck,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegram
} from "react-icons/fa";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [showOrderBubble, setShowOrderBubble] = useState(false);
  
  // Get unique categories
  const categories = ["all", "laptops", "desktops", "accessories", "peripherals", "networking"];
  
  // Toggle product selection
  const toggleProductSelection = (productId) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        const updatedSelection = [...prev, productId];
        // Show bubble when first item is selected
        if (prev.length === 0 && !showOrderBubble) {
          setShowOrderBubble(true);
        }
        return updatedSelection;
      }
    });
  };
  
  // Calculate total price of selected products
  const totalPrice = selectedProducts.reduce((total, productId) => {
    const product = products.find(p => p.id === productId);
    return total + (product ? product.price : 0);
  }, 0);
  
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
  
  // Function to handle order submission
  const handleOrderSubmit = (userData) => {
    // Prepare selected product details
    const selectedProductDetails = selectedProducts.map(id => {
      const product = products.find(p => p.id === id);
      return `• ${product.name} - $${product.price}`;
    }).join('\n');
    
    // Create detailed message
    const message = `
🛒 *NEW ORDER REQUEST* 🛒

👤 *Customer Information:*
• Name: ${userData.name}
• Phone: ${userData.phone}
• Email: ${userData.email || 'Not provided'}
• Address: ${userData.address}

📦 *Selected Products (${selectedProducts.length} items):*
${selectedProductDetails}

💰 *Order Summary:*
• Subtotal: $${totalPrice.toFixed(2)}
• Shipping: ${totalPrice > 100 ? 'FREE' : '$10.00'}
• Total: $${totalPrice > 100 ? totalPrice.toFixed(2) : (totalPrice + 10).toFixed(2)}

📝 *Additional Notes:*
${userData.notes || 'No additional notes provided'}

⏰ *Order Time:* ${new Date().toLocaleString()}
    `.trim();
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Telegram Bot URL (replace with your bot username)
    const telegramBotUsername = "your_bot_username"; // Change this to your actual bot username
    const telegramUrl = `https://t.me/${telegramBotUsername}?text=${encodedMessage}`;
    
    // WhatsApp URL (alternative option)
    const whatsappNumber = "1234567890"; // Replace with your WhatsApp business number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open Telegram
    window.open(telegramUrl, '_blank');
    
    // Show success message
    alert(`Order submitted successfully! Opening Telegram to send your order details.\n\nYou can also send the order via WhatsApp: ${whatsappUrl}`);
    
    // Reset form and close modal
    setIsOrderModalOpen(false);
    setSelectedProducts([]);
    setShowOrderBubble(false);
  };
  
  // Clear all selected products
  const clearAllSelectedProducts = () => {
    setSelectedProducts([]);
    setShowOrderBubble(false);
  };
  
  // Update the Featured Products to use the new ProductCard
  const FeaturedProductCard = ({ product }) => {
    const isSelected = selectedProducts.includes(product.id);
    
    return (
      <div className="modern-featured-card">
        <div className="featured-badge">
          <FaStar /> Featured
        </div>
        <div className="featured-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="featured-content">
          <h3>{product.name}</h3>
          <div className="featured-price">${product.price}</div>
          <button 
            className={`featured-btn ${isSelected ? 'selected' : ''}`}
            onClick={() => toggleProductSelection(product.id)}
          >
            {isSelected ? (
              <>
                <FaCheck /> Selected
              </>
            ) : (
              'Add to Order'
            )}
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="modern-products-page">
      {/* Chat Order Bubble - Bottom Right */}
      {selectedProducts.length > 0 && (
        <div className={`chat-order-bubble ${showOrderBubble ? 'expanded' : 'minimized'}`}>
          <button 
            className="chat-toggle-button"
            onClick={() => setShowOrderBubble(!showOrderBubble)}
          >
            <FaShoppingCart />
            {selectedProducts.length > 0 && (
              <span className="chat-toggle-count">{selectedProducts.length}</span>
            )}
          </button>
          
          {showOrderBubble && (
            <div className="order-bubble-content">
              <div className="order-bubble-header">
                <h3>
                  <FaShoppingCart /> Your Order
                  <span className="bubble-count-badge">{selectedProducts.length} items</span>
                </h3>
                <button 
                  className="minimize-bubble"
                  onClick={() => setShowOrderBubble(false)}
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="order-bubble-body">
                <div className="order-bubble-items">
                  {selectedProducts.map(productId => {
                    const product = products.find(p => p.id === productId);
                    return (
                      <div key={productId} className="order-bubble-item">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="bubble-item-image"
                        />
                        <div className="bubble-item-info">
                          <h4 className="bubble-item-name">{product.name}</h4>
                          <span className="bubble-item-price">${product.price}</span>
                        </div>
                        <button 
                          className="remove-bubble-item"
                          onClick={() => toggleProductSelection(productId)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    );
                  })}
                </div>
                
                <div className="order-bubble-summary">
                  <div className="bubble-summary-row">
                    <span>Subtotal:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="bubble-summary-row">
                    <span>Shipping:</span>
                    <span className={totalPrice > 100 ? 'free-shipping' : ''}>
                      {totalPrice > 100 ? 'FREE' : '$10.00'}
                    </span>
                  </div>
                  <div className="bubble-summary-row total">
                    <span>Total:</span>
                    <span className="bubble-total-price">
                      ${totalPrice > 100 ? totalPrice.toFixed(2) : (totalPrice + 10).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="order-bubble-footer">
                <div className="bubble-action-buttons">
                  <button 
                    className="clear-bubble-btn"
                    onClick={clearAllSelectedProducts}
                  >
                    Clear All
                  </button>
                  <button 
                    className="checkout-bubble-btn"
                    onClick={() => setIsOrderModalOpen(true)}
                  >
                    <FaPaperPlane /> Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
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
            <FeaturedProductCard key={product.id} product={product} />
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
              filteredProducts.map(product => {
                const isSelected = selectedProducts.includes(product.id);
                return (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    isSelected={isSelected}
                    onToggle={toggleProductSelection}
                  />
                );
              })
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

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="order-modal-overlay">
          <div className="order-modal">
            <div className="modal-header">
              <h2>Complete Your Order</h2>
              <button 
                className="close-modal"
                onClick={() => setIsOrderModalOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="modal-content">
              {/* Selected Products Summary */}
              <div className="selected-products-summary">
                <div className="summary-header">
                  <h3>
                    <FaShoppingCart /> Your Order ({selectedProducts.length} items)
                  </h3>
                  <button 
                    className="edit-selection"
                    onClick={() => {
                      setIsOrderModalOpen(false);
                      setShowOrderBubble(true);
                    }}
                  >
                    Edit Selection
                  </button>
                </div>
                
                <div className="selected-products-list">
                  {selectedProducts.map(productId => {
                    const product = products.find(p => p.id === productId);
                    return (
                      <div key={productId} className="selected-product-item">
                        <img src={product.image} alt={product.name} className="product-thumbnail" />
                        <div className="product-info">
                          <h4>{product.name}</h4>
                          <span className="product-category">{product.category}</span>
                          <div className="product-meta">
                            <span className="product-rating">
                              <FaStar /> {product.rating}
                            </span>
                            <span className="product-price">${product.price}</span>
                          </div>
                        </div>
                        <button 
                          className="remove-product"
                          onClick={() => toggleProductSelection(productId)}
                          title="Remove from order"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    );
                  })}
                </div>
                
                <div className="order-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping:</span>
                    <span className={totalPrice > 100 ? 'free-shipping' : ''}>
                      {totalPrice > 100 ? 'FREE' : '$10.00'}
                    </span>
                  </div>
                  <div className="summary-row total">
                    <span>Total Amount:</span>
                    <span className="total-price">
                      ${totalPrice > 100 ? totalPrice.toFixed(2) : (totalPrice + 10).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Customer Information Form */}
              <div className="customer-form-section">
                <div className="form-header">
                  <h3>
                    <FaUser /> Your Information
                  </h3>
                  <p>Fill in your details to complete the order</p>
                </div>
                
                <form 
                  className="customer-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const userData = {
                      name: formData.get('name'),
                      phone: formData.get('phone'),
                      email: formData.get('email'),
                      address: formData.get('address'),
                      notes: formData.get('notes')
                    };
                    handleOrderSubmit(userData);
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser /> Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required 
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhoneAlt /> Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required 
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope /> Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="address">
                      <FaMapMarkerAlt /> Delivery Address *
                    </label>
                    <textarea 
                      id="address" 
                      name="address"
                      required 
                      placeholder="Enter your complete delivery address including city and postal code"
                      rows="3"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea 
                      id="notes" 
                      name="notes"
                      placeholder="Any special requirements, preferred delivery time, or additional notes..."
                      rows="3"
                    />
                  </div>
                  
                  <div className="form-notice">
                    <p>
                      <FaShieldAlt /> Your information is secure and will only be used for order processing.
                    </p>
                  </div>
                  
                  <div className="form-actions">
                    <button 
                      type="button"
                      className="cancel-btn"
                      onClick={() => setIsOrderModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="submit-order-btn"
                    >
                      <FaTelegram /> Send Order via Telegram
                    </button>
                  </div>
                  
                  <div className="alternative-options">
                    <p className="or-divider">Or send via:</p>
                    <button 
                      type="button"
                      className="whatsapp-btn"
                      onClick={() => {
                        const name = document.getElementById('name')?.value || 'Not provided';
                        const phone = document.getElementById('phone')?.value || 'Not provided';
                        const email = document.getElementById('email')?.value || 'Not provided';
                        const address = document.getElementById('address')?.value || 'Not provided';
                        const notes = document.getElementById('notes')?.value || 'Not provided';
                        
                        // Prepare message for WhatsApp
                        const selectedProductDetails = selectedProducts.map(id => {
                          const product = products.find(p => p.id === id);
                          return `• ${product.name} - $${product.price}`;
                        }).join('\n');
                        
                        const message = `New Order Request%0A%0ACustomer: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AAddress: ${address}%0A%0AProducts:%0A${selectedProductDetails}%0A%0ATotal: $${totalPrice}%0ANotes: ${notes}`;
                        
                        window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
                      }}
                    >
                      <FaWhatsapp /> WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

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
            <button 
              className="modern-cta-btn secondary"
              onClick={() => {
                if (selectedProducts.length > 0) {
                  setIsOrderModalOpen(true);
                } else {
                  setShowOrderBubble(true);
                }
              }}
            >
              Start Your Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}