import Link from 'next/link'
import Image from 'next/image'
import Badge from '@mui/material/Badge'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import styles from '../styles/Global.module.css'
import { useState } from 'react'

export const Header = () => {
  const [notifications, setNotifications] = useState(1)
  const [messages, setMessages] = useState(0)

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo-brh-software.png"
            alt="logo"
            width={215}
            height={22}
          />
        </div>
        <div className={styles['nav-tools']}>
          <ul>
            <li className={styles.li}>
              <Link href="/">
                <Badge badgeContent={notifications} color="error">
                  <NotificationsNoneIcon sx={{ fontSize: 25 }} color="action" />
                </Badge>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <Badge badgeContent={messages} color="error">
                  <MailOutlineIcon sx={{ fontSize: 25 }} color="action" />
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
                  <p className={styles['profile-name']}>Ricardo Dos Santos</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
