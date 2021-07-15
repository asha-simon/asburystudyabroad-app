import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img_1 from '../../assets/img/slider_images/img_1.jpg';
import img_2 from '../../assets/img/slider_images/img_2.jpg';
import img_3 from '../../assets/img/slider_images/img_3.jpg';
import img_4 from '../../assets/img/slider_images/img_4.jpg';
import './slider.css';
const HeaderSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_1}
            alt="First slide"
          />
            <Carousel.Caption data-aos="zoom-in"
          data-aos-delay="100">
           <h1>
            Success Through 
            <br />
            Knowledge{" "}
          </h1>
          <h2>Your bright future is our mission</h2>
          <a href="courses.html" className="btn-get-started">Get Started</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_2}
            alt="Second slide"
          />
          <Carousel.Caption data-aos="zoom-in"
          data-aos-delay="100">
            {/* <h1>
            Learning Today,
            <br />
            Leading Tomorrow{" "}
          </h1>
          <h2>Your bright future is our mission</h2> */}          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_3}
            alt="Third slide"
          />
          <Carousel.Caption data-aos="zoom-in"
          data-aos-delay="100">
           {/* <h1>
            Learning Today,
            <br />
            Leading Tomorrow{" "}
          </h1>
          <h2>Your bright future is our mission</h2> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img_4}
            alt="Fourth slide"
          />
          <Carousel.Caption data-aos="zoom-in"
          data-aos-delay="100">
           <h1>
            Learning Today,
            <br />
            Leading Tomorrow{" "}
          </h1>
          <h2>Your bright future is our mission</h2>
          <a href="courses.html" className="btn-get-started">Get Started</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeaderSlider;
