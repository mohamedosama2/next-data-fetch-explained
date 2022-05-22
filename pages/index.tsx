import type { NextPage } from "next";

import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href={"/ServerSide"}>
        <a style={{ color: "blue" }}>Get Server Side </a>
      </Link>
      <br />
      <Link href={"/StaticProps"}>
        <a style={{ color: "blue" }}>Get Static Props </a>
      </Link>
      <br />
      <Link href={"/StaticPaths"}>
        <a style={{ color: "blue" }}>Get Static Paths </a>
      </Link>
    </div>
  );
};

export default Home;
