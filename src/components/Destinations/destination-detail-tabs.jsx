import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import UniversityList from "../../utils/UniversitiesList/university-list";

const DestinationDetailTabs = (props) => {
  const details = props.details;
  return (
    <>
      <Container className="aos-init aos-animate">
        <Tab.Container defaultActiveKey="why-uk">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="why-uk">
                    WHY STUDY IN {props.country.toUpperCase()}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="universities">UNIVERSITIES</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="costs">LIVING COSTS</Nav.Link>
                </Nav.Item> */}
               {props.country === "UK" && (
               <Nav.Item>
                  <Nav.Link eventKey="rights">
                    WORK RIGHTS AND STAY BACK
                  </Nav.Link>
                </Nav.Item>
                )}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="why-uk">
                  <Container className="tab-pane-container">
                    <div className="tab-pane-header">
                      <h5>WHY STUDY IN {props.country.toUpperCase()} ?</h5>
                    </div>
                    <p>{details.reason}</p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="universities">
                  <Container className="universities-list-container">
                    <div className="universities-list-header">
                      <h5>Universities In {props.country}</h5>
                    </div>
                    <UniversityList country={props.country} />
                  </Container>
                </Tab.Pane>

                {/* <Tab.Pane eventKey="costs">
                  <Container className="tab-pane-container">
                    <div className="tab-pane-header">
                      <h5>LIVING COSTS</h5>
                    </div>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.
                    </p>
                  </Container>
                </Tab.Pane> */}

              {props.country === "UK" && (
              <Tab.Pane eventKey="rights">
                  <Container className="tab-pane-container">
                    <div className="tab-pane-header">
                      <h5>WORK RIGHTS AND STAY BACK</h5>
                    </div>
                    <p>
                      International students can work 20 hrs per week to get
                      practical exposure. Upon successful completion of the
                      course, you will be able to apply for Post study work
                      (Graduate Route Visa), without any sponsors, that means
                      you are free to look for any jobs. 2 years stay back
                      available for Bachelors Degree students/Post Graduate
                      students whereas 3 years stay back available for PhD or
                      research students.
                    </p>
                  </Container>
                </Tab.Pane>
                )}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};

export default DestinationDetailTabs;
