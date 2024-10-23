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
            I am an IT engineer with extensive experience as a web developer since 2020. My passion for web development drives me to continuously learn
            and explore new technologies, particularly React.
          </p>
          <p>
            As a self-taught programmer, I am always seeking opportunities to enhance my skills and embrace new challenges. I thrive in collaborative
            environments and take pride in my commitment to hard work, always striving to achieve the best results.
          </p>
          <p>
            In addition to web development, I am also deeply interested in game development. Since 2020, I have been honing my skills in Unity and C# to 
            create engaging digital experiences.
          </p>
        </div>
      </div>
      <h2>Professional Summary</h2>
      <div className="container-data">
        <div>
          <p>
            Accomplished IT Engineer with a strong foundation in software development and a demonstrated ability to design, develop, and integrate 
            complex software solutions. Proficient in a wide range of programming languages, delivering optimized code for diverse applications. I am 
            eager to apply my expertise to contribute to the success of a forward-thinking organization.
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
              <li>Researched discrepancies in system-calculated values, identifying causes and implementing solutions.</li>
              <li>Collaborated on developing a comprehensive system for vehicle tax calculation, collection, and accounting.</li>
              <li>Designed user-friendly features for system management, including options for cancellations, document requests, and reprints.</li>
              <li>Developed a system to validate speeding violations using radar devices throughout Cuenca, Ecuador.</li>
              <li>Executed complex SQL queries to retrieve data required by the state auditor.</li>
              <li>Integrated the web service of an external provider to resolve public traffic violation issues.</li>
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
              <li>Integrated a payment provider into banking websites using PHP, JavaScript, HTML, and CSS, enabling users to pay for services such as utilities and insurance.</li>
              <li>Migrated multiple transactional banking platforms to a new PHP version, enhancing security, performance, and user experience.</li>
              <li>Optimized and refactored over 90% of JavaScript code to eliminate "code smells," adhering to industry best practices.</li>
              <li>Developed a web-based billing and tax deduction interface using JavaScript, HTML, CSS, and NoSQL database integration.</li>
              <li>Identified and resolved critical bugs across various banking transactional websites using PHP, JavaScript, HTML, and CSS.</li>
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
            <li>Graduated with Honorable Mention, Cum Laude.</li>
            <li>Certified volunteer in the project: "Participated in talks and workshops on technology usage and dissemination."</li>
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