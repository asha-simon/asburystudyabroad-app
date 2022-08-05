import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Multiselect from "multiselect-react-dropdown";

const SignUp = () => {
  const countryList = [
    { key: "ireland", name: "Ireland" },
    { key: "uk", name: "UK" },
  ];

  return (
    <Container fluid className="sign-up-container">
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Full name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          {/* <Form.Control as="select" defaultValue="Choose a country you want study">
              <option>Choose a country you want study</option>
              <option value="ireland">Ireland</option>
              <option value="uk">UK</option>
            </Form.Control> */}
          {/* <Multiselect data={countryList} multiple /> */}
          <Multiselect
            displayValue="name"
            placeholder="Select your preferred countries..."
            onRemove={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={countryList}
            showCheckbox
            avoidHighlightFirstOption
            hidePlaceholder
            closeOnSelect={false}
            selectionLimit={2}
            style={{
              multiselectContainer: {
                background: "#fff",
                color: "#007bff",
              },
              optionContainer: { background: "#E4E4E4" },
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block submit-btn">
          Sign Up
        </button>
        <p className="sign-in-link text-right">
          Already registered ? <a href="/login">Sign In</a>
        </p>
      </form>
    </Container>
  );
};

export default SignUp;
