import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ADITYA SAWANT</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              
              <p style={{
                color: "#fbd9ad",
                fontSize: "clamp(14px, 1.6vw, 18px)",
                marginTop: "clamp(10px, 2vw, 20px)",
                marginLeft: "clamp(12px, 4vw, 60px)",
                fontWeight: "400"
              }}>
                Building responsive, modern, and creative web experiences.
              </p>
              
              <div className="mt-4">
                
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="./profile.png"
                      alt="home pic"
                      className="img-fluid corner"
                      style={{
                        borderRadius: "100%",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                        width: "min(100%, 420px)",
                        height: "auto",
                        objectFit: "cover"
                      }}
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
