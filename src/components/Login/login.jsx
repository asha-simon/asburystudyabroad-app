import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/img/logo.png";
import "./index.css";

const Login = () => {
  return (
    <>
      <Container className="login-container" fluid>
        {/* <Image src={logo} roundedCircle  /> */}
        <div className="login-header">
          {/* <Image
            // width={120}
            // height={128}
            alt="logo"
            src={logo}
          /> */}
          <div style={{height: '100px', background: 'url(require(../../assets/img/logo.png)).default'}}/>
          <a href="/">
            <i class="bx bxs-home"></i>
            Home
          </a>
        </div>
        <Container className="login-form-container">
          <h3>Sign In</h3>
          <form class="login-form" action="">
            <div class="input-floating-label">
              <input
                class="input"
                type="text"
                id="input"
                name="input"
                placeholder="username"
              />
              <label for="input">Username</label>
              <span class="focus-bg"></span>
            </div>
            <div class="input-floating-label">
              <input
                class="input"
                type="password"
                id="input"
                name="input"
                placeholder="password"
              />
              <label for="input">Password</label>
              <span class="focus-bg"></span>
            </div>
            <button id="submit" class="btn-submit">
              Sign In
            </button>
            <div className="login-bottom-section">
              <p className="sign-up-text">
                Don't have an account ?<a href="/signup"> Sign up</a>
              </p>
              <p className="forgot-password text-right">
                <a href="#">Forgot Password ?</a>
              </p>
            </div>
          </form>
        </Container>
      </Container>
    </>
  );
};

export default Login;
