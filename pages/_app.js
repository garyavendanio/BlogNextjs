import Head from 'next/head'
import Header from '../components/Header'
import '../public/css/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
				<title>Avrodev</title>
				<meta name="description" content="Powered by garyavendanio: from avro" />
				<link rel="icon" type="image/png" href="images/favicon.png" />
			</Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
