import Link from 'next/link'
import styles from '../styles/Global.module.css'
import { RiDashboardLine } from 'react-icons/ri'
import { AiOutlineRocket } from 'react-icons/ai'
import { MdManageAccounts, MdOutlinePayments } from 'react-icons/md'
import { BsListCheck } from 'react-icons/bs'
import { useRouter } from 'next/router'

export const Menu = () => {
  const router = useRouter()

  const selectedRoute = (routename) =>
    router.pathname == routename ? styles.active : ''

  return (
    <aside>
      <div className={styles.aside}>
        <nav className={styles.nav}>
          <div className={`${styles.item} ${selectedRoute('/')}`}>
            <Link href="/">
              <RiDashboardLine />
              Painel de Controlo
            </Link>
          </div>
          <div className={`${styles.item} ${selectedRoute('/plans')}`}>
            <Link href="/plans">
              <BsListCheck />
              Planos
            </Link>
          </div>
          <div className={`${styles.item} ${selectedRoute('/payments')}`}>
            <Link href="/payments">
              <MdOutlinePayments />
              Meus Pagamentos
            </Link>
          </div>
          <div className={`${styles.item} ${selectedRoute('/support')}`}>
            <Link href="/support">
              <AiOutlineRocket />
              Suporte Técnico
            </Link>
          </div>
          <div className={`${styles.item} ${selectedRoute('/manager')}`}>
            <Link href="/manager">
              <MdManageAccounts />
              Administrador
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
