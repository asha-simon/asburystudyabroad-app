import React from "react";

import "../../assets/css/style.css";
import HeaderSlider from "../Carousel/slider";
import HeaderTabMenus from "./headerTabs";

const Header = () => {
  return (
    <>
      {/* <Container fluid className="header-container fixed-top">
        <Container className="header-top social-links text-center text-md-left">
          <Row className="align-items-center">
            <Col>
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </Col>
            <Col>
              <a
                href="https://wa.me/917012894782"
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp whatsapp-icon"></i>+917012894782
              </a>
            </Col>
          </Row>
        </Container>
        <HeaderTabMenus />
      </Container> */}
      {/* Hero Section  */}
      <HeaderTabMenus/>
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
