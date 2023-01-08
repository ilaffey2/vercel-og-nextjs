import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
        <meta
          name="og:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            // More info:
            // https://vercel.com/docs/concepts/projects/environment-variables
            `${
              process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/twitter`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ilaffey2" />
        <meta name="twitter:creator" content="@ilaffey2" />
        <meta name="twitter:title" content="Create dynamic social cards with NextJS, explained 🔮🚀"/>
        <meta name="twitter:description" content="Create dynamic social cards with NextJS, explained 🔮🚀"></meta>
        <meta
          name="twitter:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            // More info:
            // https://vercel.com/docs/concepts/projects/environment-variables
            `${
              process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/twitter`
          }
        />
      </Head>
      <h1>A page with Open Graph Image.</h1>
    </div>
  )
}
