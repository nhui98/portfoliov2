import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import s from "../styles/pages/homepage.module.scss";

const Home: NextPage = () => {
  return (
    <div className={s.homepage}>
      <Head>
        <title>Nathan H. | Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
