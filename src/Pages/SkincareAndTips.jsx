import React from 'react'
import "./Faq.css"
import Faq from './Faq.jsx'
import "./Fourcards.css"
import FourCards from './FourCards.jsx'

const SkincareAndTips = () => {
  return (

    <>
      <FourCards
        question="Skincare Tips"
        h1="Should I change my routine for different seasons?"
        a1="Yes, skin needs can change with the seasons. In winter, focus on richer moisturizers and hydration, while in summer, opt for lightweight, oil-free products and consistent SPF use."
        link1="/faqs/Should-I-change-my-routine-for-different-seasons"


        h2="How often should I exfoliate?"
        a2="Exfoliation frequency depends on your skin type. For sensitive skin, once a week is enough, while oily or normal skin can handle 2–3 times per week. Over-exfoliating can cause irritation, so listen to your skin."
        link2="/faqs/How-often-should-I-exfoliate"

        h3="Can I use multiple products together?"
        a3="Yes, but layer them properly: start with lighter textures like serums and end with heavier products like moisturizers. Avoid mixing active ingredients like retinol and vitamin C unless directed by a dermatologist."
        link3="/faqs/Can-I-use-multiple-products-together"


        h4="Which product is best for my skin concerns?"
        a4="For dry skin, look for hydrating products with hyaluronic acid. Oily skin benefits from lightweight, non-comedogenic options. For concerns like acne or wrinkles, choose targeted treatments like salicylic acid or retinol serums"
        link4="/faqs/Which-product-is-best-for-my-skin-concerns"

      />

      <Faq />

    </>


  )
}

export default SkincareAndTips