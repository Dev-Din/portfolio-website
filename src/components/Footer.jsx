import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: "bi-github",
      url: "https://github.com/Dev-Din",
    },
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      url: "https://ke.linkedin.com/in/nurdin-abdinasir-1b1a9b367",
    },
    {
      name: "Twitter",
      icon: "bi-twitter",
      url: "https://twitter.com/hajonurdin",
    },
    {
      name: "Email",
      icon: "bi-envelope",
      url: "mailto:nurudiin222@gmail.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-3 mb-lg-0">
            <h5 className="mb-2">Let's Connect</h5>
            <p className="mb-0 text-light">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
          </Col>

          <Col lg={6} className="text-center text-lg-end">
            <div className="social-links mb-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-white me-3"
                  style={{
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                  title={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <hr
          className="my-4"
          style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        />

        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <p className="mb-0 text-light">
              © {currentYear} Nurdin Abdinasir. All rights reserved.
            </p>
          </Col>

          <Col lg={6} className="text-center text-lg-end">
            <button
              onClick={scrollToTop}
              className="btn btn-outline-light btn-sm"
              style={{
                border: "none",
                background: "rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <i className="bi bi-arrow-up"></i> Back to top
            </button>
          </Col>
        </Row>

       
      </Container>
    </footer>
  );
};

export default Footer;
