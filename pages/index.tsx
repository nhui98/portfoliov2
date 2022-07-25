import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import s from "../styles/index.module.scss";
import { FadeSection } from "../utils/FadeSection";

const Home: NextPage = () => (
  <div className={s.home}>
    <Head>
      <title>Nathan H. | Portfolio</title>
      <meta name="description" content="cock" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <FadeSection direction="up">
      <Hero />
    </FadeSection>

    <About />

    <Experience />

    <Projects />

    <Contact />
  </div>
);

export default Home;
