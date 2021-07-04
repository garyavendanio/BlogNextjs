import Head from 'next/head'
import Header from '../components/Header'
import '../public/css/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
				<title>Avro | Sistemas Multimedia y Frontend UX/UI, HTML5, CSS3, JAVASCRIPT, Next.js.</title>
				<meta name="description" content="Dentro de avro el uso de tecnologías del lado cliente nos permite crear productos de un alto rendimiento y calidad." />
				<link rel="icon" type="image/png" href="images/favicon.png" />
			</Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
