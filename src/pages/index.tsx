import Layout from "@/lib/layout";
import Link from "next/link";
import React from "react";

const Home: React.FC<Record<string, never>> = () => {
  return (
    <Layout>
      <h1>Welcome to Debate Timer</h1>
      <p>
        Debate Timer is under development.
        <br />
        Timer: <Link href="/timer">here</Link>
      </p>
    </Layout>
  );
};

export default Home;
