import './App.css'
import {  Routes, Route } from 'react-router-dom'
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
import Blog from './Components/Blog.jsx'
import Contact from './Pages/Contact.jsx'
import Shop from './Pages/Shop.jsx'
import Moisturizer from './Pages/Moisturizer.jsx'
import Lotion from './Pages/Lotion.jsx'
import Cleanser from './Pages/Cleanser.jsx'
import Favourite from './Pages/Favourite.jsx'
import Cart from './Pages/Cart.jsx'
import OpeningSoon from './Pages/OpeningSoon.jsx'
import Faq from './Pages/Faq.jsx'
import DoYouOfferDiscountsForBulkOrders from './Pages/Do-you-offer-discounts-for-bulk-orders.jsx'
import WhatShouldIDoIfMyProductArrivesDamaged from './Pages/What-should-I-do-if-my-product-arrives-damaged.jsx'
import HowDoIExchangeAProduct from './Pages/How-do-I-exchange-a-product.jsx'
import WhatIsYourReturnPolicy from './Pages/What-is-your-return-policy.jsx'
import DoYouUseSustainableShippingMaterials from './Pages/Do-you-use-sustainable-shipping-materials.jsx'
import WhatHappensIfMyPackageIsDelayed from './Pages/What-happens-if-my-package-is-delayed.jsx'
import CanITrackMyOrder from './Pages/Can-I-track-my-order.jsx'
import DoYouShipInternationally from './Pages/Do-you-ship-internationally'
import AreYourProductsDermatologistTested from './Pages/AreYourProductsDermatologistTested.jsx'
import HowShouldIStoreMySkincareProducts from './Pages/HowShouldIStoreMySkincareProducts.jsx'
import AreYourProductsCrueltyFreeAndVegan from './Pages/AreYourProductsCrueltyFreeAndVegan.jsx'
import DoYourProductsContainSyntheticFragrances from './Pages/DoYourProductsContainSyntheticFragrances.jsx'
import ShouldIChangeMyRoutineForDifferentSeasons from './Pages/ShouldIChangeMyRoutineForDifferentSeasons.jsx'
import HowOftenShouldIExfoliate from './Pages/HowOftenShouldIExfoliate.jsx'
import CanIUseMultipleProductsTogether from './Pages/CanIUseMultipleProductsTogether.jsx'
import WhichProductIsBestForMySkinConcerns from './Pages/WhichProductIsBestForMySkinConcerns.jsx'
import OrdersAndReturn from './Pages/OrdersAndReturn.jsx'
import ShippingAndDelivery from './Pages/ShippingAndDelivery.jsx'
import ProductsAndIngredients from './Pages/ProductsAndIngredients.jsx'
import SkincareAndTips from './Pages/SkincareAndTips.jsx'
import TermsAndConditions from './Pages/TermsAndConditions.jsx'
import ArtOfRelaxation from './Pages/ArtOfRelaxation.jsx'
import NaturesInspiration from './Pages/NaturesInspiration.jsx'
import EffortlessGlow from './Pages/EffortlessGlow.jsx'
import FreshStarts from './Pages/FreshStarts.jsx'
import HydrationSecrets from './Pages/HydrationSecrets.jsx'
import DailyRoutine from './Pages/DailyRoutine.jsx'

// Home page component
function HomePage() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3 />
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
          <Route path="/blog" element={<Blog/>} />
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
          <Route path="/faqs" element={<Faq />} />
          <Route path="/shipping" element={<ShippingAndDelivery/>} />
          <Route path="/returns" element={<OrdersAndReturn/>} />
          <Route path="/terms" element={<TermsAndConditions/>} />
          <Route path="/favorites" element={<Favourite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<div></div>} />
          <Route path="/opening-soon" element={<OpeningSoon />} />
          <Route path='/faqs/do-you-offer-discounts-for-bulk-orders' element={<DoYouOfferDiscountsForBulkOrders />} />
          <Route path='/faqs/what-should-I-do-if-my-product-arrives-damaged' element={<WhatShouldIDoIfMyProductArrivesDamaged />} />
          <Route path='/faqs/how-do-I-exchange-a-product' element={<HowDoIExchangeAProduct />} />
          <Route path='/faqs/What-is-your-return-policy' element={<WhatIsYourReturnPolicy />} />
          <Route path='/faqs/Do-you-use-sustainable-shipping-materials' element={<DoYouUseSustainableShippingMaterials />} />
          <Route path='/faqs/What-happens-if-my-package-is-delayed' element={<WhatHappensIfMyPackageIsDelayed />} />
          <Route path='/faqs/Can-I-track-my-order' element={<CanITrackMyOrder />} />
          <Route path='/faqs/Do-you-ship-internationally' element={<DoYouShipInternationally />} />
          <Route path='/faqs/Are-your-products-dermatologist-tested' element={<AreYourProductsDermatologistTested />} />
          <Route path='/faqs/How-should-I-store-my-skincare-products' element={<HowShouldIStoreMySkincareProducts />} />
          <Route path='/faqs/Are-your-products-cruelty-free-and-vegan' element={<AreYourProductsCrueltyFreeAndVegan />} />
          <Route path='/faqs/Do-your-products-contain-synthetic-fragrances' element={<DoYourProductsContainSyntheticFragrances />} />
          <Route path='/faqs/Should-I-change-my-routine-for-different-seasons' element={<ShouldIChangeMyRoutineForDifferentSeasons />} />
          <Route path='/faqs/How-often-should-I-exfoliate' element={<HowOftenShouldIExfoliate />} />
          <Route path='/faqs/Can-I-use-multiple-products-together' element={<CanIUseMultipleProductsTogether
          />} />
          <Route path='/faqs/Which-product-is-best-for-my-skin-concerns' element={<WhichProductIsBestForMySkinConcerns
          />} />
          <Route path='/Products-and-ingredients' element={<ProductsAndIngredients
          />} />
          <Route path='/Skincare-tips' element={<SkincareAndTips
          />} />
          <Route path='/blog/The-art-of-relaxation' element={<ArtOfRelaxation
          />} />
          <Route path='/blog/Natures-inspiration' element={<NaturesInspiration
          />} />
          <Route path='/blog/Hydration-secrets' element={<HydrationSecrets
          />} />
          <Route path='/blog/Fresh-starts' element={<FreshStarts
          />} />
          <Route path='/blog/Effortless-glow' element={<EffortlessGlow
          />} />
          <Route path='/blog/Your-daily-routine' element={<DailyRoutine
          />} />
          
        </Routes>

        


        <Footer />
      </CartProvider>
    </FavoritesProvider>

  )
}

export default App
