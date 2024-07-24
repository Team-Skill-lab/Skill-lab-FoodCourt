import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import * as bd from "react-basic-design";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";
import '../css/Feedback.css';

export default function Feedback() {
  const [rtl, setRTL] = useState(bd.helper.getRTL());
  const [darkMode, setDarkMode] = useState(bd.helper.isDarkMode());

  function changeRTL(value) {
    setRTL(value);
    bd.helper.setRTL(value);
  }

  function changeDarkMode(value) {
    setDarkMode(value);
    bd.helper.setTheme(value ? "mui-dark" : "mui-light");
  }

  return (
    <div className="Main-Container">
      <bd.Paper className="bd-Paper">
        <Form autoComplete="off">
          <div className="text-primary text-center mb-4">
            <FaEnvelope style={{ fontSize: 50 }} />
            <h3 className="mt-3  formAll" >Food Court Feedback Form</h3>
          </div>

          <FloatingLabel label="Email address" className="dense has-icon mb-3">
            <Form.Control
              name="email"
              type="email"
              placeholder="yourName@gmail.com"
            />
            <FaUserCircle className="position-absolute" style={{ right: 10, top: 10 }} />
          </FloatingLabel>

          <Row>
            <Col md>
              <FloatingLabel label="Full Name" className="dense mb-3">
                <Form.Control
                  name="fullName"
                  type="text"
                  placeholder="FullName"
                  autoComplete="off"
                />
              </FloatingLabel>
            </Col>

            <Col md>
              <FloatingLabel label="Type" className="dense mb-3">
                <Form.Select name="type" placeholder="Type">
                  <option>Food Quality</option>
                  <option>Service Quality</option>
                  <option>Cleanliness</option>
                  <option>Ambiance</option>
                  <option>Additional Comments and Suggestions</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>

          <FloatingLabel label="Message" className="dense mb-3">
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Message"
              style={{ height: 100 }}
            />
          </FloatingLabel>

          <bd.Button
            color="yellow"
            size="lg"
            type="button"
            className="bd-Button d-block m-auto w-100"
          >
            SEND MESSAGE
          </bd.Button>
        </Form>
      </bd.Paper>
    </div>
  );
}
