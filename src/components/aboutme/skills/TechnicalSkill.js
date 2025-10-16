import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
  return (
    <div>
      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#fe3e57", fontWeight: 700 }}
              >
                85%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"c"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#fe3e57",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  C
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#54faae", fontWeight: 700 }}
              >
                85%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"cpp"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#54faae",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  C++
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#39c4ff", fontWeight: 700 }}
              >
                90%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"java"}
                    aria-valuenow={"90"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#39c4ff",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Java
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#f1f965", fontWeight: 700 }}
              >
                75%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"html"}
                    aria-valuenow={"75"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#f1f965",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  HTML
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#ff0173", fontWeight: 700 }}
              >
                75%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"css"}
                    aria-valuenow={"75"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#ff0173",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  CSS
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#ff8c2f", fontWeight: 700 }}
              >
                70%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"js"}
                    aria-valuenow={"70"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#ff8c2f",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  JavaScript
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#41f2ff", fontWeight: 700 }}
              >
                65%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"react"}
                    aria-valuenow={"65"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#41f2ff",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  React
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
