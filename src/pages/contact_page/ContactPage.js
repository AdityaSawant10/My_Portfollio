import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>Contact Me</h1>
            </Zoom>
          </div>
          
          <Row className="mt-5 justify-content-center">
            <Col md={8}>
              <Fade up>
                <div style={{
                  backgroundColor: "rgba(142, 70, 186, 0.1)",
                  padding: "40px",
                  borderRadius: "15px",
                  border: "1px solid rgba(251, 217, 173, 0.3)",
                  textAlign: "center"
                }}>
                  <p style={{
                    color: "#fbd9ad",
                    fontSize: "18px",
                    marginBottom: "40px",
                    lineHeight: "1.6"
                  }}>
                    I'm always open to collaboration, interesting projects, or just a friendly tech chat.
                  </p>
                  
                  <Row className="g-4">
                    <Col md={4}>
                      <Fade bottom delay={100}>
                        <div style={{
                          padding: "20px",
                          backgroundColor: "rgba(251, 217, 173, 0.1)",
                          borderRadius: "10px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "rgba(251, 217, 173, 0.2)";
                          e.target.style.transform = "translateY(-5px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "rgba(251, 217, 173, 0.1)";
                          e.target.style.transform = "translateY(0)";
                        }}>
                          <FiMail style={{ fontSize: "40px", color: "#eb90ff", marginBottom: "15px" }} />
                          <h4 style={{ color: "#fbd9ad", marginBottom: "10px" }}>Email</h4>
                          <a 
                            href="mailto:sawant.aditya102005@gmail.com"
                            style={{
                              color: "#fbd9ad",
                              textDecoration: "none",
                              fontSize: "14px",
                              wordBreak: "break-all"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#eb90ff";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "#fbd9ad";
                            }}
                          >
                            sawant.aditya102005@gmail.com
                          </a>
                        </div>
                      </Fade>
                    </Col>
                    
                    <Col md={4}>
                      <Fade bottom delay={200}>
                        <div style={{
                          padding: "20px",
                          backgroundColor: "rgba(251, 217, 173, 0.1)",
                          borderRadius: "10px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "rgba(251, 217, 173, 0.2)";
                          e.target.style.transform = "translateY(-5px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "rgba(251, 217, 173, 0.1)";
                          e.target.style.transform = "translateY(0)";
                        }}>
                          <FiPhone style={{ fontSize: "40px", color: "#eb90ff", marginBottom: "15px" }} />
                          <h4 style={{ color: "#fbd9ad", marginBottom: "10px" }}>Phone</h4>
                          <a 
                            href="tel:+917755930013"
                            style={{
                              color: "#fbd9ad",
                              textDecoration: "none",
                              fontSize: "16px"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#eb90ff";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "#fbd9ad";
                            }}
                          >
                            +91 7755930013
                          </a>
                        </div>
                      </Fade>
                    </Col>
                    
                    <Col md={4}>
                      <Fade bottom delay={300}>
                        <div style={{
                          padding: "20px",
                          backgroundColor: "rgba(251, 217, 173, 0.1)",
                          borderRadius: "10px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "rgba(251, 217, 173, 0.2)";
                          e.target.style.transform = "translateY(-5px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "rgba(251, 217, 173, 0.1)";
                          e.target.style.transform = "translateY(0)";
                        }}>
                          <FaLinkedinIn style={{ fontSize: "40px", color: "#eb90ff", marginBottom: "15px" }} />
                          <h4 style={{ color: "#fbd9ad", marginBottom: "10px" }}>LinkedIn</h4>
                          <a 
                            href="https://www.linkedin.com/in/aditya-sawant-400711271/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#fbd9ad",
                              textDecoration: "none",
                              fontSize: "14px",
                              wordBreak: "break-all"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#eb90ff";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "#fbd9ad";
                            }}
                          >
                            linkedin.com/in/aditya-sawant-400711271/
                          </a>
                        </div>
                      </Fade>
                    </Col>
                  </Row>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
