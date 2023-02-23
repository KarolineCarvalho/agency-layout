import { THeader, TFooter } from "@/components/organisms";
import Head from "next/head";

import { Epilogue } from "@next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio-test</title>
      </Head>

      <div className={epilogue.className}>
        <THeader />
        <main>{children}</main>
        <TFooter />
      </div>
    </>
  );
}
