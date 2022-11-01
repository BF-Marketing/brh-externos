import CardPlan from '../components/CardPlan'
import styles from '../styles/Pages.module.css'
import { plans } from './api/data'

export default function Plans() {
  return (
    <section className={styles['plans-page']}>
      <div className={styles['page-title']}>
        <h1>Escolha o seu plano</h1>
      </div>
      <div className={styles.plans}>
        {plans.map((plan, idx) => (
          <CardPlan key={idx}>{plan}</CardPlan>
        ))}
      </div>
    </section>
  )
}
