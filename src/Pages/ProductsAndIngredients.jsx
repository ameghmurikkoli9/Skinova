import React from 'react'
import "./Faq.css"
import Faq from './Faq.jsx'
import "./Fourcards.css"
import FourCards from './FourCards.jsx'

const ProductsAndIngredients = () => {
  return (
    <>
      <FourCards
        question="Products & Ingredients"
        h1="Are your products dermatologist-tested?"
        a1="Yes, all our products are tested under the supervision of dermatologists to ensure they are safe, effective, and suitable for different skin types."
        link1="/faqs/Are-your-products-dermatologist-tested"


        h2="How should I store my skincare products?"
        a2="Store your skincare products in a cool, dry place away from direct sunlight. For best results, keep products like serums and creams tightly sealed to maintain freshness."
        link2="/faqs/How-should-I-store-my-skincare-products"

        h3="Are your products cruelty-free and vegan?"
        a3="All our products are cruelty-free, and many are vegan. Look for the vegan label on product pages or packaging for easy identification."
        link3="/faqs/Are-your-products-cruelty-free-and-vegan"


        h4="Do your products contain synthetic fragrances?"
        a4="No, we avoid synthetic fragrances to minimize irritation and focus on using naturally derived scents from essential oils or botanical extracts."
        link4="/faqs/Do-your-products-contain-synthetic-fragrances"

      />

      <Faq />

    </>

  )
}

export default ProductsAndIngredients