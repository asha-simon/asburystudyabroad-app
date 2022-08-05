/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../Footer/footer";
import HeaderTabMenus from "../Header/headerTabs";
import { courseList } from "./courses";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const MainCourses = () => {
  const history = useHistory();

  const addMainCategories = () => {};

  const gotoSubCourses = (e, item) => {
    e.preventDefault();
    history.push(`/main-courses/${item.id}`);
  };

  useEffect(() => {
    addMainCategories();
  }, []);

  return (
    <>
      <HeaderTabMenus />
      <main id="main" data-aos="fade-in">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Courses</h2>
            <p>
            "The beautiful thing about learning is that no one can take it away from you" – B. B. King{" "}
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
                      src={
                        require(`../../assets/img/courses/${item.image}`)
                          .default
                      }
                      className="img-fluid"
                      alt="..."
                    />
                    <div className="course-content">
                      <div className="d-flex">
                        <h4>
                          <a href="#" 
                          // onClick={(e) => gotoSubCourses(e, item)}
                          >
                            {item.courseName}
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="course-overlay">
                      <h4>{item.courseName}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
                // <!-- End Course Item-->
              ))}
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
