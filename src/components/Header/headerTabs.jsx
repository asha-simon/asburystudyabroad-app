/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import logo from "../../assets/img/logo_no_bg.png";
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
  const [showHome, setShowHome] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkScrollTop = () => {
    if(showHome) {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  }
  };

  window.addEventListener("scroll", checkScrollTop);

  useEffect(() => {
    if(pathname && pathname[0] === "home") {
      setShowHome(true);
    }
  },[checkScrollTop, pathname])

  return (
    <>
      {/* Header */}
      <Container fluid className="header-container fixed-top">
        <Row className="header-top-row">
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
        </Row>
        <header
          id="header"
          className={showHome ? (showScroll ? "header-bg-dark" : "header-bg-light") : "header-bg-dark"}
        >
          <Container className="d-flex align-items-center">
            {/* <h1 className="logo mr-auto">
            <a href="/home">ASBURY STUDY ABROAD</a>
          </h1> */}
            {/* Uncomment below if you prefer to use an image logo  */}
            <Row>
              <Col sm={3}>
                <a href="/home" className="logo mr-auto">
                  <img
                    src={logo}
                    alt=""
                    className={showHome ? (showScroll ? "img-fluid logo-small" : "img-fluid logo-large") : "img-fluid logo-small"}
                  />
                </a>
              </Col>
              <Col sm={9} className={"d-flex justify-content-end " +  (showHome ? (showScroll ? "align-items-center" : "align-items-start") : "align-items-center")}>
                <nav className={"nav-menu d-none d-lg-block " + (showHome ? (showScroll ? "light-font" : "dark-font") : "light-font")}>
                  <ul>
                    {menuConfig.map((menuItem) => (
                      <li
                        className={pathname[0] === menuItem.key ? "active" : ""}
                      >
                        <a href={`/${menuItem.key}`}>{menuItem.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Col>
              {/* nav-menu  */}
              {/* <a href="/login" id="login-btn" className="login-btn">
              Login
            </a> */}
              <button
                type="button"
                className="mobile-nav-toggle"
                onClick={() => setNavMenuOpen(!navMenuOpen)}
              >
                <i className="icofont-navigation-menu"></i>
              </button>
            </Row>
          </Container>
        </header>
        {/* End Header */}
        {navMenuOpen && (
          <nav className="mobile-nav d-lg-none">
            <button
              type="button"
              className="close-active"
              onClick={() => setNavMenuOpen(!navMenuOpen)}
            >
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
        {navMenuOpen && <div class="mobile-nav-overly"></div>}
        <EnquiryFormModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </>
  );
};

export default HeaderTabMenus;
