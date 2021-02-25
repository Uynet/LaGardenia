import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Head from "next/head"

const name = 'uynet'
export const siteTitle = 'こんにちわ'

export default function Layout({ children,home }) {
  return <div className={styles.container}>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/uychan.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
          </>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
}