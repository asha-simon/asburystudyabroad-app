import React from "react";
import Footer from "../Footer/footer";
import HeaderTabMenus from "../Header/headerTabs";
import course1_img from "../../assets/img/course-1.jpg";
import course2_img from "../../assets/img/courses/business-management.jpg";
import course3_img from "../../assets/img/course-3.jpg";
import { courseList } from "./courses";


const MainCourses = () => {
  return (
    <>
      <HeaderTabMenus />
      <main id="main" data-aos="fade-in">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div class="breadcrumbs">
          <div class="container">
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
        <section id="courses" class="courses">
          <div class="container" data-aos="fade-up">
            <div class="row" data-aos="zoom-in" data-aos-delay="100">
            {courseList.map((item, index) => (
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch item-col">
                <div class="course-item">
                  <img
                    src= {require(`../../assets/img/courses/${item.image}`).default}
                    class="img-fluid"
                    alt="..."
                  />
                  <div class="course-content">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4>
                        <a href="/sub-course-list">{item.courseName}</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              // <!-- End Course Item--> 
            )
            )}
              {/* <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="course-item">
                  <img
                    src={course1_img}
                    class="img-fluid"
                    alt="..."
                  />
                  <div class="course-content">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4>
                        <a href="course-details.html">Accounting</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- End Course Item--> */}

              {/* <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="course-item">
                  <img
                    src={course2_img}
                    class="img-fluid"
                    alt="..."
                  />
                  <div class="course-content">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4>
                        <a href="course-details.html">Business Management</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- End Course Item--> */}

              {/* <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div class="course-item">
                  <img
                    src={course3_img}
                    class="img-fluid"
                    alt="..."
                  />
                  <div class="course-content">
                    <div class="d-flex justify-content-between align-items-center mb-3">
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
