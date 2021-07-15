import React, { useState } from "react";
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
import UniversityList from "../../utils/UniversitiesList/university-list";
import { useHistory } from "react-router-dom";

const DestinationDetails = (props) => {
  const details = props.location.state;
  const history = useHistory();

  const goToPreviousPage = (e) => {
    e.preventDefault();
    history.goBack();
  }

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
                    <Breadcrumb.Item href="#" onClick={(e) => goToPreviousPage(e)}>Destinations</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>
                      {details.country}
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </div>
            <Row className="destination-form-row">
              <Col lg={5} md={4}>
                <ContactForm />
              </Col>
              <Col lg={7} md={8}>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      About UK
                      <ContextAwareToggle eventKey="0"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="destination-description">
                        <p>
                          United Kingdom is one of the highly developed country,
                          in terms of quality of life, personal security, social
                          engagement, environmental quality and engagement with
                          civic society. It consists of Island of Great Britain
                          which includes England, Scotland and Wales and the
                          northern portion of the Island of Ireland, having
                          different dialects, ancient languages, myths and
                          legend galore, unique communities and traditions.
                          England is the birthplace of William Shakespeare and
                          the Beatles, and the capital City - London is a major
                          international financial centre and one of the most
                          visited cities in the world. It is a home to stock
                          exchange and the bank of England. According to the
                          Better Life Index, UK is one of the best among
                          developed countries for quality of life. OECD latest
                          report says UK is one of best place to live and work.
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
            <Tab.Container defaultActiveKey="universities">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="why-uk">WHY STUDY IN UK</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="universities">UNIVERSITIES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home">REQUIRED TESTS</Nav.Link>
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
                    <Tab.Pane eventKey="why-uk">
                    <Container className="tab-pane-container">
                        <div className="tab-pane-header">
                        <h5>WHY STUDY IN UK ?</h5>
                        </div>
                      <p>
                        UK is well known for its educational reputation and
                        cultural vibrancy. UK education opens doors anywhere in
                        the world. UK’s world-renowned universities and the
                        innovative teaching approach will help the students to
                        reach their potential. Some of the universities have
                        centuries-old history in Britain for example Oxford and
                        Cambridge, both have been founded more than 800 years.
                        UK Universities taking a highest places in the world
                        university league table, nearly a fifth of the world’s
                        top 50 universities are in the UK. UK warmly welcomes
                        students from all nationalities. The UK universities are
                        offering wide range of degrees from Art, Business,
                        Engineering, health and Media studies. Moreover, the
                        period of courses are usually less compared to other
                        countries. A Masters degree (full time) takes only one
                        year to finish compared to USA where a Masters degree
                        requires 2 years to finish. UK universities are
                        maintaining an excellent standards in learning, research
                        and teaching. They are inspected regularly by the
                        Quality Assurance Agency for Higher Education. Also,
                        teaching and research at UK universities are rated by
                        the Teaching Excellence Framework (TEF) and Research
                        Excellence Framework (REF) respectively.
                      </p>
                      </Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="universities">
                      <Container className="universities-list-container">
                        <div className="universities-list-header">
                          <h5>Universities In UK</h5>
                        </div>
                        <UniversityList />
                      </Container>
                    </Tab.Pane>

                    <Tab.Pane eventKey="home">
                      <Container className="tab-pane-container">
                        <div className="tab-pane-header">  
                      <h5>Home Dashbord</h5>
                        </div>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                      </Container>
                    </Tab.Pane>

                    <Tab.Pane eventKey="contact">
                    <Container className="tab-pane-container">
                        <div className="tab-pane-header">  
                        <h5>Contact Info</h5>
                        </div>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                      </Container>
                    </Tab.Pane>

                    <Tab.Pane eventKey="rights">
                      <Container className="tab-pane-container">
                        <div className="tab-pane-header">  
                        <h5>WORK RIGHTS AND STAY BACK</h5>
                        </div>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                      </Container>
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
