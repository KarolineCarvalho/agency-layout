import "@styles/globals.css";
import Layout from "@layout/default.jsx";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
