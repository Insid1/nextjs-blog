import Link from 'next/link';
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <Link href="/">to main page</Link>
    </Layout>
  );
}

export default FirstPost;