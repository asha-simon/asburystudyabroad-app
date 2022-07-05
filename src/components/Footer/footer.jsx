import React from "react";
import { useState } from "react";
import logo from "../../assets/img/cropped_logo.png";
import "../../assets/css/style.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="footer-logo-part">
                    <a href="/home">
                    <figure>
                      <img src={logo} alt="logo" />
                    </figure>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 footer-contact">
                  {/* <h3>Asbury International</h3> */}
                  <h4>Locate Us</h4>
                  <div className="col-md-12 footer-contact-col">
                    <i className="icofont-google-map"></i>
                    <p>
                      Asbury International,<br/>
                      131 Ashburton Avenue,<br/>
                      IG3 9EW,<br/>
                      London,<br/>
                      United Kingdom</p>
                  </div>
                  <div className="col-md-12 footer-contact-col">
                    <i className="icofont-phone"></i>
                    <p>
                      <a href="tel: +447883390145"> +44 7883 390145 </a>
                    </p>
                  </div>
                  <div className="col-md-12 footer-contact-col">
                    <i className="icofont-envelope"></i>
                    <p> 
                      <a href="mailto:asburyintl@gmail.com">asburyintl@gmail.com</a></p>
                  </div>
                </div>
                </div>
              </div>


              <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-12 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i> <a href="/home">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/destinations">Destinations</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="/services">
                        Services
                        {/* Terms of service */}
                      </a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="contact-us">
                        Contact Us
                        {/* Privacy policy */}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-12 footer-newsletter">
                  <h4>Follow Us</h4>
                  <p>
                    Stay in touch and follow us,
                  </p>
                  <div className="social-links text-center pt-3 pt-md-0">
                    {/* <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a> */}
                    <a
                      href="https://www.facebook.com/AsburyUK-114425360888142"
                      className="facebook"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/asbury.uk/"
                      className="instagram"
                    >
                    
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCf-YLLLsX1aBJ_FrsleR_BA"
                      className="youtube"
                    >
                      <i className="bx bxl-youtube"></i>
                    </a>
                    {/* <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a> */}
                  </div>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="mr-md-auto ml-md-auto text-center text-md-left">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Asbury Study Abroad</span>
              </strong>
              . All Rights Reserved
              {/* | <a href="#">Privacy Policy</a> */}
            </div>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className={showScroll ? "back-to-top" : "back-to-top-hidden"}
        onClick={backToTop}
      >
        <i className="bx bx-up-arrow-alt"></i>
      </a>
      {/* WhatsApp icon */}
      {/* <a
        href="https://wa.me/917012894782"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a> */}
      {/* <div id="preloader"></div> */}
      {/* <!-- End Footer --> */}
    </>
  );
};

export default Footer;
