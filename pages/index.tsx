import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import s from "../styles/index.module.scss";

const Home: NextPage = () => (
  <div className={s.home}>
    <Head>
      <title>Nathan H. | Portfolio</title>
      <meta name="description" content="cock" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <About />
    <Experience />
    <Projects />
  </div>
);

export default Home;
