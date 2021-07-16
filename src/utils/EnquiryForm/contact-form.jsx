import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Container from "react-bootstrap/Container";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mknkbaqg");

  const recaptchaValidation = () => {
    var el = document.getElementById("g-recaptcha-response");
    if (el) {
      el.setAttribute("required", "required");
    }
  };

  useEffect(() => recaptchaValidation(), []);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Container fluid className="contact-form">
      <h2>Quick Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label>Name</label> */}
          <input
            id="name"
            name="name"
            placeholder="Name"
            className="contact-form-control"
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="email">Email Address</label> */}
          <input
            id="email"
            type="email"
            name="_replyto"
            placeholder="Email"
            className="contact-form-control"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          {/* <label>Phone</label> */}
          <input
            id="phone"
            type="phone"
            name="phone"
            placeholder="Phone"
            className="contact-form-control"
          />
        </div>
        <div className="form-group">
          {/* <label>Message</label> */}
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="contact-form-control"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <div
            class="g-recaptcha"
            data-sitekey="6LcMrXAbAAAAAKKBhe7TJfrY8-fiE80ex6l6F4xX"
          ></div>
        </div>
        <button type="submit" className="contact-form-submit-btn" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Container>
  );
};

export default ContactForm;
