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
        <div class="breadcrumbs" data-aos="fade-in">
          <div class="container">
            <h2>About Us</h2>
            <p>
              Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
              Quia id aut similique quia voluptas sit quaerat debitis. Rerum
              omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div
                class="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src={about_img} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p class="font-italic">
                  In order to provide proper guidance and support to the
                  students across the world who wish to come to UK for their
                  further studies, Asbury Study Abroad Ltd, incorporated in the
                  UK. The proper advice is including but not limited to finding
                  suitable course and university as per the students taste and
                  attributes, filing the admission applications in the chosen
                  universities, helping the students to write their personal
                  statements, preparing them for the credibility interviews,
                  verifying the documents for the CAS application, filing the
                  visa application and arranging suitable accommodation.
                </p>
                <h3>OUR VISION</h3>
                <p>
                  Our knowledge in the educational system and immigration rules
                  in the UK will help us to guide our students in a proper way
                  to make their dream come true. Our specialty which stands out
                  from other educational consultants is that we never stop
                  supporting the students once they reached UK but extends our
                  sincere support to them as and when required, including
                  helping them to find out the part time jobs, and also for
                  further visa extension, if the students are eligible in
                  accordance with the applicable laws and regulations existing
                  in the United Kingdom.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        <TestimonialsCarousel />
      </main>
      {/* <!-- End #main --> */}
      <Footer/>
    </>
  );
};

export default AboutUs;
