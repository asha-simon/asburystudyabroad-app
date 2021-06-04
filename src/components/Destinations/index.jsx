import React from "react";
import Footer from "../Footer/footer";
import HeaderTabMenus from "../Header/headerTabs";
import uk_img from "../../assets/img/countries/uk.jpg";
import ireland_img from "../../assets/img/countries/ireland-dublin_2.jpg";

const Destinations = () => {
  return (
    <>
      <HeaderTabMenus />
      <main id="main" data-aos="fade-in">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div class="breadcrumbs">
          <div class="container">
            <h2>Destinations</h2>
            <p>
              Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
              Quia id aut similique quia voluptas sit quaerat debitis. Rerum
              omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Destinations Section ======= --> */}
        <section id="destinations" class="destinations">
          <div class="container" data-aos="fade-up">
            <div class="row" data-aos="zoom-in" data-aos-delay="100">
              <div class="col-lg-6 col-md-6 d-flex align-items-stretch">
                <div class="country">
                  <img src={uk_img} class="img-fluid" alt="" />
                  <div class="country-content">
                    <a href="destination-details.html">
                      <h4>Study in UK</h4>
                    </a>
                    <p>
                    The nation has a long history of major contributions to the arts and sciences
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 d-flex align-items-stretch">
                <div class="country">
                  <img src={ireland_img} class="img-fluid" alt="" />
                  <div class="country-content">
                    <a href="destination-details.html">
                      <h4>Study in Ireland</h4>
                    </a>
                    <p>
                      The world's biggest and best business have established key strategic research facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Trainers Section --> */}
      </main>
      {/* <!-- End #main --> */}
      <Footer />
    </>
  );
};

export default Destinations;
