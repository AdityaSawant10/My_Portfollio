import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Tilt from "react-parallax-tilt";

export default function AboutPage() {
  return (
    <section className="home-section" style={{ overflowX: "hidden" }}>
      <Container fluid id="home" style={{ overflowX: "hidden" }}>
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>About Me</h1>
            </Zoom>
          </div>
          
          <Row className="mt-5 align-items-center">
            <Col md={5}>
              <Fade left>
                <Tilt>
                  <img
                    src="./profile.png"
                    alt="Aditya Sawant"
                    className="profile-img"
                    style={{
                      display: "block",
                      borderRadius: "50%",
                      maxWidth: "min(100%, 400px)",
                      width: "100%",
                      height: "auto",
                      border: "6px solid #fbd9ad",
                      boxShadow: "0 14px 40px rgba(0,0,0,0.25)"
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </Tilt>
              </Fade>
            </Col>
            
            <Col md={7}>
              <Fade right>
                <div style={{ paddingLeft: "clamp(8px, 2.4vw, 20px)" }}>
                  <p className="home-about-body" style={{
                    fontSize: "clamp(14px, 1.4vw, 16px)",
                    lineHeight: "1.8",
                    color: "#fbd9ad",
                    marginBottom: "clamp(16px, 3vw, 30px)"
                  }}>
                    My name is <b className="purple">Aditya Sawant</b> and I'm a <b className="purple">Computer Science and Engineering</b> student from <b className="purple">Pimpri Chinchwad University</b> with a passion for crafting innovative digital solutions through my proficiency in <b className="purple">Java, C, C++, HTML, CSS, and basic JavaScript</b>. I'm always eager to explore new technologies to build responsive and user-friendly applications. Beyond coding, I channel my creativity into <b className="purple">dancing</b>, <b className="purple">trekking</b>, <b className="purple">playing basketball</b>, and <b className="purple">sketching</b>. These pursuits fuel my drive to blend technical expertise with creative flair, inspiring me to continuously learn, innovate, and make a meaningful impact in the tech world and beyond.
                  </p>
                  
                  <div className="mt-4">
                    <h3 style={{ color: "#fbd9ad", marginBottom: "clamp(12px, 2.6vw, 20px)" }}>Details</h3>
                    
                    <div style={{ marginBottom: "15px" }}>
                      <h4 style={{ color: "#eb90ff", fontSize: "clamp(16px, 1.6vw, 18px)", marginBottom: "5px" }}>
                        Education
                      </h4>
                      <p style={{ color: "#fbd9ad", fontSize: "clamp(14px, 1.4vw, 16px)", margin: "0" }}>
                        Pimpri Chinchwad University — B.Tech in Computer Science and Engineering
                      </p>
                    </div>
                    
                    <div style={{ marginBottom: "15px" }}>
                      <h4 style={{ color: "#eb90ff", fontSize: "clamp(16px, 1.6vw, 18px)", marginBottom: "5px" }}>
                        Technical Interests
                      </h4>
                      <p style={{ color: "#fbd9ad", fontSize: "clamp(14px, 1.4vw, 16px)", margin: "0" }}>
                        Web Development, Frontend Engineering, Java-based backend, and open-source contributions
                      </p>
                    </div>
                    
                    <div style={{ marginBottom: "15px" }}>
                      <h4 style={{ color: "#eb90ff", fontSize: "clamp(16px, 1.6vw, 18px)", marginBottom: "5px" }}>
                        Soft Skills
                      </h4>
                      <p style={{ color: "#fbd9ad", fontSize: "clamp(14px, 1.4vw, 16px)", margin: "0" }}>
                        Teamwork, Creativity, Problem-Solving, and Adaptability
                      </p>
                    </div>
                    
                    <div style={{ marginBottom: "15px" }}>
                      <h4 style={{ color: "#eb90ff", fontSize: "clamp(16px, 1.6vw, 18px)", marginBottom: "5px" }}>
                        Fun Fact
                      </h4>
                      <p style={{ color: "#fbd9ad", fontSize: "clamp(14px, 1.4vw, 16px)", margin: "0" }}>
                        I love exploring new tech while balancing my time with art, dance, and basketball
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
