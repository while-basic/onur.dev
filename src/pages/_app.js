import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'

// --- Components
import Header from 'components/Header'
import Footer from 'components/Footer'

// --- Others
import { trackPageview } from 'lib/gtag'
import SEO from '../../next-seo.config'

// --- Styles
import 'styles/global.css'

function App({ Component, pageProps, router }) {
  const nextRouter = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      process.env.NODE_ENV === 'production' && trackPageview(url)
      window.scrollTo(0, 0) // because nextRouter.push(...) doesn't scroll to top
    }
    nextRouter.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [nextRouter.events])

  return (
    <>
      <Head>
        {/* https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <DefaultSeo {...SEO} />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
