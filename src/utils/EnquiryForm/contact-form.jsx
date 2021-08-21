import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
//import Toast from "react-bootstrap/Toast";
import "../../assets/css/style.css";
import { useToasts } from "react-toast-notifications";

const ContactForm = (props) => {
  const [state, handleSubmit] = useForm("xqkwgaod");
  const [showA, setShowA] = useState(true);
  const { addToast } = useToasts();

  const toggleShowA = () => setShowA(!showA);

  // const recaptchaValidation = () => {
  //   var el = document.getElementById("g-recaptcha-response");
  //   if (el) {
  //     el.setAttribute("required", "required");
  //   }
  // };

  // useEffect(() => recaptchaValidation(), []);

  if (state.submitting) {
    console.log("response", state.submitting);
  }

  // if (state.succeeded) {
  //   return (
  //     <Toast show={showA} onClose={toggleShowA}>
  //       <Toast.Header>
  //         <strong className="me-auto">Thank You...</strong>
  //       </Toast.Header>
  //       <Toast.Body>Our team will contact you soon...!</Toast.Body>
  //     </Toast>
  // <Alert variant="success" dismissible>
  //   <Alert.Heading>Thank You...</Alert.Heading>
  //   <p>Our team will contact you soon...!</p>
  // </Alert>
  //   );
  // }

  // if (state.errors) {
  //   return (
  //     <Toast show={showA} onClose={toggleShowA}>
  //     <Toast.Header>
  //       <strong className="me-auto">Thank You...</strong>
  //     </Toast.Header>
  //     <Toast.Body>{state.errors}</Toast.Body>
  //   </Toast>
  // <Alert variant="danger" dismissible>
  //   {console.log("errors", state.errors.entries)}
  //   <Alert.Heading>{state.errors}</Alert.Heading>
  // </Alert>
  //   );
  // }

  const clearForm = () => {
    // var captcha = document.getElementsByClassName("g-recaptcha")
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
        
    //     if(captcha) {
    //     captcha.reset();
    // }
    }
  };

  if (state.succeeded || state.errors) {
    clearForm();
  }

  // window.addEventListener("onload", function (e) {
  //   e.preventDefault();
  //   (e || window.event).returnValue = null;
  //   return null;
  // });


  useEffect(() => {
    if (state.succeeded) {
      addToast("Thank You, Our team will contact you soon...!", {
        appearance: "success",
      });
    }
  }, [addToast, state.succeeded]);

  // useEffect(() => {
  //   if (state.errors) {
  //     addToast("Sorry, unable to process now, try after sometime...", {
  //       appearance: "error",
  //     });
  //   }
  // }, [addToast, state.errors]);

 

  return (
    <>
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
            rows="3"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        {/* <div className="form-group">
          <div
            class="g-recaptcha"
            data-sitekey="6LdTWE8bAAAAAN6dh88ARJb7xl-r404INBqfZqAm"
            
          ></div> */}
          {/* <ReCAPTCHA
     data-sitekey="6LdTWE8bAAAAAN6dh88ARJb7xl-r404INBqfZqAm"
     theme="light"
   /> */}
        {/* </div> */}
        {!props.showSubmitBtn && (
          <button
            type="submit"
            className="contact-form-submit-btn"
            disabled={state.submitting}
            style={{}}
          >
            Submit
          </button>
        )}
      </form>
    </>
  );
};

export default ContactForm;
