import React, { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`${scrolled ? "navbar-scrolled" : ""}`}
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              style={{
                fontSize: "1.7rem",
                fontWeight: "500",
                marginRight: "8rem",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              style={{
                fontSize: "1.7rem",
                fontWeight: "500",
                marginRight: "8rem",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              style={{
                fontSize: "1.7rem",
                fontWeight: "500",
                marginRight: "8rem",
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              style={{
                fontSize: "1.7rem",
                fontWeight: "500",
                marginRight: "8rem",
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              style={{ fontSize: "1.7rem", fontWeight: "500" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
