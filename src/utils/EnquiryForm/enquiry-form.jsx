import React from "react";
import Container from "react-bootstrap/Container";
import ContactForm from "./contact-form";
import '../../assets/css/style.css';

const EnquiryFormHolder = () => {
    return(
        <>
        <Container fluid className="contact-form">
        <h2>Quick Enquiry</h2>
        <ContactForm showSubmitBtn={false}/>
        </Container>
        </>
    )
}

export default EnquiryFormHolder;

