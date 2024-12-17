// import React from 'react';

import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";

const FAQ = () => {
  return (
    <div>
      <Navbar></Navbar>

      <section className="py-4 md:py-10">
        <h2 className="font-extrabold text-violet-500 text-2xl md:text-5xl text-center py-4">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 pb-8 md:py-8">
          <div className="hidden md:flex md:w-80">
            {/* <img src="./assets/faq.png"> */}
            <img src="/img/faq.png" alt="" />
          </div>

          <div className="space-y-4 flex flex-col items-center justify-center md:w-3/5">
            <div className="collapse collapse-arrow bg-btn_green3 border border-btn_green2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium text-fuchsia-500">
                What types of products do we offer?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a wide range of gadgets including laptops, phones,
                  accessories, and smart watches. Explore our collection to find
                  the latest tech that suits your needs.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-btn_green3 border border-btn_green2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium text-fuchsia-500">
                How can I track my order?
              </div>
              <div className="collapse-content">
                <p>
                  You can track your order by visiting the Order Tracking
                  section on our website. Simply enter your order number and
                  email address to get the latest updates on your shipment.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-btn_green3 border border-btn_green2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium text-fuchsia-500">
                What is our return policy?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a 30-day return policy for most products. If you are
                  not satisfied with your purchase, you can return it within 30
                  days of delivery for a full refund or exchange. Please refer
                  to our Returns section for more details.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-btn_green3 border border-btn_green2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium text-fuchsia-500">
                Do we offer international shipping?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we offer international shipping to many countries.
                  Shipping costs and delivery times may vary depending on the
                  destination. Please check our Shipping & Delivery section for
                  more information.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-btn_green3 border border-btn_green2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium text-fuchsia-500">
                How can I contact customer support?
              </div>
              <div className="collapse-content">
                <p>
                  You can contact our customer support team by visiting the
                  Contact section on our website. We are available via email,
                  phone, and live chat to assist you with any inquiries or
                  issues.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-btn_green3 border border-btn_green2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium text-fuchsia-500">
                Do we offer any discounts or promotions?
              </div>
              <div className="collapse-content">
                <p>
                  We frequently offer discounts and promotions on various
                  products. Be sure to check our website regularly and subscribe
                  to our newsletter to stay updated on the latest deals and
                  offers.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-btn_green3 border border-btn_green2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium text-fuchsia-500">
                Are there any warranties on your products?
              </div>
              <div className="collapse-content">
                <p>
                  ThYes, most of our products come with a manufacturer
                  warranty. The warranty period and terms vary by product.
                  Please check the product details for specific warranty
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default FAQ;
