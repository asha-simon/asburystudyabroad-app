import React from "react";
import "../assets/css/style.css";
import Header from "./Header/header";
import aboutImg from "../assets/img/about.jpg";
import acctBckgdImg from "../assets/img/courses/accounting.jpg";
import businessBckgdImg from "../assets/img/courses/business-management.jpg";
import cmptrscienceBckgdImg from "../assets/img/courses/computer-science-2.jpg";
import Footer from "./Footer/footer";
import DestinationCarousel from "./Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <main id="main">
        {/* About Section */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
              <p>About Us</p>
            </div>

            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src={aboutImg} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                {/* <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3> */}
                <p className="font-italic text-justify">
                Asbury is an educational consultants based in United Kingdom with sister partnerships in India.
                We provide support and advice to students to enroll at Universities in United Kingdom of Great Britain and Northern Ireland.
                </p>
                <p className="text-justify">
                  Our mission is to fulfill your goal.
                  We are committed to provide timely and professional support for all our students so that their journey to further education make simple and easy.
                  We understand that most of the students are in dilemma to choose their career after the completion of their plus two education and/or graduation.
                  Here, we can give our expert advice to students based on our knowledge and experience in the existing job market/ shortlisted jobs in UK & Ireland.
                  We will handle each application with utmost care and give full support and advice during any time of the application process.
                  We take it as a challenge to get admission in your chosen course and university.{" "}
                </p>
                <a href="/about-us" className="learn-more-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* <!-- ======= Why Us Section ======= --> */}
        <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Asbury?</h3>
                  <p>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit Asperiores
                    dolores sed et. Tenetur quia eos. Autem tempore quibusdam
                    vel necessitatibus optio ad corporis. */}
                    We are committed to make your dream come true by giving you professional advice to choose your interested course and university.
                    <ul>
                      <li>Has representation over 120 universities across UK and Ireland.</li>
                      <li>Globally recognized courses</li>
                      <li>Advice on document preparation; CV and Statement of Purpose (SOP)</li>
                    </ul>
                  </p>
                  <div className="text-center">
                    <a href="/about-us" className="more-btn">
                      Learn More <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-8 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Admission Processing</h4>
                        <p>
                          Professional and expert consultation to choose best course and university.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Career counselling</h4>
                        <p>
                          Our counselling will be based on our understanding on the existing laws, educational systems, and job market.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Visa & Immigration Support</h4>
                        <p>
                          Our experienced lawyers handling the visa processing and
                          timely advice on all immigration queries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Why Us Section --> */}

        {/* <!-- ======= Popular Courses Section ======= --> */}
        <section id="popular-courses" className="courses">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Courses</h2>
              <p>Popular Courses</p>
            </div>

            <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <a
                  href="#"
                  style={{ width: "100%", height: "100%", cursor: 'default' }}
                >
                  <div
                    className="course-item d-flex"
                    style={{
                      background: `url(${cmptrscienceBckgdImg}) no-repeat`,
                      backgroundSize: "cover",
                      backgroundPosition: "50% 50%",
                    }}
                  >
                    <div className="course-content" style={{ opacity: '1', cursor: 'default'}}>
                      <h4>Engineering & Technology</h4>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!-- End Course Item--> */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <a
                  href="#"
                  style={{ width: "100%", height: "100%", cursor: 'default' }}
                >
                  <div
                    className="course-item d-flex"
                    style={{
                      background: `url(${acctBckgdImg}) no-repeat`,
                      backgroundSize: "cover",
                      backgroundPosition: "50% 50%",
                    }}
                  >
                    <div className="course-content" style={{ opacity: '1', cursor: 'default'}}>
                      <h4>Accounting</h4>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!-- End Course Item--> */}

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <a
                  href="#"
                  style={{ width: "100%", height: "100%", cursor: 'default' }}
                >
                  <div
                    className="course-item d-flex"
                    style={{
                      background: `url(${businessBckgdImg}) no-repeat`,
                      backgroundSize: "cover",
                      backgroundPosition: "50% 50%",
                    }}
                  >
                    <div className="course-content" style={{ opacity: '1', cursor: 'default'}}>
                      <h4>Business Management</h4>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!-- End Course Item--> */}
            </div>
            <a href="/main-courses" className="find-course-btn">
              View All Courses
            </a>
          </div>
        </section>
        {/* <!-- End Popular Courses Section --> */}

        <DestinationCarousel />
      </main>
      <Footer />
    </>
  );
};

export default Home;
