import '../styles/globals.css'

// Seção 2 - Aula 23: Integração com CSS #01
// Importando o CSS globalmente
import './css/integracao1.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
