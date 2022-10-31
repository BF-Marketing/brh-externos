import styles from '../styles/Pages.module.css'

const CardButton = ({ title, color, label }) => {
  return (
    <div style={{ background: color }} className={styles.dash}>
      <h4>{title}</h4>
      <p>{label}</p>
    </div>
  )
}

export default CardButton
