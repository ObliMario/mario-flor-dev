import React from "react";
import { Container } from "./Container";

function HomePage() {

  return (
    <Container>
      <h1>Welcome</h1>
      <p>
        This is a personal blog to present my self and show my projects.
        <br />I hope you enjoy it.
      </p>
      <p>
        You can see my projects and my profile by clicking on the menu on the top-right corner.
      </p>
      <p>
        Please, feel free to contact me if you have any question.
      </p>
    </Container>
  );
}

export { HomePage };
