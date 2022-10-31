import Head from 'next/head'
import styles from '../styles/Global.module.css'

export default function Payments() {
  return (
    <>
      <Head>
        <title>BRH Cliente | Meus Pagamentos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.greeting}>
        <h1>Bom dia, Teste!</h1>
        <p>Seja bem-vindo</p>
      </div>
      <div className={styles.dashboards}>
        <div className={styles.dash}>
          <h1>Plano actual</h1>
          <p>Bronze</p>
        </div>
        <div className={styles.dash}>
          <h1>Data de vencimento</h1>
          <p>08/01/2023</p>
        </div>
      </div>
    </>
  )
}
