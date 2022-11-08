import { useRouter } from 'next/router'
import CardPlan from '../../../components/CardPlan'
import styles from '../../../styles/Pages.module.css'
import { plans } from '../../api/data'

export default function PlanDetails() {
  const router = useRouter()
  const { plan } = router.query

  const planData = plans.find((item) => item.title === plan.replace('_', ' '))

  return (
    <section className={`${styles['plans-page']} ${styles['plan-details']}`}>
      <div className={styles['page-title']}>
        <h1>{planData.title}</h1>
      </div>
      <div className={styles.plans}>
        <CardPlan>{planData}</CardPlan>
      </div>
    </section>
  )
}
