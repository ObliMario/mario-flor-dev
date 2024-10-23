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
            <li>Game Development (Unity, LOVE 2D)</li>
            <li>React</li>
            <li>Python</li>
            <li>Flutter</li>
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

          <h2>German C1</h2>
          <h3>DID - Deutsch Institut, Frankfurt, Germany</h3>
          <p>18.03.2024 - 18.10.2024</p>
          <ul>
            <li>
            I have successfully completed all levels (A1-A2-B1-B2-C1) until achieving mastery of the German language (C1). During the course I learned a wide range of topics related to Germany, as well as acquired the skills to speak, listen and write correctly in the language.
            </li>
          </ul>
        </div>
      </div>
      <div className="container-data">
        <div>
          <h2>Bachelor of Science Information Technologies</h2>
          <h3>Yachay Tech University, Imbabura, Ecuador</h3>
          <p>2015 - 2021</p>
          <ul>
            <li>Graduated with Honorable Mention, Cum Laude.</li>
            <li>Certified volunteer in the project taught by the university, obtaining a certificate:  "Participated in talks and workshops on technology usage and dissemination."</li>
          </ul>

        </div>
      </div>
      <div className="container-data">
        <div>

          <h2>CS50’s Introduction to Artificial Intelligence with Python</h2>
          <h3>Harvard University</h3>
          <p>2024</p>
          <ul>
            <li>
            This course explores the concepts and algorithms at the foundation of modern artificial intelligence, diving into the ideas that give rise to technologies like game-playing engines, handwriting recognition, and machine translation. Through hands-on projects, students gain exposure to the theory behind graph search algorithms, classification, optimization, machine learning, large language models, and other topics in artificial intelligence as they incorporate them into their own Python programs. By course’s end, students emerge with experience in libraries for machine learning as well as knowledge of artificial intelligence principles that enable them to design intelligent systems of their own.
            </li>
          </ul>
        </div>
      </div>
      <div className="container-data">
        <div>

          <h2>CS50’s Introduction to Game Development</h2>
          <h3>Harvard University</h3>
          <p>2021</p>
          <ul>
            <li>
            This course focuses on the development of 2D and 3D interactive games. Students explore the design of such childhood games as Super Mario Bros., Legend of Zelda, and Portal in a quest to understand how video games themselves are implemented. Via lectures and hands-on projects, the course explores principles of 2D and 3D graphics, animation, sound, and collision detection using frameworks like Unity and LÖVE 2D, as well as languages like Lua and C#. By class’s end, students will have programmed several of their own games and gained a thorough understanding of the basics of game design and development.
            </li>
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
      <Row>
        <h2> . </h2>
      </Row>
    </div>
  );
}

export { ProfilePage };