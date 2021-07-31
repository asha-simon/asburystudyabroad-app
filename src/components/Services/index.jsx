import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../Footer/footer";
import HeaderTabMenus from "../Header/headerTabs";
import Row from "react-bootstrap/esm/Row";
import event1 from "../../assets/img/services/admission-support.jpg";
import event2 from "../../assets/img/services/cambridge-university.jpg";
import event3 from "../../assets/img/services/career-counselling.jpg";
import event4 from "../../assets/img/services/applications.jpg";
import event5 from "../../assets/img/services/accomodation_img.jpg";
import event6 from "../../assets/img/services/visa.jpg";
import event7 from "../../assets/img/services/pre-departure-sessions.jpg";
import event8 from "../../assets/img/services/post-arrival.jpg";

const Services = () => {
  return (
    <>
      <HeaderTabMenus />
      <main id="main" data-aos="fade-in">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Services</h2>
            <p>
              Our support will not stop once you are in UK, it will
              continue...We have a dedicated team to give you all support...{" "}
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}
        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" class="services">
          <Container data-aos="fade-up">
            <Row>
              <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event3} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Career Counselling</h5>
                    <p class="card-text">
                      We provide personalized and professional career
                      counselling to the students which will help them to choose
                      their perfect course and the university. Most of the
                      students are confused especially after their Plus
                      two/Higher secondary and/or after under graduation. We are
                      here to support you in such a situation so that you can
                      take a firm step on your future path. Our counselling will
                      be based on our understanding on the existing laws,
                      educational systems, and job market.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event2} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Admission Processing</h5>
                    <p class="card-text">
                      Our dedicated team will process the applications very
                      quickly so that you will get a decision from the
                      university within 1 to 2 weeks maximum. We are committed
                      to scrutinize all the documents provided before submission
                      to the University. Our support includes advice to
                      preparation of the documents such as CV, Statement of
                      Purpose (Personal Statements), Research Proposals etc.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event4} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      Application Process And Document Preparation
                    </h5>
                    <p class="card-text">
                      We give advice and special attention during the
                      application process wheather it's online or offline.
                      Advice on document preparation like CV and Statement of
                      Purpose (SOP) and cross-checking all the required
                      documents for making it error-free, if there's an error or
                      imperfections in these documents, it will get rejected.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event6} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Visa Processing</h5>
                    <p class="card-text">
                      Our dedicated immigration lawyers handling the visa
                      processing, which means 100% success rate.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event1} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      Help and advice to further studies or employment
                    </h5>
                    <p class="card-text">
                      Our dedicated team in UK provide professional advice to
                      further studies or Tier 2 work visa.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event8} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      Pick up and drop off from the airport
                    </h5>
                    <p class="card-text">
                      We make students and parents hassle free by providing pick
                      up and drop off from the airport to the accommodation.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event5} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Accomodation Assistance</h5>
                    <p class="card-text">
                      We will provide all support to the students for finding
                      the suitable accommodation near to the university with
                      cost efficient. We will support the students in finding
                      suitable part-time jobs.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event7} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Immigration Support</h5>
                    <p class="card-text">
                      All immigration related queries are handled by a team of
                      solicitors based in UK. Assistance will be provided for
                      further visa extension, Post study work visa processing,
                      Tier 2 visa processing. Also, we do support the students
                      for their Indian passport renewal/PCO certificates, POA
                      and other Indian High Commission related works.
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        {/* <!-- End Services Section --> */}
      </main>
      <Footer />
    </>
  );
};

export default Services;
