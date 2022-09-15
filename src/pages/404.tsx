import s from "@styles/pages/404.module.scss";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={s.notfound}>
      <Head>
        <title>Nathan H. | 404</title>
        <meta name="description" content="not found page" />
        <link rel="icon" href="icons/favicon.ico" />
      </Head>

      <h1 className={s.error}>404</h1>
      <h2 className={s.message}>Page Not Found.</h2>
      <Link href="/">
        <a className={s.button}>Go Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
