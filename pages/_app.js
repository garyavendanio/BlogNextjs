import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <section>
      <Header />
      <Component {...pageProps} />
    </section>
  )
}

export default MyApp
