import React from "react";
import Footer from "../Footer/footer";
import HeaderTabMenus from "../Header/headerTabs";
import course1_img from "../../assets/img/course-1.jpg";
import course2_img from "../../assets/img/courses/business-management.jpg";
import course3_img from "../../assets/img/course-3.jpg";
import { courseList } from "./courses";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


const MainCourses = () => {

const history = useHistory();

const addMainCategories = () => {
}

const gotoSubCourses = (e, item) => {
  e.preventDefault();
  history.push(`/main-courses/${item.id}`);
}

useEffect(() => {
  addMainCategories()
}, [])


  return (
    <>
      <HeaderTabMenus />
      <main id="main" data-aos="fade-in">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Courses</h2>
            <p>
              Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
              Quia id aut similique quia voluptas sit quaerat debitis. Rerum
              omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Courses Section ======= --> */}
        <section id="courses" className="courses">
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay="100">
            {courseList.map((item, index) => (
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch item-col">
                <div className="course-item">
                  <img
                    src= {require(`../../assets/img/courses/${item.image}`).default}
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex">
                      <h4>
                        <a href="#" onClick={(e) => gotoSubCourses(e, item)}>{item.courseName}</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              // <!-- End Course Item--> 
            )
            )}
              {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    src={course1_img}
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>
                        <a href="course-details.html">Accounting</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- End Course Item--> */}

              {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img
                    src={course2_img}
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>
                        <a href="course-details.html">Business Management</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- End Course Item--> */}

              {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img
                    src={course3_img}
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>
                        <a href="course-details.html">Computer Science</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- End Course Item--> */}
            </div>
          </div>
        </section>
        {/* <!-- End Courses Section --> */}
      </main>
      {/* <!-- End #main --> */}
      <Footer />
    </>
  );
};

export default MainCourses;
