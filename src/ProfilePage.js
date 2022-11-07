import React from "react";
import { Container } from "./Container";

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
        </div >
      </div>

      <p> mail: mariofrancisco4d@gmail.com </p>
      <p>
        I am an IT engineer and I have been working as web developer since 2020.
      </p>
      <p>
        I am a passionate about web development and I love to learn new
        technologies. I am currently learning React. I am a self-taught person
        and I like to improve my skills. I am always looking for new challenges.
        I am a team player always happy to help others. I am a hard worker, I
        like to work hard to achieve my goals.
      </p>
      <p>
        I am also passionate about game development. I have been learning game
        development since 2020. I have worked with Unity using C#.
      </p>
      <h2>Professional Summary</h2>
      <p>
        Highly skilled software development professional bringing enormous
        talents for software design, development and integration. Offering
        advanced knowledge of in-demand programming languages. Background
        writing code and developing systems for technology applications.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>Software Development</li>
        <li>Innovative</li>
        <li>JavaScript specialist</li>
        <li>Game Development</li>
        <li>React</li>
        <li>C / C#</li>
        <li>Python</li>
        <li>HTML / CSS</li>
      </ul>
      <h2>Work History</h2>
      <h3>Junior Software Developer</h3>
      01/2022 - Present LibelulaSoft Ltda Cuenca, Azuay
      <ul>
        <li>
          Collaborated with project managers to select ambitious, but realistic
          coding milestones on pre-release software project development.
        </li>
        <li>
          Updated old code bases to modern development standards, improving
          functionality.
        </li>
        <li>
          Designed customized solutions for proposals to potential customers.
        </li>
        <li>
          Pioneered new methods of code review to incorporate wider range of
          voices.
        </li>
        <li>Front-End Development</li>
        <li>SQL calls</li>
        <li>Development of advanced and optimized JS code.</li>
        <li>Team-work</li>
      </ul>
      <h3>Web Developer</h3>
      05/2020 - 05/2021 Webdit Cuenca, Azuay
      <ul>
        <li>
          Represented the team at meetings with executives, and discussed
          project goals and milestones
        </li>
        <li>
          Successfully debugged plugin code, utilizing Javascript to develop
          effective test procedures
        </li>
        <li>
          Designed, implemented and monitored web pages and sites for continuous
          improvement in a fast-paced environment
        </li>
        <li>
          Performed appealing, responsive and user-friendly front and back end
          web development for a range of projects across website, emails,
          landing pages, e-commerce, etc
        </li>
        <li>
          Anticipated design issues and proved to be proactive in developing
          effective solutions
        </li>
        <li>
          Designed visual models meeting both aesthetic and technical criteria.
        </li>
      </ul>
      <h3>Software Developer</h3>
      01/2019 - 02/2019 Libelulasoft Cia. Ltda Cuenca, Azuay
      <ul>
        <li>
          Collaborated effectively in a team of 3 to achieve a billing interface
          that connects directly to the tax government website
        </li>
        <li>SQL</li>
        <li>Storing resulted government files in database.</li>
        <li>Designed and developed reports in SQL Server Reporting Services</li>
        <li>
          Met with manager on a weekly basis to provide a detailed project
          report and milestone updates
        </li>
        <li>Developed and implemented a scanning component using SQL Server</li>
      </ul>
      <h2>Education</h2>
      Bachelor of Science Information Technologies 07/2021 Yachay Tech
      University Imbabura, Ecuador
      <ul>
        <li>Awarded Honorable mention Cum laude</li>
        <li>
          Certified as a volunteer in the project "Participate in talks and
          workshops on the use and dissemination of technology"
        </li>
      </ul>
    </Container>
  );
}

export { ProfilePage };
