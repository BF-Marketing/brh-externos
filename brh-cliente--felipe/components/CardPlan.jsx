import Link from 'next/link'
import styles from '../styles/Pages.module.css'
// import 'bootstrap/dist/css/bootstrap.css'

const CardPlan = ({ children }) => {
  const active = children.status ? styles['active-plan'] : ''

  return (
    <div className={`${styles['card-plan']} ${active}`}>
      <h4>{children.title}</h4>
      <div>
        <p className={styles['value-plan']}>
          {children.value}
          <small>mil</small>
        </p>
        <small className={styles['validity-plan']}>{children.validity}</small>
        <p className={styles['label-plan']}>{children.label}</p>
        <Link href="">
          {children.status ? 'O seu plano atual' : 'Evoluir para este plano'}
        </Link>
      </div>
    </div>
  )
}

export default CardPlan
