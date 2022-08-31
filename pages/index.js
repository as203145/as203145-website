import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AS203145 | Biswas R&amp;D Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to AS203145" />
        <p className="description">
          Stay tuned! We will be right back.
        </p>
      </main>

      <Footer />
    </div>
  )
}
