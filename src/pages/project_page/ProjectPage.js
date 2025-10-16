import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade"; // import Fade directly (you can use direction props)
import Slide from "react-reveal/Slide"; // new import for sliding animations
import "./ProjectPage.css";

// Import project images
import railwayImg from "../../images/railway.png";
import p2pImg from "../../images/p2p.png";

export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          {/* Header */}
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134, 61, 176)" }}>PROJECTS</h1>
            </Zoom>
          </div>

          {/* Projects */}
          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row className="mt-5 g-5">
                {/* First Project (Slide from Left) */}
                <Col md={6} sm={12}>
                  <Slide left>
                    <div
                      className="singleProject"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        height: "clamp(300px, 48vw, 420px)",
                        borderRadius: "12px",
                        border: "1px solid #ccc",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                        cursor: "pointer",
                      }}
                    >
                      {/* Background image */}
                      <img
                        src={railwayImg}
                        alt="Railway Reservation System"
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        className="project-image"
                      />

                      {/* Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1))",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          padding: "clamp(12px, 2.4vw, 20px)",
                          textAlign: "left",
                          transition: "background 0.4s ease",
                        }}
                        className="project-overlay"
                      >
                        <h4
                          style={{
                            color: "#fbd9ad",
                            fontWeight: "700",
                            marginBottom: "10px",
                            fontSize: "1.3rem",
                          }}
                        >
                          Railway Reservation System
                        </h4>
                        <a
                          href="https://github.com/AdityaSawant10/RailwayReservationSystem"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            background: "rgba(251,217,173,0.95)",
                            padding: "8px 14px",
                            borderRadius: 6,
                            color: "#6b2a89",
                            textDecoration: "none",
                            fontWeight: 700,
                            alignSelf: "flex-start",
                          }}
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </Slide>
                </Col>

                {/* Second Project (Slide from Right) */}
                <Col md={6} sm={12}>
                  <Slide right>
                    <div
                      className="singleProject"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        height: "clamp(300px, 48vw, 420px)",
                        borderRadius: "12px",
                        border: "1px solid #ccc",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                        cursor: "pointer",
                      }}
                    >
                      {/* Background image */}
                      <img
                        src={p2pImg}
                        alt="P2P Chat Application"
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        className="project-image"
                      />

                      {/* Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1))",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          padding: "clamp(12px, 2.4vw, 20px)",
                          textAlign: "left",
                          transition: "background 0.4s ease",
                        }}
                        className="project-overlay"
                      >
                        <h4
                          style={{
                            color: "#fbd9ad",
                            fontWeight: "700",
                            marginBottom: "10px",
                            fontSize: "1.3rem",
                          }}
                        >
                          P2P Chat Application
                        </h4>
                        <a
                          href="https://github.com/AdityaSawant10/P2PChatApplication"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            background: "rgba(251,217,173,0.95)",
                            padding: "8px 14px",
                            borderRadius: 6,
                            color: "#6b2a89",
                            textDecoration: "none",
                            fontWeight: 700,
                            alignSelf: "flex-start",
                          }}
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </Slide>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
