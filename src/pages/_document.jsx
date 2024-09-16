import clsx from "clsx";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

const FAVICON_VERSION = 3;

function v(href) {
  return `${href}?v=${FAVICON_VERSION}`;
}

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="en"
        className="dark [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem] [scrollbar-gutter:stable]"
      >
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={v("/favicons/apple-touch-icon.png")}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={v("/favicons/favicon-32x32.png")}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={v("/favicons/favicon-16x16.png")}
          />
          <link rel="manifest" href={v("/favicons/site.webmanifest")} />
          <link
            rel="mask-icon"
            href={v("/favicons/safari-pinned-tab.svg")}
            color="#38bdf8"
          />
          <link rel="shortcut icon" href={v("/favicons/favicon.ico")} />
          <meta name="apple-mobile-web-app-title" content="TwentySevenGigs" />
          <meta name="application-name" content="TwentySevenGigs" />
          <meta name="msapplication-TileColor" content="#38bdf8" />
          <meta name="theme-color" content="#f8fafc" />
        </Head>
        <body className="antialiased font-sans text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    );
  }
}
