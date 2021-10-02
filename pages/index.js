
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Skill from "../components/Skill";
import Blog from "../components/Blog";

// import MagnetMouse from 'magnet-mouse';
import {useEffect} from "react";




export default function Home() {
  // useEffect(() => {
     
  // }, [])
  return (
    <>
      <Head>
        <title>Software Developer portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="I am a Full Stack Developer based in India. I am a passionate developer, open source enthusiast, and a coder who loves the web platform" />
      </Head>
      <Layout>
        <Hero />
        <Skill />
        <Portfolio />
        <Blog />
        <Contact />
      </Layout>
    </>
  );
}
