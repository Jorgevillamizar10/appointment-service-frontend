import Head from 'next/head'
import LoginPage from '../../src/pages/LoginPage'

export default function Login() {
  return (
    <div>
      <Head>
        <title>Iniciar Sesion</title>
        <meta name="description" content="Generated by Jorge Villamizar and Carlota Lasa" />
      </Head>
      <LoginPage />
    </div>
  )
}
