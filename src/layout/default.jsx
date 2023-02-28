import Head from "next/head";

import { TFooter, THeader } from "@organisms/index";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio-test</title>
      </Head>

      <THeader />
      <main style={{ maxWidth: "1440px", margin: "0 auto" }}>{children}</main>
      <TFooter />
    </>
  );
}
