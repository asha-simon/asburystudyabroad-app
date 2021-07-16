import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/img/logo.png";
import Navigation from "./navigation";

const HeaderTabMenus = () => {

  const [navVisible, setNavVisible] = useState(false);


    useEffect(() => {
      if(window.innerWidth < 992) {
        setNavVisible(true);
      } 
    }, [])

  return (
    <>
      {/* Header */}
      <button type="button" class={navVisible ? "mobile-nav-toggle" :"mobile-nav-toggle d-lg-none"}><i class="icofont-navigation-menu"></i></button>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          {/* <h1 className="logo mr-auto">
            <a href="/home">ASBURY STUDY ABROAD</a>
          </h1> */}
          {/* Uncomment below if you prefer to use an image logo  */}

          <a href="index.html" className="logo mr-auto"><img src={logo} alt="" className="img-fluid"/></a>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about-us">About</a>
              </li>
              <li>
                <a href="/main-courses">Courses</a>
              </li>
              <li>
                <a href="/destinations">Destinations</a>
              </li>
              <li>
                <a href="events.html">Services</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </nav>
          {/* nav-menu  */}

          {/* <Navigation/> */}

          <a href="courses.html" className="get-started-btn">
            Get Started
          </a>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default HeaderTabMenus;
