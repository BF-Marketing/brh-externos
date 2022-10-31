import Link from 'next/link'
import Image from 'next/image'
import Badge from '@mui/material/Badge'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import styles from '../styles/Global.module.css'

export const Header = () => {
  return (
    <header className={styles['grid-header']}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo-brh-client.png"
            alt="profile"
            width={220}
            height={220}
          />
        </div>
        <div className={styles['nav-tools']}>
          <ul className={styles['right-side']}>
            <li className={styles.li}>
              <Link href="/">
                <Badge badgeContent={0} color="error">
                  <NotificationsNoneIcon sx={{ fontSize: 30 }} color="action" />
                </Badge>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <Badge badgeContent={1} color="error">
                  <MailOutlineIcon sx={{ fontSize: 30 }} color="action" />
                </Badge>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <div className={styles['profile-div']}>
                  <Image
                    src="/assets/profilepic-unsplash.png"
                    alt="profile"
                    width={40}
                    height={40}
                    className={styles['profile-pic']}
                  />
                  <div className={styles['profile-name']}>
                    <p>Ricardo Dos Santos</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
