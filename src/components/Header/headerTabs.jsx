import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/img/logo(1).png";
import Navigation from "./navigation";

const HeaderTabMenus = () => {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 992) {
      setNavVisible(true);
    }
  }, []);

  return (
    <>
      {/* Header */}
      <Container fluid className="header-container fixed-top">
        <Container className="header-top social-links text-center text-md-left">
          <Row className="align-items-center">
            <Col>
              <ListGroup horizontal>
                <ListGroup.Item>
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col>
            {/* WhatsApp icon */}
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

        <button
          type="button"
          className={
            navVisible ? "mobile-nav-toggle" : "mobile-nav-toggle d-lg-none"
          }
        >
          <i className="icofont-navigation-menu"></i>
        </button>
        <header id="header">
          <div className="container d-flex align-items-center">
            {/* <h1 className="logo mr-auto">
            <a href="/home">ASBURY STUDY ABROAD</a>
          </h1> */}
            {/* Uncomment below if you prefer to use an image logo  */}

            <a href="index.html" className="logo mr-auto">
              <img src={logo} alt="" className="img-fluid" />
            </a>

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
      </Container>
    </>
  );
};

export default HeaderTabMenus;
