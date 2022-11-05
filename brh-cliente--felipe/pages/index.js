import Head from 'next/head'
import CardButton from '../components/CardButton'
import styles from '../styles/Pages.module.css'

export default function Home() {
  return (
    <section className={styles['home-page']}>
      <div className={styles['page-title']}>
        <h1>Bom dia, Teste!</h1>
        <p>Seja bem-vindo</p>
      </div>
      <div className={styles.dashboards}>
        <CardButton title={'Plano actual'} color={'#369529'} label={'Bronze'} />
        <CardButton
          title={'Data de vencimento'}
          color={'#fe0601'}
          label={'08/01/2023'}
        />
        <CardButton title={'Estado'} color={'#1109a3'} label={'Activo'} />
      </div>
    </section>
  )
}
