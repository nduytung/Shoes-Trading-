import React, { useState } from "react";
import "../assets/css/FooterCss.css";
let renderFooter = (footerItems) => {
  return footerItems.map((footerItem) => {
    return (
      <div className="col-3 footer__links">
        <p className="footer__links-header h4 text-capitalize">
          {footerItem.header}
        </p>
        <ul className="footer__links-list">
          {footerItem.list.map((item) => {
            return (
              <div>
                <li className="footer__link-items text-secondary lead text-capitalize">
                  <a>{item}</a>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  });
};
let Footer = () => {
  let links,
    products,
    support,
    footerItem = [
      (links = {
        header: "quick links",
        list: ["about", "our main page", "get coupon", "contact us"],
      }),
      (products = {
        header: "our products",
        list: ["women clothes", "accessories", "men wear"],
      }),
      (support = {
        header: "support",
        list: ["contact", "FAQs", "term policy", "payment issue"],
      }),
    ];
  return (
    <footer>
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-3 footer__credit">
            <div className="footer__credit-logo h3">eStore</div>
            <div className="footer__credit-para text-secondary">
              Published on 01/22/2021. Learnt fetch, async, API calling,
              promises, database. Template & design ideas from Colorlib. All
              copyrights reserved{" "}
            </div>
          </div>
          {renderFooter(footerItem)}
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
