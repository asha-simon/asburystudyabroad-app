import React from "react";
import "../../assets/css/style.css";
import HeaderSlider from "../Carousel/slider";
import HeaderTabMenus from "./headerTabs";

const Header = () => {
  return (
    <>
      <HeaderTabMenus />
      {/* Hero Section  */}
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
      >
        <HeaderSlider />
      </section>
      {/* End Hero */}
    </>
  );
};

export default Header;
