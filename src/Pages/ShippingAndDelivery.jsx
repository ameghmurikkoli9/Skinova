import React from 'react'
import "./Faq.css"
import Faq from './Faq.jsx'
import "./Fourcards.css"
import FourCards from './FourCards.jsx'


const ShippingAndDelivery = () => {
  return (
    <>
      <FourCards
        question="Shipping & Delivery"
        h1="Do you use sustainable shipping materials?"
        a1="Yes, we’re committed to eco-friendly practices and use recyclable or biodegradable packaging materials whenever possible."
        link1="/faqs/Do-you-use-sustainable-shipping-materials"


        h2="What happens if my package is delayed?"
        a2="Delays can occasionally happen due to unforeseen circumstances like weather or customs. If your package is delayed, please reach out to our customer support team for assistance."
        link2="/faqs/What-happens-if-my-package-is-delayed"

        h3="Can I track my order?"
        a3="Absolutely! Once your order has been shipped, you will receive a tracking number via email. Use it to monitor your package’s progress and estimated delivery date."
        link3="/faqs/Can-I-track-my-order"


        h4="Do you ship internationally?"
        a4="Yes, we ship to many countries worldwide. Shipping costs and delivery times vary depending on your location. Additional customs fees may apply based on your country’s regulations."
        link4="/faqs/Do-you-ship-internationally"

      />

      <Faq />

    </>
  )
}

export default ShippingAndDelivery