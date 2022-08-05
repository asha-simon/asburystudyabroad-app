import React, { useEffect } from "react";
import MapContainer from "../../utils/MapContainer";
import Footer from "../Footer/footer";
import HeaderTabMenus from "../Header/headerTabs";
import Icofont from "react-icofont";
import { useForm, ValidationError } from "@formspree/react";
import { useToasts } from "react-toast-notifications";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xpzkoojd");
  const { addToast } = useToasts();

  useEffect(() => {
    if (state.succeeded) {
      addToast(" Your message has been sent. Thank you!", {
        appearance: "success",
      });
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    }
  }, [addToast, state.succeeded]);

  return (
    <>
      <HeaderTabMenus />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              "Change your language and you change your thoughts."― Karl
              Albrecht.
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div data-aos="fade-up">
            {/* <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
            <MapContainer />
          </div>

          <div className="container" data-aos="fade-up">
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  {/* <div className="address"> */}
                  {/* <Icofont icon="icofont-google-map"/> */}
                  {/* <i className="icofont-google-map"></i> */}
                  {/* <h4>Location:</h4> */}
                  {/* <p>53 Ernald Avenue, London, United Kingdom, E6 3AL</p> */}
                  {/* </div> */}

                  <div className="email">
                    <Icofont icon="icofont-envelope" />
                    <h4>Email:</h4>
                    <p>admissions@asburystudyabroad.co.uk</p>
                  </div>

                  <div className="phone">
                    <Icofont icon="icofont-phone" />
                    <h4>Call:</h4>
                    <p>+44 7593 794424</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form className="php-email-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                        required
                      />
                        <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                      required
                    />
                   <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <div className="mb-3">
                    {/* {state.submitting && <div className="loading">Loading</div>}
                    <div className="error-message"></div> */}
                    {/* {state.succeeded && (
                      <div className={state.succeeded ? "sent-message-active" : "sent-message-none"} id="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    )} */}
                  </div>
                  <div className="text-center">
                    <button type="submit" disabled={state.submitting}>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}
      <Footer />
    </>
  );
};

export default ContactUs;
