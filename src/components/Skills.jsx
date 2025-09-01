import React from "react";
import { Container, Row, Col, Badge, Card, ProgressBar } from "react-bootstrap";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "bi-filetype-jsx" },
        { name: "JavaScript", level: 85, icon: "bi-filetype-js" },
        { name: "TypeScript", level: 80, icon: "bi-filetype-tsx" },
        { name: "HTML5", level: 95, icon: "bi-filetype-html" },
        { name: "CSS3", level: 90, icon: "bi-filetype-css" },
        { name: "Bootstrap", level: 85, icon: "bi-bootstrap" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "bi-server" },
        { name: "Express.js", level: 80, icon: "bi-code-slash" },
        { name: "Python", level: 75, icon: "bi-filetype-py" },
        { name: "Django", level: 70, icon: "bi-gear" },
        { name: "REST APIs", level: 85, icon: "bi-cloud" },
        { name: "GraphQL", level: 65, icon: "bi-diagram-3" },
      ],
    },
    {
      category: "Database & DevOps",
      skills: [
        { name: "MongoDB", level: 80, icon: "bi-database" },
        { name: "PostgreSQL", level: 75, icon: "bi-database-fill" },
        { name: "Git", level: 90, icon: "bi-git" },
        { name: "Docker", level: 70, icon: "bi-box" },
        { name: "AWS", level: 65, icon: "bi-cloud-upload" },
        { name: "Linux", level: 75, icon: "bi-terminal" },
      ],
    },
  ];

  const tools = [
    "VS Code",
    "Figma",
    "Postman",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Jira",
    "Slack",
    "Notion",
    "Adobe XD",
    "Photoshop",
  ];

  return (
    <section id="skills" className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Skills & Technologies</h2>
            <p className="lead text-muted">
              Here are the technologies and tools I work with to bring ideas to
              life.
            </p>
          </Col>
        </Row>

        {/* Technical Skills with Progress Bars */}
        <Row className="mb-5">
          {skillCategories.map((category, categoryIndex) => (
            <Col lg={4} md={6} sm={12} key={categoryIndex} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h4 className="h5 mb-4 text-primary">
                    <i className="bi bi-gear-fill me-2"></i>
                    {category.category}
                  </h4>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-medium">
                          <i className={`${skill.icon} me-2 text-primary`}></i>
                          {skill.name}
                        </span>
                        <span className="text-muted small">{skill.level}%</span>
                      </div>
                      <ProgressBar
                        now={skill.level}
                        variant="primary"
                        style={{ height: "6px" }}
                      />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Tools & Technologies */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center p-5">
                <h4 className="h5 mb-4">
                  <i className="bi bi-tools me-2 text-primary"></i>
                  Tools & Technologies
                </h4>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {tools.map((tool, index) => (
                    <Badge
                      key={index}
                      bg="primary"
                      className="skill-badge fs-6 fw-normal"
                      style={{
                        padding: "8px 16px",
                        borderRadius: "20px",
                      }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Skills Summary */}
        <Row className="mt-5">
          <Col lg={3} md={6} sm={12} className="text-center mb-4">
            <div className="p-4">
              <i
                className="bi bi-code-square text-primary mb-3"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5>Clean Code</h5>
              <p className="text-muted small">
                Writing maintainable, scalable, and well-documented code
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="p-4">
              <i
                className="bi bi-phone text-primary mb-3"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5>Responsive Design</h5>
              <p className="text-muted small">
                Creating applications that work seamlessly across all devices
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="p-4">
              <i
                className="bi bi-lightning text-primary mb-3"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5>Performance</h5>
              <p className="text-muted small">
                Optimizing applications for speed and better user experience
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="p-4">
              <i
                className="bi bi-people text-primary mb-3"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5>Collaboration</h5>
              <p className="text-muted small">
                Working effectively in teams using agile methodologies
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
