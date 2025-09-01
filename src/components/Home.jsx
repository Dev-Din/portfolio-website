import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import profilePhoto from "../assets/ProfilePhoto.png";

const Home = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          {/* Profile Photo - Shows first on mobile, right side on desktop */}
          <Col
            lg={4}
            md={12}
            className="text-center order-1 order-lg-2 mb-4 mb-lg-0"
          >
            <div
              className="hero-image"
              style={{
                borderRadius: "20px",
                margin: "0 auto",
                overflow: "hidden",
                border: "5px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <img
                src={profilePhoto}
                alt="Nurdin Abdinasir"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
                onError={(e) => {
                  console.log("Profile photo failed to load, using fallback");
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<i class="bi bi-person-circle" style="font-size: 6rem; color: #667eea; display: flex; align-items: center; justify-content: center; height: 100%;"></i>';
                }}
              />
            </div>
          </Col>

          {/* Content - Shows second on mobile, left side on desktop */}
          <Col
            lg={8}
            md={12}
            className="text-center text-lg-start order-2 order-lg-1"
          >
            <h1 className="display-3 fw-bold mb-4">
              Hi, I'm <span style={{ color: "#16234d" }}>Nurdin Abdinasir</span>
            </h1>
            <h2 className="h3 mb-4">Full Stack Developer & UI/UX Designer</h2>
            <p className="lead mb-5">
              I create beautiful, responsive web applications with modern
              technologies. Passionate about crafting exceptional user
              experiences and writing clean, efficient code.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start flex-wrap">
              <Button
                size="lg"
                onClick={scrollToContact}
                style={{ backgroundColor: "#16234d", borderColor: "#16234d" }}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline-light"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View My Work
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll indicator */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{ animation: "bounce 2s infinite" }}
      >
        <i
          className="bi bi-chevron-down"
          style={{ fontSize: "2rem", cursor: "pointer", color: "#333" }}
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        ></i>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
