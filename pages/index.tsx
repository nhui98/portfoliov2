import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import OtherProjects from "../components/OtherProjects/OtherProjects";
import Projects from "../components/Projects/Projects";
import s from "../styles/pages/index.module.scss";
import { FadeSection } from "../utils/FadeSection";

const Home: NextPage = () => (
  <div className={s.home}>
    <Head>
      <title>Portfolio | Nathan H. </title>
      <meta name="description" content="portfolio website" />
      <link rel="icon" href="icons/favicon.ico" />
    </Head>

    <FadeSection direction="up">
      <Hero />
    </FadeSection>

    <About />

    <Experience />

    <Projects />

    <OtherProjects />

    <Contact />
  </div>
);

export default Home;
