import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { IoPersonOutline, IoSearchOutline, IoHeartOutline, IoCloseOutline, IoChevronForward, IoMenuOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useCart } from "../Context/CartContext.jsx";
import CartSidebar from "./CartSidebar.jsx";

// Import product images for dropdown
import Img2 from "../Images/nataliya-melnychuk-PdzMmdHqN2c-unsplash.jpg";
import Img9 from "../Images/ela-de-pure-cp-2q8IXDmw-unsplash.jpg";

// Import category images for Collections dropdown
import CleanserImg1 from "../Images/aleksandrs-karevs-4fz3fM8Pbnw-unsplash.jpg";
import LotionImg1 from "../Images/mahbod-akhzami-GMfdQ4uICk8-unsplash.jpg";
import MoistImg1 from "../Images/ela-de-pure-rqK_baq_XgI-unsplash.jpg";



export default function Navbar() {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isCollectionsHovered, setIsCollectionsHovered] = useState(false);
  const [shopHoverTimeout, setShopHoverTimeout] = useState(null);
  const [collectionsHoverTimeout, setCollectionsHoverTimeout] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Featured products for dropdown
  const featuredProducts = [
    {
      id: 2,
      name: "Hydra Drops",
      price: "8,90 €",
      image: Img2,
      discount: 55,
    },
    {
      id: 9,
      name: "Glow Milk",
      price: "9,90 €",
      image: Img9,
      discount: 57,
    },
  ];

  // Collections categories
  const collectionsCategories = [
    {
      name: "Cleansers",
      image: CleanserImg1,
      link: "/category/cleansers",
    },
    {
      name: "Lotions",
      image: LotionImg1,
      link: "/category/lotions",
    },
    {
      name: "Moisturizers",
      image: MoistImg1,
      link: "/category/moisturizers",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsScrollingDown(false);
      } 
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (shopHoverTimeout) {
        clearTimeout(shopHoverTimeout);
      }
      if (collectionsHoverTimeout) {
        clearTimeout(collectionsHoverTimeout);
      }
    };
  }, [lastScrollY, shopHoverTimeout, collectionsHoverTimeout]);

  return (
    <header className={`nav-wrapper ${isScrollingDown ? "nav-hidden" : ""}`}>
      <nav className="nav">
        {/* LEFT MENU */}
        <div className="nav-left">
          <div 
            className="shop-link-wrapper"
            onMouseEnter={() => {
              if (shopHoverTimeout) {
                clearTimeout(shopHoverTimeout);
                setShopHoverTimeout(null);
              }
              // Close Collections dropdown when hovering Shop
              setIsCollectionsHovered(false);
              if (collectionsHoverTimeout) {
                clearTimeout(collectionsHoverTimeout);
                setCollectionsHoverTimeout(null);
              }
              setIsShopHovered(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => {
                setIsShopHovered(false);
              }, 200); // Small delay to allow moving to dropdown
              setShopHoverTimeout(timeout);
            }}
          >
            <NavLink to="/shop" className="shop-nav-link">
              Shop {isShopHovered ? <IoCloseOutline className="close-icon" /> : <span>+</span>}
            </NavLink>
            
            {/* Dropdown Menu */}
            {isShopHovered && (
              <div 
                className="shop-dropdown"
                onMouseEnter={() => {
                  if (shopHoverTimeout) {
                    clearTimeout(shopHoverTimeout);
                    setShopHoverTimeout(null);
                  }
                  setIsShopHovered(true);
                }}
                onMouseLeave={() => {
                  setIsShopHovered(false);
                }}
              >
                <div className="dropdown-content">
                  {/* Left Column - Categories */}
                  <div className="dropdown-left">
                    <h3 className="dropdown-shop-title">Shop</h3>
                    <ul className="dropdown-categories">
                      <li>
                        <Link to="/shop" onClick={() => setIsShopHovered(false)}>All Products</Link>
                      </li>
                      <li>
                        <Link to="/category/cleansers" onClick={() => setIsShopHovered(false)}>Cleansers</Link>
                      </li>
                      <li>
                        <Link to="/category/lotions" onClick={() => setIsShopHovered(false)}>Lotions</Link>
                      </li>
                      <li>
                        <Link to="/category/moisturizers" onClick={() => setIsShopHovered(false)}>Moisturizers</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column - Featured Products */}
                  <div className="dropdown-right">
                    {featuredProducts.map((product) => (
                      <div key={product.id} className="dropdown-product-card">
                        <button className="product-heart-btn">
                          <IoHeartOutline size={20} />
                        </button>
                        <div className="product-discount-badge">
                          {product.discount}% OFF
                        </div>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="dropdown-product-image"
                        />
                        <h4 className="dropdown-product-name">{product.name}</h4>
                        <p className="dropdown-product-price">{product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div 
            className="collections-link-wrapper"
            onMouseEnter={() => {
              if (collectionsHoverTimeout) {
                clearTimeout(collectionsHoverTimeout);
                setCollectionsHoverTimeout(null);
              }
              // Close Shop dropdown when hovering Collections
              setIsShopHovered(false);
              if (shopHoverTimeout) {
                clearTimeout(shopHoverTimeout);
                setShopHoverTimeout(null);
              }
              setIsCollectionsHovered(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => {
                setIsCollectionsHovered(false);
              }, 200); // Small delay to allow moving to dropdown
              setCollectionsHoverTimeout(timeout);
            }}
          >
            <NavLink to="/collections" className="collections-nav-link">
              Collections {isCollectionsHovered ? <IoCloseOutline className="close-icon" /> : <span>+</span>}
            </NavLink>
            
            {/* Collections Dropdown Menu */}
            {isCollectionsHovered && (
              <div 
                className="collections-dropdown"
                onMouseEnter={() => {
                  if (collectionsHoverTimeout) {
                    clearTimeout(collectionsHoverTimeout);
                    setCollectionsHoverTimeout(null);
                  }
                  setIsCollectionsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsCollectionsHovered(false);
                }}
              >
                <div className="collections-dropdown-content">
                  {collectionsCategories.map((category) => (
                    <div key={category.name} className="collection-category-card">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="collection-category-image"
                      />
                      <div className="collection-category-info">
                        <h3 className="collection-category-name">{category.name}</h3>
                        <Link 
                          to={category.link} 
                          className="collection-arrow-btn"
                          onClick={() => setIsCollectionsHovered(false)}
                        >
                          <IoChevronForward size={20} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* CENTER LOGO */}
        <NavLink to="/" className="nav-center">(Skinova)</NavLink>

        {/* RIGHT ICONS */}
        <div className="nav-right">
          <button className=" icons flag" style={{fontSize: "3rem"}}>🇮🇳</button>
          <button className="icons"><IoPersonOutline size={35}/></button>
          <button className="icons"><IoSearchOutline size={35} /></button>
          <button className="icons" onClick={() => navigate("/favorites")}><IoHeartOutline size={35}/></button>

          <button className="icons cart-icon-wrapper" onClick={() => setIsCartOpen(true)}>
            <LiaShoppingBagSolid size={35}/>
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
            <IoMenuOutline size={24} />
          </button>
        </div>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
           <span className="mobile-menu-title">Menu</span>
           <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
             <IoCloseOutline size={32} />
           </button>
        </div>
        <div className="mobile-menu-links">
          <NavLink to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
        </div>
      </div>
      </nav>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
