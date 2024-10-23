import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "./Container";
import { works } from "./workdata";

function ProfilePage() {
  return (
    <Container>
      <h1>Mario Flor Peñafiel</h1>
      {/* Load image from s3 */}
      <div className="profilePic">
        <img src="https://marioflordev.s3.us-west-2.amazonaws.com/cdimage+(3).jfif" alt="ProfilePicture" width="200" />
        <div className="tool-tip">
          <p> This image has been uploaded to s3</p>
        </div>
      </div>
      <p> mariofrancisco4d@gmail.com </p>
      <h2>About Me</h2>

      <div className="container-data">
        <div>
          <p>
            I am an IT engineer with experience as a web developer since 2020. I am passionate about web development and constantly learning new
            technologies, such as React.
          </p>
          <p>
            As a self-taught programmer, I am always looking for opportunities to improve my skills and take on new challenges. I am a team player and
            enjoy helping others. I am also a hard worker and committed to achieving my goals.
          </p>
          <p>
            In addition to web development, I am also passionate about game development. I have been learning game development since 2020 and have
            experience using Unity and C#.
          </p>
        </div>
      </div>
      <h2>Professional Summary</h2>
      <div className="container-data">
        <div>
          <p>
            Experienced IT Engineer with a strong background in software development. Skilled in software design, development, and integration using
            in-demand programming languages. Demonstrated ability to write efficient and effective code for various technology applications. Seeking
            to leverage my skills and experience to contribute to the success of a dynamic organization.
          </p>
        </div>
      </div>
      <h2>Skills</h2>
      <div className="container-data skills-data">
        <div>
          <ul>
            <li>Software Development</li>
            <li>C / C#</li>
            <li>HTML / CSS</li>
            <li>JavaScript Specialist</li>
            <li>Game Development</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
      <h2>Work History</h2>
      {works.map((work) => (
        <WorkData key={work.inicio} work={work} />
      ))}
      {/* Updated Work History */}
      <div className="container-data work-data">
        <Row>
          <h2>EMOV Public Company</h2>
        </Row>
        <Row>
          <Col>
            <p>Technological Application Analyst</p>
            <h5>Cuenca, Ecuador</h5>
            10/04/2023 - 31/01/2024
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
          <h2>Libelulasoft GmbH</h2>
        </Row>
        <Row>
          <Col>
            <p>Software Developer</p>
            <h5>Cuenca, Ecuador</h5>
            10/01/2022 - 10/01/2023
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
      <h2>Education</h2>
      <div className="container-data">
        <div>
          <h2>Bachelor of Science Information Technologies</h2>
          <h3>Yachay Tech University, Imbabura, Ecuador</h3>
          <p>2015 - 2021</p>
          <ul>
            <li>Awarded Honorable mention Cum Laude</li>
            <li>Certified as a volunteer in the project "Participate in talks and workshops on the use and dissemination of technology"</li>
          </ul>
        </div>
        <div>
          <h2>German C1</h2>
          <h3>DID - Deutsch Institut, Frankfurt, Germany</h3>
          <p>03/18/2024 - 10/18/2024</p>
        </div>
        <div>
          <h2>CS50’s Introduction to Artificial Intelligence with Python</h2>
          <h3>Harvard University</h3>
          <p>2021</p>
        </div>
        <div>
          <h2>CS50’s Introduction to Game Development</h2>
          <h3>Harvard University</h3>
          <p>2021</p>
        </div>
      </div>
    </Container>
  );
}

function WorkData({ work }) {
  return (
    <div className="container-data work-data">
      <Row>
        <h2>{work.company}</h2>
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