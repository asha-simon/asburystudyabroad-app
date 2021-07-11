import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../Footer/footer";
import HeaderTabMenus from "../Header/headerTabs";
import Row from "react-bootstrap/esm/Row";
import event1 from "../../assets/img/services/cambridge-university.jpg";
import event2 from "../../assets/img/services/admission-support.jpg";
import event3 from "../../assets/img/services/career-counselling.jpg";
import event4 from "../../assets/img/services/applications.jpg"
import event5 from "../../assets/img/services/test-preparation.jpg";
import event6 from "../../assets/img/services/visa.jpg";
import event7 from "../../assets/img/services/pre-departure-sessions.jpg";

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
              Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
              Quia id aut similique quia voluptas sit quaerat debitis. Rerum
              omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}
        {/* <!-- ======= Events Section ======= --> */}
        <section id="events" class="events">
          <Container data-aos="fade-up">
            <Row>
            <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event1} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="">Mentor Support To Choose Courses And Universities</a>
                    </h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat
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
                    <h5 class="card-title">
                      <a href="">Admission Support</a>
                    </h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <div class="card-img">
                    <img src={event3} alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="">Career Counselling</a>
                    </h5>
                    <p class="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem doloremque laudantium, totam rem aperiam, eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo
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
                      <a href="">Application Process And Document Preparation</a>
                    </h5>
                    <p class="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem doloremque laudantium, totam rem aperiam, eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo
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
                    <h5 class="card-title">
                      <a href="">Test Preparation</a>
                    </h5>
                    <p class="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem doloremque laudantium, totam rem aperiam, eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo
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
                    <h5 class="card-title">
                      <a href="">Visa Counselling</a>
                    </h5>
                    <p class="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem doloremque laudantium, totam rem aperiam, eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo
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
                    <h5 class="card-title">
                      <a href="">Pre-departure Sessions</a>
                    </h5>
                    <p class="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem doloremque laudantium, totam rem aperiam, eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo
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
                      <a href="">Post-Arrival Assistance</a>
                    </h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        {/* <!-- End Events Section --> */}
      </main>
      <Footer />
    </>
  );
};

export default Services;
