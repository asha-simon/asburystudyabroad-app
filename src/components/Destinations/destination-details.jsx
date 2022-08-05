import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import HeaderTabMenus from "../Header/headerTabs";
import Footer from "../Footer/footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import EnquiryFormHolder from "../../utils/EnquiryForm/enquiry-form";
import DestinationDetailTabs from "./destination-detail-tabs";

const DestinationDetails = (props) => {

  const details = props.location.state.details;
  const prevState = props.location.state.pathName;
  const history = useHistory();

  const goToPreviousPage = (e) => {
    e.preventDefault();
    history.goBack();
  };

  function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <button type="button" className="toggle-btn" onClick={decoratedOnClick}>
        {isCurrentEventKey ? (
          <i class="bx bxs-up-arrow"></i>
        ) : (
          <i class="bx bxs-down-arrow"></i>
        )}
      </button>
    );
  }

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <HeaderTabMenus />
      <main id="main" data-aos="fade-in">
        <section id="destination-details" className="destination-details">
          <Container fluid data-aos="fade-up">
            <Row>
              <div className="col-lg-12">
                <div className="destination-details-header">
                  <img
                    src={
                      require(`../../assets/img/countries/${details.destination_detail_img}`)
                        .default
                    }
                    className="img-fluid"
                    alt=""
                  />
                  <Breadcrumb className="destination-details-breadcrumbs">
                    <Breadcrumb.Item
                      href="#"
                      onClick={(e) => goToPreviousPage(e)}
                    >
                      {capitalize(prevState)}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>
                      {details.country}
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </Row>
            <Row className="destination-form-row">
              <Col lg={5}>
                <EnquiryFormHolder />
              </Col>
              <Col lg={7}>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      About {details.country}
                      <ContextAwareToggle eventKey="0"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="destination-description">
                        <p>
                          {details.description}
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      Documents Required
                      <ContextAwareToggle eventKey="1">
                        <i class="bx bxs-down-arrow"></i>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p>Documents may vary based on different universities,</p>
                        <ul>
                          <li>Resume</li>
                          <li>Statement of purpose/personal statement</li>
                          <li>Educational certificates from the 10th class onwards</li>
                          <li> Mark list,consolidated marklist/transcripts</li>
                          <li>Letter of recommendation</li>
                          <li>Passport</li>
                          <li>English language test results if any</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <!-- ======= Cource Details Tabs Section ======= --> */}
        <section id="destination-details-tabs" class="destination-details-tabs">
         <DestinationDetailTabs country={details.country} details={details} />
        </section>
        {/* <!-- End Cource Details Tabs Section --> */}
      </main>
      <Footer />
    </>
  );
};

export default DestinationDetails;
