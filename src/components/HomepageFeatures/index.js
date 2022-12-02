import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const FeatureList = [
  {
    title: "Outdraft, Outwit, Outplay",
    Svg: require("@site/static/img/1.svg").default,
    description: (
      <>
        Outdraft, Outwit and Outplay your opponents. Every round the board
        increases in size and you can upgrade your army. Create your dream team
        and crush your opponents for the #1 spot!
      </>
    ),
  },
  {
    title: "24 New Chess Pieces to Enjoy & Master",
    Svg: require("@site/static/img/2.svg").default,
    description: (
      <>
        24+ and growing chess pieces to enjoy and master. We focused on making
        the pieces simple and intuitive to play, yet having fun synergies and
        combos!
      </>
    ),
  },
  {
    title: "First ever Battle-Royale for Chess",
    Svg: require("@site/static/img/3.svg").default,
    description: (
      <>
        Ever wanted to see how you fare in an epic battle-royale for Chess? Now
        you can. Join our <a href="https://discord.gg/cweD98aeJp">Discord</a> to
        become a Tester or <a href="#preregister">Subscribe</a> and get major
        releases and updates to the game.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
