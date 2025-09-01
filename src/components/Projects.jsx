import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import ecommerceImg from "../assets/ecommerce.png";
import taskManagementImg from "../assets/task-management.png";
import weatherImg from "../assets/weather.png";
import socialMediaImg from "../assets/social-media.png";
import portfolioImg from "../assets/portfolio.png";
import blogImg from "../assets/blog.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveDemo: "https://example.com",
      github: "https://github.com/Dev-Din/",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: taskManagementImg,
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveDemo: "https://example.com",
      github: "https://github.com/Dev-Din/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current weather and forecasts for multiple cities with interactive charts and maps.",
      image: weatherImg,
      technologies: ["React", "Chart.js", "OpenWeather API", "Bootstrap"],
      liveDemo: "https://example.com",
      github: "https://github.com/Dev-Din/",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking.",
      image: socialMediaImg,
      technologies: ["React", "Python", "Django", "Redis"],
      liveDemo: "https://example.com",
      github: "https://github.com/Dev-Din/",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
      image: portfolioImg,
      technologies: ["React", "Vite", "Bootstrap", "CSS3"],
      liveDemo: "https://example.com",
      github: "https://github.com/Dev-Din/",
    },
    {
      id: 6,
      title: "Blog Platform",
      description:
        "A full-featured blog platform with markdown support, comments, categories, and SEO optimization.",
      image: blogImg,
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      liveDemo: "https://example.com",
      github: "https://github.com/Dev-Din/",
    },
  ];

  return (
    <section id="projects" className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">My Projects</h2>
            <p className="lead text-muted">
              Here are some of the projects I've worked on recently. Each
              project represents a unique challenge and learning opportunity.
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project) => (
            <Col lg={4} md={6} sm={12} key={project.id} className="mb-4">
              <Card className="h-100 project-card border-0 shadow-sm">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3 flex-grow-1">
                    {project.description}
                  </Card.Text>

                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        bg="secondary"
                        className="me-1 mb-1"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-fill"
                    >
                      <i className="bi bi-eye me-2"></i>
                      Live Demo
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-fill"
                    >
                      <i className="bi bi-github me-2"></i>
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <p className="text-muted mb-3">Want to see more projects?</p>
            <Button
              variant="outline-primary"
              size="lg"
              href="https://github.com/Dev-Din"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github me-2"></i>
              View All on GitHub
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
