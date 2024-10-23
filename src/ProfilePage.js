import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Container } from "./Container";
import { works } from "./workdata";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaDownload } from "react-icons/fa"; // For adding icons

function ProfilePage() {
  return (
    <Container className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <h1 className="profile-name">Mario Flor Peñafiel</h1>
        <div className="contact-info">
          <p><FaEnvelope /> mariofrancisco4d@gmail.com</p>
          <p><FaPhone /> +49 15736796480</p>
          <p><FaMapMarkerAlt /> Offenbach, Germany</p>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="profile-pic-container">
        <img
          className="profile-pic"
          src="https://marioflordev.s3.us-west-2.amazonaws.com/cdimage+(3).jfif"
          alt="ProfilePicture"
          width="200"
        />
        <div className="tool-tip">
          <p>This image has been uploaded to S3</p>
        </div>
      </div>

      {/* About Me Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I am an IT engineer with experience as a web developer since 2020. Passionate about web development and always eager to learn new technologies, particularly React. 
          I enjoy teamwork, self-taught learning, and tackling new challenges with diligence and commitment.
        </p>
        <p>
          In addition to web development, I also have a deep interest in game development with hands-on experience in Unity and C# since 2020.
        </p>
      </section>

      {/* Professional Summary Section */}
      <section className="summary-section">
        <h2>Professional Summary</h2>
        <p>
          Experienced IT Engineer with a background in software design, development, and integration using cutting-edge technologies. 
          Adept at delivering high-quality solutions to complex challenges. Seeking to leverage my skills to contribute to an innovative and dynamic organization.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Software Development</li>
          <li>C / C#</li>
          <li>HTML / CSS</li>
          <li>JavaScript Specialist</li>
          <li>Game Development</li>
          <li>React</li>
          <li>Python</li>
        </ul>
      </section>

      {/* Work History Section */}
      <section className="work-section">
        <h2>Work History</h2>
        {works.map((work) => (
          <WorkData key={work.inicio} work={work} />
        ))}
        {/* Updated Work History */}
        <div className="container-data work-data">
          <Row>
            <h3>EMOV Public Company</h3>
          </Row>
          <Row>
            <Col>
              <p>Technological Application Analyst</p>
              <h5>Cuenca, Ecuador</h5>
              <p>10/04/2023 - 31/01/2024</p>
            </Col>
            <Col>
              <ul>
                <li>Conducted research on system-calculated values that did not match reality, identifying causes and solutions.</li>
                <li>Worked with a team to develop a comprehensive system for vehicle tax calculation, collection, and accounting.</li>
                <li>Designed a system that included user-friendly features like management options, cancellations, document requests, and reprints.</li>
                <li>Developed a system to validate speeding violations using radar devices throughout Cuenca, Ecuador.</li>
                <li>Executed complex SQL queries to retrieve information required by the state auditor.</li>
                <li>Integrated the web service of an external provider to resolve traffic violation issues for the public.</li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="container-data work-data">
          <Row>
            <h3>Libelulasoft GmbH</h3>
          </Row>
          <Row>
            <Col>
              <p>Software Developer</p>
              <h5>Cuenca, Ecuador</h5>
              <p>10/01/2022 - 10/01/2023</p>
            </Col>
            <Col>
              <ul>
                <li>Integrated a payment provider into bank websites using PHP, JavaScript, HTML, and CSS, enabling users to pay for services such as water, electricity, and insurance.</li>
                <li>Migrated at least five transactional banking sites to a new PHP version, improving security, performance, and visual aspects.</li>
                <li>Optimized and updated about 90% of JavaScript lines considered "code smells" following best practices.</li>
                <li>Developed a web interface for billing and tax deductions using JavaScript, HTML, CSS, and connected it to a NoSQL database.</li>
                <li>Identified and fixed numerous bugs on various transactional bank websites using PHP, JavaScript, HTML, and CSS.</li>
              </ul>
            </Col>
          </Row>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="container-data">
          <div>
            <h3>Bachelor of Science Information Technologies</h3>
            <h4>Yachay Tech University, Imbabura, Ecuador</h4>
            <p>2015 - 2021</p>
            <ul>
              <li>Awarded Honorable mention Cum Laude</li>
              <li>Certified as a volunteer in the project "Participate in talks and workshops on the use and dissemination of technology"</li>
            </ul>
          </div>
          <div>
            <h3>Deutsch Learning</h3>
            <h4>DID - Deutsch Institut, Frankfurt, Germany</h4>
            <p>03/18/2024 - 10/18/2024</p>
          </div>
          <div>
            <h3>CS50’s Introduction to Artificial Intelligence with Python</h3>
            <h4>Harvard University</h4>
            <Button href="https://certificates.cs50.io/28df6f6c-a9ae-461c-ae39-c6ae7072291e.pdf" target="_blank" className="certificate-btn">
              <FaDownload /> View Certificate
            </Button>
          </div>
          <div>
            <h3>CS50’s Introduction to Game Development</h3>
            <h4>Harvard University</h4>
            <Button href="https://certificates.cs50.io/483ae4b3-0f3c-498e-8048-3fab50004580.png" target="_blank" className="certificate-btn">
              <FaDownload /> View Certificate
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}

function WorkData({ work }) {
  return (
    <div className="container-data work-data">
      <Row>
        <h3>{work.company}</h3>
      </Row>
      <Row>
        <Col>
          <p>{work.position}</p>
          <h5>{work.location}</h5>
          {work.inicio} - {work.fin}
        </Col>
        <Col>
          <ul>
            {work.tareas.map((tarea) => (
              <li key={tarea}>{tarea}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export { ProfilePage };