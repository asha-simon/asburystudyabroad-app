import React from "react";
import Footer from "../Footer/footer";
import HeaderTabMenus from "../Header/headerTabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { coursesForBusiness } from "./sub-courses";

const SubCourseList = () => {
  return (
    <>
      <HeaderTabMenus />
      <main id="main" data-aos="fade-in">
        <section id="course-list" className="course-list">
          <Container data-aos="fade-up">
            <h4>All Courses</h4>
            <Row
              lg={3}
              md={2}
              className="g-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {coursesForBusiness.map((item, index) => (
                //   <Row data-aos="zoom-in" data-aos-delay="100">
                //   <Col lg={4} md={6} className="d-flex align-items-stretch">
                // <div className="course-item">
                //     <img
                //       src= {require(`../../assets/img/courses/${item.image}`).default}
                //       className="img-fluid"
                //       alt="..."
                //     />
                //   </div>
                // </Col>
                // <Col lg={7} md={6} className="d-flex align-items-stretch">
                // <div className="course-content">
                //          <div className="d-flex justify-content-between align-items-center mb-3 direction">
                //         <h4>
                //           <a href="course-details.html">{item.courseName}</a>
                //         </h4>
                //         <p>University of HertFordShire</p>
                //         <p>Degree</p>
                //         <p>World Rank : <span></span></p>
                //         <p>
                //         <i className="fa fa-clock-o" aria-hidden="true"></i>
                //            2 years</p>
                //       </div>
                //     </div>
                // </Col>
                // </Row>
                <Col className="d-flex">
                  <Card style={{ width: "20rem" }}>
                    <Card.Img
                      variant="top"
                      src={require(`../../assets/img/${item.image}`).default}
                    />
                    <Card.Body>
                      <Card.Title>{item.courseName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {item.university}
                      </Card.Subtitle>
                      <Card.Text>
                        <p>Degree</p>
                        <p>
                          <i className="fa fa-clock-o"></i>&nbsp; 4 Years
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SubCourseList;
