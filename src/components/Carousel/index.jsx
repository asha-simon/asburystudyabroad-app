import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import uk_img from '../../assets/img/countries/uk.jpg';
import ireland_img from '../../assets/img/countries/ireland-dublin_2.jpg';

const DestinationCarousel = () => {
    const options = {
    autoplay: false,
    dots: false,
    loop: false,
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoplayTimeout: 7000,
    smartSpeed: 400,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 2
      },
    }
    };

  return (
    <>
      {/* <!-- ======= Destinations Section ======= --> */}
      <section id="destinations" className="destinations">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Destinations</h2>
            <p>Most Popular Destinations</p>
          </div>

          <div className="row owl-slider" data-aos="zoom-in" data-aos-delay="100">
            <OwlCarousel items={2} className="owl-theme destinations-carousel" {...options}>
              {/* <div id="carousel" className="owl-carousel destinations-carousel"> */}
                <div className="col d-flex align-items-stretch item">
                  <div className="country">
                    <img
                      src={uk_img}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="country-content">
                      <h4>UK</h4>
                      <p>
                      The nation has a long history of major contributions to the arts and sciences.
                      </p>
                    </div>
                  </div>
                </div>
              
              <div className="col d-flex align-items-stretch item">
                <div className="country">
                  <img
                    src={ireland_img}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="country-content">
                    <h4>Ireland</h4>
                    <p>
                    The world's biggest and best business have established key strategic research facilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* </div> */}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationCarousel;
