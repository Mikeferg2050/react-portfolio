import React, { useState } from "react";
import logo from "./logo.png"; // Assuming your logo image is named 'logo.png' and is placed in the 'src' folder

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would typically send this data to a server
    alert(
      `Message sent! Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav
        style={{
          backgroundColor: "#333",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "40px", marginRight: "20px" }}
        />
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ marginRight: "20px" }}>
            <a
              href="#about"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2em",
              }}
            >
              About Me
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a
              href="#projects"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2em",
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2em",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div style={{ padding: "20px" }}>
        <header style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "3em", margin: "0", color: "#333" }}>
            My Portfolio
          </h1>
          <p style={{ fontSize: "1.5em", color: "#777" }}>
            Welcome to my personal portfolio
          </p>
        </header>

        <section id="about" style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2em", color: "#333" }}>About Me</h2>
          <p style={{ fontSize: "1.2em", color: "#555" }}>
            I am a passionate developer with a focus on creating engaging user
            experiences. My skill set includes modern front-end frameworks,
            back-end technologies, and responsive design principles.
          </p>
        </section>

        <section id="projects" style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2em", color: "#333" }}>Projects</h2>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.5em", color: "#555" }}>Project 1</h3>
              <p style={{ fontSize: "1.1em", color: "#777" }}>
                A web application that allows users to manage their tasks
                efficiently.
              </p>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.5em", color: "#555" }}>Project 2</h3>
              <p style={{ fontSize: "1.1em", color: "#777" }}>
                An e-commerce site with a focus on user experience and
                performance.
              </p>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.5em", color: "#555" }}>Project 3</h3>
              <p style={{ fontSize: "1.1em", color: "#777" }}>
                A mobile app that helps users track their fitness goals and
                progress.
              </p>
            </li>
          </ul>
        </section>

        <section id="contact" style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2em", color: "#333" }}>Contact</h2>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontSize: "1.1em",
                }}
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "1.1em",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontSize: "1.1em",
                }}
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "1.1em",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontSize: "1.1em",
                }}
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "1.1em",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height: "150px",
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#007BFF",
                color: "#fff",
                padding: "10px 20px",
                fontSize: "1.1em",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </section>

        <footer
          style={{ textAlign: "center", marginTop: "40px", color: "#aaa" }}
        >
          &copy; {new Date().getFullYear()} My Portfolio
        </footer>
      </div>
    </div>
  );
}

export default App;
