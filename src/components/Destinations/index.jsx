import React from "react";
import Footer from "../Footer/footer";
import HeaderTabMenus from "../Header/headerTabs";
import { destinationDetails } from "./destination";

const Destinations = ({ history }) => {
 
 //let history = useHistory();

 const gotoDestinationDetails = (e, details) => {
       e.preventDefault();
       history.push("/destination-details", details);
 }

  return (
    <>
      <HeaderTabMenus />
      <main id="main" data-aos="fade-in">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div className="breadcrumbs">
          <div className="container">
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
        <section id="destinations" className="destinations">
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay="100">
              {destinationDetails.map((item, index) => (
                <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                  <div className="country">
                    <img src={require(`../../assets/img/countries/${item.destination_img}`).default} className="img-fluid" alt="" />
                    <div className="country-content">
                      <a href="#" onClick={(e) => gotoDestinationDetails(e, item)}>
                        <h4>Study in {item.country}</h4>
                      </a>
                      <p>
                        {item.brief_note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                <div className="country">
                  <img src={ireland_img} className="img-fluid" alt="" />
                  <div className="country-content">
                    <a href="destination-details.html">
                      <h4>Study in Ireland</h4>
                    </a>
                    <p>
                      The world's biggest and best business have established key strategic research facilities.
                    </p>
                  </div>
                </div>
              </div> */}
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
