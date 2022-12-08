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
            to leverage my skills and experience to contribute to the success of a dynamic organization
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
      <h2>Education</h2>
      <div className="container-data">
        <div>
          <h2>Bachelor of Science Information Technologies</h2>
          <h3>Yachay Tech University Imbabura, Ecuador</h3>
          <p>2015 - 2021</p>
          <ul>
            <li>Awarded Honorable mention Cum laude</li>
            <li>Certified as a volunteer in the project "Participate in talks and workshops on the use and dissemination of technology"</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

function WorkData({ work }) {
  return (
    <div className="container-data work-data">
      <Row>
        <h2> {work.company} </h2>
      </Row>
      <Row>
        <Col>
          <p> {work.position} </p>
          <h5> {work.location}</h5>
          {work.inicio} - {work.fin}
        </Col>
        <Col>
          <ul>
            {work.tareas.map((tarea) => (
              <li>{tarea}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export { ProfilePage };
