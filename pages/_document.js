import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" />
        <link
          href="//fonts.googleapis.com/css2?family=DM+Sans&family=Playfair+Display:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
