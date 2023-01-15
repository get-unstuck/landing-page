import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>feble.xyz</title>

        <link rel="shortcut icon" href="" />

        <meta
          name="viewport"
          key="main"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="title"
          content="feble"
        />
        <meta
          name="description"
          content="feble feble"
        />

        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:url" content="https://feble.xyz/" key="og-url" />
        <meta
          property="og:title"
          content="feble"
          key="og-title"
        />
        <meta
          property="og:description"
          content="description"
          key="og-desc"
        />
        <meta
          property="og:image"
          content=""
          key="og-image"
        />


      </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}
