import About from "@components/Home/About/About";
import Contact from "@components/Home/Contact/Contact";
import Experience from "@components/Home/Experience/Experience";
import Hero from "@components/Home/Hero/Hero";
import OtherProjects from "@components/Home/OtherProjects/OtherProjects";
import Projects from "@components/Home/Projects/Projects";
import s from "@styles/pages/index.module.scss";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <div className={s.home}>
    <Head>
      <title>Portfolio | Nathan H.</title>
      <meta name="description" content="portfolio website" />
      <link rel="icon" href="icons/favicon.ico" />
    </Head>

    <Hero />
    <About />
    <Experience />
    <Projects />
    <OtherProjects />
    <Contact />
  </div>
);

export default Home;
