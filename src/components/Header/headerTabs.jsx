/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import EnquiryFormModal from "../../utils/EnquiryForm/enquiry-form-modal";

export const menuConfig = [
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

const HeaderTabMenus = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  let history = useHistory();
  const pathname = history.location.pathname.split("/").slice(1);
  const [modalShow, setModalShow] = useState(false);

  // const disableContactBtn = () => {
  //   console.log("state", (pathname[0] !== "destinations" && (!(pathname.includes("Ireland")) || !(pathname.includes("UK")))) )
  //   if (pathname[0] !== "destinations" && (!(pathname.includes("Ireland")) || !(pathname.includes("UK")))) {
  //     setModalShow(true)
  //   }
  // }


  // useEffect(() => {
  //   if (window.innerWidth < 992) {
  //     setNavVisible(true);
  //   }
  // }, []);

  return (
    <>
      {/* Header */}
      <Container fluid className="header-container fixed-top">
        <Container className="header-top social-links text-center text-md-left">
          <Row className="align-items-center">
            <Col>
              <ListGroup horizontal>
                {/* <ListGroup.Item>
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </ListGroup.Item> */}
                <ListGroup.Item>
                  <a
                    href="https://www.facebook.com/AsburyUK-114425360888142"
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <a
                    href="https://www.instagram.com/asbury.uk/"
                    className="instagram"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.youtube.com/channel/UCf-YLLLsX1aBJ_FrsleR_BA"
                    className="youtube"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                </ListGroup.Item>
                {/* <ListGroup.Item>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </ListGroup.Item> */}
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
                    href="https://wa.me/447593794424"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-whatsapp whatsapp-icon"></i>
                    +447593794424
                  </a>
                </ListGroup.Item>

                {pathname[0] !== "destinations" && (
                  <ListGroup.Item className="top-bar-link">
                    <a
                      href="#"
                      onClick={() => {
                        setModalShow(true);
                      }}
                    >
                      Book Free Counseling
                    </a>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Col>
          </Row>
        </Container>

        <header id="header">
          <div className="container d-flex align-items-center">
            {/* <h1 className="logo mr-auto">
            <a href="/home">ASBURY STUDY ABROAD</a>
          </h1> */}
            {/* Uncomment below if you prefer to use an image logo  */}

            <a href="/home" className="logo mr-auto">
              <img src={logo} alt="" className="img-fluid" />
            </a>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                {menuConfig.map((menuItem) => (
                  <li className={pathname[0] === menuItem.key ? "active" : ""}>
                    <a href={`/${menuItem.key}`}>{menuItem.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* nav-menu  */}
            {/* <a href="/login" id="login-btn" className="login-btn">
              Login
            </a> */}
            <button type="button" className="mobile-nav-toggle" onClick={() => setNavMenuOpen(!navMenuOpen)}>
              <i className="icofont-navigation-menu"></i>
            </button>
          </div>
        </header>
        {/* End Header */}
      {navMenuOpen && (
      <nav className="mobile-nav d-lg-none">
                    <button type="button" className="close-active" onClick={() => setNavMenuOpen(!navMenuOpen)}>
              <i className="icofont-close"></i>
            </button>
              <ul>
                {menuConfig.map((menuItem) => (
                  <li className={pathname[0] === menuItem.key ? "active" : ""}>
                    <a href={`/${menuItem.key}`}>{menuItem.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
            )}
        {navMenuOpen && ( <div class="mobile-nav-overly"></div>)}
        <EnquiryFormModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </>
  );
};

export default HeaderTabMenus;
