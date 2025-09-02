import React, { useState, useEffect } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Dropdown,
} from "react-bootstrap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = systemPrefersDark ? "dark" : "light";
      setTheme("system");
      applyTheme("system");
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const applyTheme = (selectedTheme) => {
    const root = document.documentElement;

    if (selectedTheme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.setAttribute("data-theme", systemPrefersDark ? "dark" : "light");
    } else {
      root.setAttribute("data-theme", selectedTheme);
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return "☀️";
      case "dark":
        return "🌙";
      case "system":
        return "💻";
      default:
        return "💻";
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "system":
        return "System";
      default:
        return "System";
    }
  };

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`${scrolled ? "navbar-scrolled" : ""}`}
      style={{
        backgroundColor: scrolled ? "var(--navbar-bg)" : "transparent",
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
                color: "var(--navbar-text)",
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
                color: "var(--navbar-text)",
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
                color: "var(--navbar-text)",
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
                color: "var(--navbar-text)",
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
              style={{
                fontSize: "1.7rem",
                fontWeight: "500",
                color: "var(--navbar-text)",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>

          {/* Theme Switcher - Now positioned on the far right */}
          <div className="theme-switcher" style={{ marginLeft: "auto", marginRight: "1rem" }}>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary"
                id="theme-dropdown"
                className="dropdown-toggle"
              >
                <span>{getThemeIcon()}</span>
                <span>{getThemeLabel()}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item
                  className={`dropdown-item ${theme === "light" ? "active" : ""}`}
                  onClick={() => handleThemeChange("light")}
                >
                  <span>☀️</span>
                  <span>Light</span>
                </Dropdown.Item>
                <Dropdown.Item
                  className={`dropdown-item ${theme === "dark" ? "active" : ""}`}
                  onClick={() => handleThemeChange("dark")}
                >
                  <span>🌙</span>
                  <span>Dark</span>
                </Dropdown.Item>
                <Dropdown.Item
                  className={`dropdown-item ${
                    theme === "system" ? "active" : ""
                  }`}
                  onClick={() => handleThemeChange("system")}
                >
                  <span>💻</span>
                  <span>System</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
