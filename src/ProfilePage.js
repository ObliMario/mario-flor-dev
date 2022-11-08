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
        <img
          src="https://marioflordev.s3.us-west-2.amazonaws.com/cdimage+(3).jfif"
          alt="ProfilePicture"
          width="200"
        />
        <div className="tool-tip">
          <p> This image has been uploaded to s3</p>
        </div>
      </div>
      <p> mariofrancisco4d@gmail.com </p>
      <h2>About Me</h2>

      <div className="profile-data">
        <p>
          I am an IT engineer and I have been working as web developer since
          2020.
        </p>
        <p>
          I am a passionate about web development and I love to learn new
          technologies. I am currently learning React. I am a self-taught person
          and I like to improve my skills. I am always looking for new
          challenges. I am a team player, always happy to help others. I am a
          hard worker, I like to work hard to achieve my goals.
        </p>
        <p>
          I am also passionate about game development. I have been learning game
          development since 2020. I have worked with Unity using C#.
        </p>
      </div>
      <h2>Professional Summary</h2>
      <div className="profile-data">
        <p>
          Outstanding IT Engineer. Highly skilled software development
          professional bringing enormous talents for software design,
          development and integration. Offering advanced knowledge of in-demand
          programming languages. Background writing code and developing systems
          for technology applications.
        </p>
      </div>
      <h2>Skills</h2>
      <div className="profile-data">
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
      <h2>Work History</h2>
      {works.map((work) => (
        <WorkData key={work.inicio} work={work} />
      ))}
      <h2>Education</h2>
      <div className="profile-data">
        <h2>Bachelor of Science Information Technologies</h2>
        <h3>Yachay Tech University Imbabura, Ecuador</h3>
        <p>2015 - 2021</p>
        <ul>
          <li>Awarded Honorable mention Cum laude</li>
          <li>
            Certified as a volunteer in the project "Participate in talks and
            workshops on the use and dissemination of technology"
          </li>
        </ul>
      </div>
    </Container>
  );
}

function WorkData({ work }) {
  return (
    <div className="profile-data work-data">
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
