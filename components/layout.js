import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import Head from "next/head";

const name = "uynet";
export const siteTitle = "LaGardenia";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <img className={styles.imgFlame} src="images/flame.png" />
      </div>
    </div>
  );
}
