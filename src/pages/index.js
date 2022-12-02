import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import GalleryCustom from "@site/src/components/GalleryCustom";

import styles from "./index.module.css";
import MailChimp from "../components/MailChimp";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

function HomepageSubscribe() {
  return (
    <section className="subscribe">
      <div className="container">
        <p className="hero__subtitle">
          <center>
            <a id="preregister"></a>
            <b>Pre-register & Subscribe to Game Releases</b>
          </center>
        </p>
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/intro">
          Docusaurus Tutorial - 5min ⏱️
        </Link>
      </div> */}
        <MailChimp />
      </div>
    </section>
  );
}
// import { Gallery } from "react-grid-gallery";

// const images = [
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     width: 320,
//     height: 174,
//     isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     width: 320,
//     height: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//   },

//   {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     width: 320,
//     height: 212,
//   },
// ];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The First Ever Chess Battle-Royale"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <GalleryCustom />
        <HomepageSubscribe />
      </main>
    </Layout>
  );
}
