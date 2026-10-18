import React from "react";
import { useTranslation } from "react-i18next";

function LeftBar() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Mario Flor</h1>
      <br />
      <p>{t("leftBar.title")}</p>
      <p>{t("leftBar.webdev")}</p>
      <p>{t("leftBar.gamedev")}</p>

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
  title: "Email",
  slug: "mailto:mariofrancisco4d@gmail.com",
}); */
/* datas.push({
  title: "Twitter",
  slug: "https://twitter.com/MarioFlorDev",
}); */

export { LeftBar };
