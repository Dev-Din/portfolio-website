import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "e6673098-06de-488f-a3e3-138232eb392d",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setAlertType("success");
        setAlertMessage(
          "Thank you for your message! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setAlertType("danger");
        setAlertMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setAlertType("danger");
      setAlertMessage(
        "Network error. Please check your connection and try again."
      );
    }

    setShowAlert(true);
    setIsSubmitting(false);

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
            <p className="lead text-muted">
              Have a project in mind or just want to chat? I'd love to hear from
              you!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                {showAlert && (
                  <Alert
                    variant={alertType}
                    className="mb-4"
                    dismissible
                    onClose={() => setShowAlert(false)}
                  >
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          size="lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          size="lg"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or just say hello..."
                      size="lg"
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      style={{
                        minWidth: "200px",
                        backgroundColor: "#16234d",
                        borderColor: "#16234d",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Information */}
        <Row className="mt-5">
          <Col lg={4} className="text-center mb-4">
            <div className="p-4">
              <i
                className="bi bi-envelope text-primary mb-3"
                style={{ fontSize: "2.5rem" }}
              ></i>
              <h5>Email</h5>
              <p className="text-muted">
                <a
                  href="mailto:Nurudiin222@gmail.com"
                  className="text-decoration-none"
                >
                  Nurudiin222@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col lg={4} className="text-center mb-4">
            <div className="p-4">
              <i
                className="bi bi-geo-alt text-primary mb-3"
                style={{ fontSize: "2.5rem" }}
              ></i>
              <h5>Location</h5>
              <a
                href="https://maps.app.goo.gl/995ZxDrZiq6sxY7c9"
                className="text-decoration-none"
              >
                Kijabe Street, Nairobi, Kenya
              </a>
            </div>
          </Col>
          <Col lg={4} className="text-center mb-4">
            <div className="p-4">
              <i
                className="bi bi-clock text-primary mb-3"
                style={{ fontSize: "2.5rem" }}
              ></i>
              <h5>Response Time</h5>
              <p className="text-muted">Usually within 24 hours</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
