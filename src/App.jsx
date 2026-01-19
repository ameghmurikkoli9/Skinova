import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './Context/FavoritesContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Hero2 from './Components/Hero2.jsx'
import Hero3 from './Components/Hero3.jsx'
import Hero4 from './Components/Hero4.jsx'
import Footer from './Components/Footer.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Shop from './Pages/Shop.jsx'
import Moisturizer from './Pages/Moisturizer.jsx'
import Lotion from './Pages/Lotion.jsx'
import Cleanser from './Pages/Cleanser.jsx'
import Favourite from './Pages/Favourite.jsx'
import Cart from './Pages/Cart.jsx'
import OpeningSoon from './Pages/OpeningSoon.jsx'

// Home page component
function HomePage() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3/>
      <Hero4 />
      
    </>
  )
}

function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<div></div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<div></div>} />
          <Route path="/licensing" element={<div></div>} />
          <Route path="/products" element={<Shop />} />
          <Route path="/licensing" element={<div></div>} />
          <Route path="/category/cleansers" element={<Cleanser />} />
          <Route path="/category/lotions" element={<Lotion />} />
          <Route path="/category/moisturizers" element={<Moisturizer />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/faqs" element={<div></div>} />
          <Route path="/shipping" element={<div></div>} />
          <Route path="/returns" element={<div></div>} />
          <Route path="/terms" element={<div></div>} />
          <Route path="/favorites" element={<Favourite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<div></div>} />
          <Route path="/opening-soon" element={<OpeningSoon />} />
        </Routes>


        <Footer />
      </CartProvider>
    </FavoritesProvider>
    
  )
}

export default App
