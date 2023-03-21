import Footer from "@organisms/Footer";
import Header from "@organisms/Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio-test</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
