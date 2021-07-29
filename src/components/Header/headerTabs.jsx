import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/img/logo.png";
import Navigation from "./navigation";
import { useHistory } from "react-router-dom";

const HeaderTabMenus = () => {
  const [navVisible, setNavVisible] = useState(false);
  let history = useHistory();
  const pathname = history.location.pathname.split("/").slice(1);
  const menuConfig = [
    {
      name: "Home",
      key: "home",
    },
    {
      name: "About",
      key: "about-us",
    },
    {
      name: "Courses",
      key: "main-courses",
    },
    {
      name: "Destinations",
      key: "destinations",
    },
    {
      name: "Services",
      key: "services",
    },
    {
      name: "Contact Us",
      key: "contact-us",
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 992) {
      setNavVisible(true);
    }
  }, []);

  return (
    <>
      {/* Header */}
      <Container fluid className="header-container fixed-top">
        {console.log("pathname", history.location.pathname, pathname)}
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
              <ListGroup
                horizontal
                className="align-items-center justify-content-around"
              >
                <ListGroup.Item>
                  {/* WhatsApp icon */}
                  <a
                    href="https://wa.me/917012894782"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-whatsapp whatsapp-icon"></i>
                    +917012894782
                  </a>
                </ListGroup.Item>

                <ListGroup.Item className="top-bar-link">
                  <a href="#">Book Free Counseling</a>
                </ListGroup.Item>
              </ListGroup>
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
                {menuConfig.map((menuItem) => (
                  <li className={pathname[0] === menuItem.key ? "active" : ""}>
                    <a href={`/${menuItem.key}`}>{menuItem.name}</a>
                  </li>
                ))}

                {/* <li>
                  <a href="/about-us">About</a>
                </li>
                <li>
                  <a href="/main-courses">Courses</a>
                </li>
                <li>
                  <a href="/destinations">Destinations</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li> */}
              </ul>
            </nav>
            {/* nav-menu  */}
            <a href="/login" id="login-btn" className="login-btn">
              Login
            </a>
            {/* <Navigation/> */}
          </div>
        </header>
        {/* End Header */}
      </Container>
    </>
  );
};

export default HeaderTabMenus;
