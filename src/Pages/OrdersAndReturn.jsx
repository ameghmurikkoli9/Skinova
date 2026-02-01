import React from 'react'
import "./Faq.css"
import Faq from './Faq.jsx'
import "./Fourcards.css"
import FourCards from './FourCards.jsx'

const OrdersAndReturn = () => {
  return (
    <>
      <FourCards
        question="Orders & Returns"
        h1="Do you offer discounts for bulk orders?"
        a1="Yes, we offer discounts on large orders for personal or business use. Contact us to learn more about our bulk pricing options."
        link1="/faqs/do-you-offer-discounts-for-bulk-orders"


        h2="What should I do if my product arrives damaged?"
        a2="We’re sorry for the inconvenience! Contact our support team with photos of the damaged item and your order number, and we’ll send a replacement as quickly as possible."
        link2="/faqs/what-should-I-do-if-my-product-arrives-damaged
"

        h3="How do I exchange a product?"
        a3="If you received the wrong product or need an exchange, please reach out to our customer service. Exchanges are typically handled within 7–10 business days."
        link3="/faqs/how-do-I-exchange-a-product"


        h4="What is your return policy?"
        a4="We accept returns within 30 days of purchase for unused and unopened products. To initiate a return, contact our customer support team with your order details. Refunds will be processed once we receive the returned items."
        link4="/faqs/What-is-your-return-policy"

      />

      <Faq />

    </>
  )
}

export default OrdersAndReturn