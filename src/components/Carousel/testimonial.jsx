import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testimonials_1 from "../../assets/img/testimonials/Agnes-photo.jpg";
import testimonials_2 from "../../assets/img/testimonials/testimonials-2.jpg";
import testimonials_3 from "../../assets/img/testimonials/testimonials-3.jpg";
import { Col, Container, Row } from "react-bootstrap";
import testimonial_video from '../../assets/videos/testimonial-video-1.mp4';

const TestimonialsCarousel = () => {
  const options = {
    autoplay: true,
    dots: true,
    loop: true,
    margin: 8,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
  };

  return (
    <>
      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What are they saying</p>
          </div>

          {/* <div className="owl-carousel testimonials-carousel" data-aos="zoom-in" data-aos-delay="100"> */}
          <Row data-aos="zoom-in" data-aos-delay="100">
            <Col lg={6}>
              <Container fluid className="video-conatiner">
                <video src={testimonial_video} controls height="400"/>
              </Container>
            </Col>
            <Col lg={6}>
              <OwlCarousel
                items={2}
                className="owl-theme destinations-carousel"
                {...options}
              >
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img
                      src={testimonials_1}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Agnus Susan Joshua</h3>
                    <h4>Kingston University</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      My journey to studying abroad happened with the help of
                      Asbury Study Abroad in the UK. Presently, am a student at
                      Kingston University pursuing Msc. International Business
                      Management. I am thankful to Raji Mam for helping me to
                      choose the right university and courses. She helped to get
                      my visa without much effort from my side. Also, Raji Mam
                      was very much accessible and was spontaneous in responding
                      to my queries. I am thankful to her for their guidance and
                      for making my dream come true. Wishing the best for the
                      team Asbury Study Abroad.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                {/* <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img
                      src={testimonials_2}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div> */}
              </OwlCarousel>
            </Col>
          </Row>
          {/* </div> */}
        </div>
      </section>
      {/* <!-- End Testimonials Section --> */}
    </>
  );
};

export default TestimonialsCarousel;
