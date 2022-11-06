import React from "react";

function LeftBar() {
  return (
    <div>
      <h1>Mario Flor</h1>
      <br />
      <p>IT Engineer</p>
      <p>Web Developer</p>
      <p>Game Developer</p>

      <ul>
        {datas.map((data) => (
          <PersonalLinks key={data.slug} data={data} />
        ))}
      </ul>
    </div>
  );
}

function PersonalLinks({ data }) {
  return (
    <li>
      <a href={`${data.slug}`} className="personalData">
        {data.title}
      </a>
    </li>
  );
}

const datas = [];
datas.push({
  title: "LinkedIn",
  slug: "https://www.linkedin.com/in/mario-flor-7a94bb221/",
});
/* datas.push({
  title: "Twitter",
  slug: "https://twitter.com/MarioFlorDev",
}); */

export { LeftBar };
