import Head from "next/head";

import { TFooter, THeader } from "@organisms/index";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio-test</title>
      </Head>

      <THeader />
      <main>{children}</main>
      <TFooter />
    </>
  );
}
