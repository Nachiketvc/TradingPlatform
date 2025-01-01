import React from "react";
import LeftSection from "./LeftSection";
import './LeftSection.css';
import Navbar from '../others/Navbar';
import Hero from './Hero';
import Footer from '../others/Footer';

function ProductPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <div style={{ width: "80", height: "100vh" }}>
        <LeftSection
          imageSrc="images/kite.png"
          altText="Placeholder Image"
          productName="Kite"
          ProductDescription= {`Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.Enjoy the Kite experience seamlessly on your Android and iOS devices.`}
          tryDemo="Try Demo"
          learnMore="Learn More"
          playStore="images/googlePlayBadge.svg"
          appStore="images/appstoreBadge.svg"
        />
        <div style={{marginTop: '500px'}}>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default ProductPage;


