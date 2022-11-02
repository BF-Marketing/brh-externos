import { Header } from './Header'
import { Menu } from './Menu'
import styles from '../styles/Global.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <main className={styles['main']}>{children}</main>
    </div>
  )
}

export default Layout
