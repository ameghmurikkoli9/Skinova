import React from 'react'
import './Faq.css'
import { NavLink } from 'react-router-dom'


const Faq = () => {
    return (
        <>
            <h1 className='faq-Heading'>
                FAQs
            </h1>
            <div className='faq-search-bar'>
                <input
                    type="text"
                    placeholder="Search FAQs ..."
                    className="faq-search-input"
                />
                <button className="faq-search-btn" aria-label="Search">
                    🔍
                </button>
            </div>

            <div className="faq-faq-card">
                <div className="faq-faq-card1"><h2>Orders & Returns</h2>
                    <div className="faq-questions faq-questions1">
                        <ul>
                            <li>
                                <NavLink to="/faqs/do-you-offer-discounts-for-bulk-orders">
                                    Do you offer discounts for bulk orders?
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faqs/what-should-I-do-if-my-product-arrives-damaged">
                                    What should I do if my product arrives damaged?
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/faqs/how-do-I-exchange-a-product">
                                    How do I exchange a product?
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/faqs/What-is-your-return-policy">
                                    What is your return policy?
                                </NavLink>

                            </li>
                            <li className='faq-view-all'>
                                <NavLink to="/returns">
                                    View All
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="faq-faq-card2"><h2>Shipping & Delivery</h2>
                    <div className="faq-questions faq-questions2">
                        <ul>
                            <li>
                                <NavLink to="/faqs/Do-you-use-sustainable-shipping-materials">
                                    Do you use sustainable shipping materials?                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faqs/What-happens-if-my-package-is-delayed">
                                    What happens if my package is delayed?                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/faqs/Can-I-track-my-order">
                                    Can I track my order?                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/faqs/Do-you-ship-internationally">
                                    Do you ship internationally?                                </NavLink>

                            </li>
                            <li className='faq-view-all'>
                                <NavLink to="/shipping">
                                    View All
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="faq-faq-card3"><h2>Products & Ingredients</h2>
                    <div className="faq-questions faq-questions3">
                        <ul>
                            <li>
                                <NavLink to="/faqs/Are-your-products-dermatologist-tested ">
                                    Are your products dermatologist-tested?                              </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faqs/How-should-I-store-my-skincare-products">

                                    How should I store my skincare products?                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/faqs/Are-your-products-cruelty-free-and-vegan">
                                    Are your products cruelty-free and vegan?                               </NavLink>

                            </li>
                            <li>
                                <NavLink to="/faqs/Do-your-products-contain-synthetic-fragrances ">
                                    Do your products contain synthetic fragrances?                             </NavLink>

                            </li>
                            <li className='faq-view-all'>
                                <NavLink to="/Products-and-ingredients">
                                    View All
                                </NavLink>

                            </li>
                        </ul>

                    </div>
                </div>
                <div className="faq-faq-card4"><h2>Skincare Tips</h2>
                    <div className="faq-questions faq-questions4">
                        <ul>
                            <li>
                                <NavLink to="/faqs/Should-I-change-my-routine-for-different-seasons ">
                                    Should I change my routine for different seasons?                              </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faqs/How-often-should-I-exfoliate  ">


                                    How often should I exfoliate?                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faqs/Can-I-use-multiple-products-together">
                                Can I use multiple products together?                              </NavLink>

                            </li>
                            <li>
                                <NavLink to="/faqs/Which-product-is-best-for-my-skin-concerns">
                                Which product is best for my skin concerns?                            </NavLink>

                            </li>
                            <li className='faq-view-all'>
                                <NavLink to="/Skincare-tips">
                                    View All
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq