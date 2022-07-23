import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
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
  </div>
);

export default Home;
