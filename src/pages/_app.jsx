import Footer from '@/components/Footer'
import { Description, OgDescription, OgTitle, Title } from '@/components/Meta'
import '@/styles/main.css'
import Head from 'next/head'
import { Fragment } from 'react'
import Header from '@/components/Header'

export default function App({ Component, pageProps, router }) {
  const Layout = Component.layoutProps?.Layout || Fragment
  const showHeader =
    router.pathname !== '/sign-up' &&
    router.pathname.startsWith('/login') === false
  const showFooter =
    router.pathname !== '/sign-up' &&
    router.pathname.startsWith('/login') === false
  const meta = Component.layoutProps?.meta || {}
  const description =
    meta.metaDescription ||
    meta.description ||
    'Events made easy for organisers'
  // let image = meta.ogImage ?? meta.image;
  // image = image
  //   ? `https://domain.com${image.default?.src ?? image.src ?? image}`
  //   : `https://domain.com/api/og?path=${router.pathname}`;

  // if (router.pathname.includes("/")) {
  //   return <Component {...pageProps} />;
  // }

  return (
    <>
      <Title>{meta.metaTitle || meta.title}</Title>
      {meta.ogTitle && <OgTitle>{meta.ogTitle}</OgTitle>}
      <Description>{description}</Description>
      {meta.ogDescription && (
        <OgDescription>{meta.ogDescription}</OgDescription>
      )}
      <Head>
        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta key='twitter:site' name='twitter:site' content='@tailwindcss' />
        {/* <meta key="twitter:image" name="twitter:image" content={image} /> */}
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content='@tailwindcss'
        />
        <meta
          key='og:url'
          property='og:url'
          content={`https://domain.com${router.pathname}`}
        />
        <meta key='og:type' property='og:type' content='article' />
        {/* <meta key="og:image" property="og:image" content={image} /> */}
      </Head>
      {showHeader && <Header />}
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </>
  )
}
