import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  const highlights = [
    {
      icon: "bi-code-slash",
      title: "Full Stack Development",
      description:
        "Experienced in both frontend and backend technologies, creating end-to-end solutions.",
    },
    {
      icon: "bi-palette",
      title: "UI/UX Design",
      description:
        "Passionate about creating intuitive and visually appealing user interfaces.",
    },
    {
      icon: "bi-lightning",
      title: "Performance Optimization",
      description:
        "Focus on building fast, efficient applications with excellent user experience.",
    },
    {
      icon: "bi-people",
      title: "Team Collaboration",
      description:
        "Strong communication skills and experience working in agile development teams.",
    },
  ];

  return (
    <section id="about" className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">About Me</h2>
            <p className="lead text-muted">
              I'm a passionate developer with a love for creating digital
              experiences that make a difference.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} md={12} className="mb-5 mb-lg-0">
            <h3 className="h4 mb-4">
              Hello! I'm a developer who loves to create amazing things.
            </h3>
            <p className="mb-4">
              With over 3 years of experience in web development, I specialize
              in creating responsive, user-friendly applications using modern
              technologies like React, Node.js, and various databases. I'm
              passionate about writing clean, maintainable code and staying
              up-to-date with the latest industry trends.
            </p>
            <p className="mb-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community through blog posts and mentoring.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-primary">React</span>
              <span className="badge bg-primary">JavaScript</span>
              <span className="badge bg-primary">Node.js</span>
              <span className="badge bg-primary">Python</span>
              <span className="badge bg-primary">MongoDB</span>
              <span className="badge bg-primary">PostgreSQL</span>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <Row>
              {highlights.map((highlight, index) => (
                <Col md={6} sm={12} key={index} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="text-center p-4">
                      <div className="mb-3">
                        <i
                          className={`${highlight.icon} text-primary`}
                          style={{ fontSize: "2.5rem" }}
                        ></i>
                      </div>
                      <h5 className="card-title">{highlight.title}</h5>
                      <p className="card-text text-muted small">
                        {highlight.description}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
