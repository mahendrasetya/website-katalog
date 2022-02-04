import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/about/About";
import { AboutVideo } from "@/components/sections/about/About-with-video";
import { Features } from "@/components/sections/Features";
import { Product } from "@/components/sections/product/Product";
import { Teams } from "@/components/sections/Teams";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Website Katalog</title>
        <meta
          name="description"
          content="Website katalog. Dibangun dengan Next.js, Chakra UI, dan Netlify"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      {/* <About /> */}
      <AboutVideo />
      <Features />
      <Product />
      <Teams />
    </>
  );
};

export default Home;
