import React from "react";
import HeaderTabMenus from "../Header/headerTabs";
import about_img from "../../assets/img/about.jpg";
import TestimonialsCarousel from "../Carousel/testimonial";
import Footer from "../Footer/footer";

const AboutUs = () => {
  return (
    <>
      <HeaderTabMenus />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>About Us</h2>
            <p>
            "The world is full of wonderful things you haven’t seen yet. Don’t ever give up on the chance of seeing them."- J.K. Rowling{" "}
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src={about_img} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>
                Who We Are ?
                </h3>
                <p>
                  Asbury Study Abroad Ltd, incorporated in the United Kingdom,
                  to provide proper guidance and support to all International
                  Students, who wish to pursue their higher education in the
                  world-renowned Universities in United Kingdom and Ireland. We
                  are committed to make your dream come true by giving you
                  professional advice to choose your interested course and
                  university. Our Knowledge in the UK job market, Educational
                  and Immigration System, help us to reach that goal.
                </p>
                <h3>Our Vision</h3>
                <p>
                  To be most reliable in the educational consultancy world,
                  providing 100% satisfaction to the students and parents who
                  seek for high standard, job-oriented education for those
                  students who seek high standard education from the Worlds
                  renowned universities.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        <TestimonialsCarousel />
      </main>
      {/* <!-- End #main --> */}
      <Footer />
    </>
  );
};

export default AboutUs;
