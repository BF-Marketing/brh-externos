import Head from 'next/head'
import CardButton from '../components/CardButton'
import styles from '../styles/Pages.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>BRH Cliente | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.greeting}>
        <h1>Bom dia, Teste!</h1>
        <p>Seja bem-vindo</p>
      </div>
      <div className={styles.dashboards}>
        <CardButton title={'Plano actual'} color={'#a8c030'} label={'Bronze'} />
        <CardButton
          title={'Data de vencimento'}
          color={'#f0371a'}
          label={'08/01/2023'}
        />
        <CardButton title={'Estado'} color={'#943d8a'} label={'Activo'} />
      </div>
    </>
  )
}