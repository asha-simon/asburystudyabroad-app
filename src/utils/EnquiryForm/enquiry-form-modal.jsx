import { Modal, Button } from "react-bootstrap";
import React, { useEffect } from "react";
import ContactForm from "./contact-form";
import "./index.css";
import { useForm, ValidationError } from "@formspree/react";
import { useToasts } from "react-toast-notifications";

const EnquiryFormModal = (props) => {
  const [state, handleSubmit] = useForm("xqkwgaod");
  const { addToast } = useToasts();

  
  const handleSubmitBtn = () => {
    handleSubmit();
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      addToast("Thank You, Our team will contact you soon...!", {
        appearance: "success",
      });
    }
  }, [addToast, state.succeeded]);

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Talk to our expert</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <ContactForm showSubmitBtn={true} parentCallback={callbackFunction} /> */}
          <form>
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
              <input
                id="email"
                type="email"
                name="_replyto"
                placeholder="Email"
                className="contact-form-control"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <input
                id="phone"
                type="phone"
                name="phone"
                placeholder="Phone"
                className="contact-form-control"
              />
            </div>
            <div className="form-group">
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
            <div className="divider" />
            <Button variant="primary" type="submit" onClick={handleSubmitBtn}>
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EnquiryFormModal;
