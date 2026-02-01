import React from 'react'
import "./Faq.css"
import Faq from './Faq.jsx'
import FaqTemplates from './FaqTemplates.jsx'

const WhatShouldIDoIfMyProductArrivesDamaged = () => {
  return (
    <>
    <FaqTemplates
    question="What should I do if my product arrives damaged?"
    main="We’re sorry for the inconvenience! Contact our support team with photos of the damaged item and your order number, and we’ll send a replacement as quickly as possible."
    short="Once your order has been placed, there is a short window during which cancellations are possible. If your order hasn’t yet been processed or shipped, you can request a cancellation by contacting our support team as soon as possible. We’ll do our best to intercept the order and issue a full refund."

    short2="However, if your order has already been processed or dispatched, we won’t be able to cancel it. In that case, you’re still welcome to return the product once it arrives, as long as it meets our return policy conditions. Please refer to our Returns & Refunds page for more details."

    short3="For the fastest response, we recommend emailing us at support@[yourdomain].com with your order number and “Cancellation Request” in the subject line. Our team will get back to you promptly to confirm the status of your cancellation."
    />

    <Faq/>
    
    </>
  )
}

export default WhatShouldIDoIfMyProductArrivesDamaged