import CardItem from "@/components/Card";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import HomeLayout from "../layouts/Home";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

type Props = { posts: any };

const About = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <h1>About Page</h1>
    </div>
  );
};


About.Layout = HomeLayout

export const getStaticProps = async (context: any) => {
};

export default About;
