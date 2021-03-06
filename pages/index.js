import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import Posts from "../components/Posts";
import axiosInstance from "../axios";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts posts={props.posts} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axiosInstance.get("http://127.0.0.1:8000/api/posts/");

  const posts = await res.data;
  return {
    props: {
      posts,
    },
  };
}
