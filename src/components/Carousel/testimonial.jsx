import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testimonials_1 from "../../assets/img/testimonials/testimonials-1.jpg";
import testimonials_2 from "../../assets/img/testimonials/testimonials-2.jpg";
import testimonials_3 from "../../assets/img/testimonials/testimonials-3.jpg";
import testimonials_4 from "../../assets/img/testimonials/testimonials-4.jpg";
import testimonials_5 from "../../assets/img/testimonials/testimonials-5.jpg";

const TestimonialsCarousel = () => {
  const options = {
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      900: {
        items: 2,
      },
    },
  };

  return (
    <>
      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Testimonials</h2>
            <p>What are they saying</p>
          </div>

          {/* <div class="owl-carousel testimonials-carousel" data-aos="zoom-in" data-aos-delay="100"> */}
          <OwlCarousel
            items={2}
            className="owl-theme destinations-carousel"
            {...options}
          >
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <img src={testimonials_1} class="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <img src={testimonials_2} class="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <img src={testimonials_3} class="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <img src={testimonials_4} class="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <img src={testimonials_5} class="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
          </OwlCarousel>
          {/* </div> */}
        </div>
      </section>
      {/* <!-- End Testimonials Section --> */}
    </>
  );
};

export default TestimonialsCarousel;
