import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";

export default function ResumePage() {
  return (
    <section className="resume-section">
      <Container fluid id="resume">
        <Particle />
        <Container className="resume-content" style={{ padding: 32, textAlign: "center", color: "#fbd9ad" }}>
          <h1 style={{ marginBottom: 12 }}>Resume</h1>
          <p style={{ maxWidth: 800, margin: "0 auto" }}>
            Add your resume content here — brief intro, links or a download button.
          </p>
        </Container>
      </Container>
    </section>
  );
}