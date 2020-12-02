import React from "react";

import HorizontalNav from "../components/horizontal-navs/HorizontalNav";
import Footer from "../components/footers/Footer";
import Blog from "../components/blog/Blog";

export default function BlogPage() {
  return (
    <React.Fragment>
      <HorizontalNav
        content={{
          brand: {
            text: "Local Technician",
            image: "/images/logo.png",
            width: "75",
          },
          link1: "Home",
          link2: "Services",
          link3: "Blog",
          link4: "Contact",
        }}
      />

      <Blog content={{}} />
      <Footer
        content={{
          "header-p1": "Your Local HVAC,",
          "header-p2": "Electrical &; Home Services Company",
          description: "Quality Solutions for Heating and Cooling",
          "col3-header": "Air Conditioning Repair",
          "col3-desc":
            "If you do not want to be uncomfortable in your own home then you must act now by contacting us to make any needed repairs. The chance of the problem getting worse is likely if you don\u2019t do something to address your air conditioning problem now. ",
        }}
      />
    </React.Fragment>
  );
}