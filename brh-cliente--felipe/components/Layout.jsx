import { Header } from './Header'
import { Menu } from './Menu'
import styles from '../styles/Global.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles['grid-container']}>
      <Header />
      <main className={styles['grid-main']}>{children}</main>
      <Menu />
    </div>
  )
}

export default Layout
