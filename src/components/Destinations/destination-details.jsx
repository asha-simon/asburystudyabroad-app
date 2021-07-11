import React from "react";
import Container from "react-bootstrap/Container";
import HeaderTabMenus from "../Header/headerTabs";
import ContactForm from "../../utils/EnquiryForm/contact-form";
import Footer from "../Footer/footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { useContext } from "react";

const DestinationDetails = (props) => {
  const details = props.location.state;

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

  return (
    <>
      <HeaderTabMenus />
      <main id="main">
        <section id="destination-details" className="destination-details">
          <Container fluid data-aos="fade-up">
            <div className="row">
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
                    <Breadcrumb.Item href="#">Destinations</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>
                      {details.country}
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </div>
            <Row className="destination-form-row">
              <Col lg={6}>
                <ContactForm />
              </Col>
              <Col lg={6}>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      Why study in UK ?
                      <ContextAwareToggle eventKey="0"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="destination-description">
                        <p>
                          A UK education opens doors, wherever you go in the
                          world. From our world-recognised universities to our
                          innovative teaching approach and the leading minds who
                          deliver it, we have what you need to reach your
                          potential. The UK has been the preferred choice for
                          some of the most important minds in history. One in
                          four world leaders has studied in the UK, so if you’re
                          dreaming of achieving big things, you can be sure
                          you’re in the right place in the UK.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      Documents Needed
                      <ContextAwareToggle eventKey="1">
                        <i class="bx bxs-down-arrow"></i>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                {/* <Container fluid className="destination-description">
                  <h2>Why study in UK ?</h2>
                  <p>
                    A UK education opens doors, wherever you go in the world.
                    From our world-recognised universities to our innovative
                    teaching approach and the leading minds who deliver it, we
                    have what you need to reach your potential. The UK has been
                    the preferred choice for some of the most important minds in
                    history. One in four world leaders has studied in the UK, so
                    if you’re dreaming of achieving big things, you can be sure
                    you’re in the right place in the UK.
                  </p>
                </Container> */}
              </Col>
            </Row>
          </Container>
        </section>

        {/* <!-- ======= Cource Details Tabs Section ======= --> */}
        <section id="destination-details-tabs" class="destination-details-tabs">
          <Container className="aos-init aos-animate">
            <Tab.Container defaultActiveKey="profile">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="home">REQUIRED TESTS</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="profile">UNIVERSITIES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="contact">LIVING COSTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="rights">
                        WORK RIGHTS AND STAY BACK
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="home">
                      <h5>Home Dashbord</h5>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="profile">
                      <h5>Profile Details</h5>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="contact">
                      <h5>Contact Info</h5>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="rights">
                      <h5>Contact Info</h5>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </section>
        {/* <!-- End Cource Details Tabs Section --> */}
      </main>
      <Footer />
    </>
  );
};

export default DestinationDetails;
