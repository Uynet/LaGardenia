import styles from "./layout.module.scss";
import Head from "next/head";

export const siteTitle = "LaGardenia";

function Info() {
  return (
    <div>
      <div style={{ fontSize: 40 }}>シ16 秋M3 こんにちは 4/25 Release</div>
    </div>
  );
}

function CreditArea(props) {
  const { name, role } = props;
  return (
    <div className={styles.creditArea}>
      <div className={styles.creditRole}>{role}</div>
      <div className={styles.creditName}>{name}</div>
    </div>
  );
}

function Credit() {
  return (
    <div>
      <div className={styles.credits}>
        <CreditArea name="uynet" role="Compose" />
        <CreditArea name="しーけー" role="Guest" />
        <CreditArea name="まりあ歩" role="Lyrics" />
        <CreditArea name="やいぎ" role="Design" />
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{"LA GARDENIA"}</title>
      </Head>
      <div className={styles.intro}>
        <img className={styles.imgFlame} src="images/flame.png" />
        <img className={styles.loadingLogo} src="images/logo.png" />
      </div>
      {/*<div className={styles.screen1} />*/}
      <div className={styles.jacketBG}>
        <div className={styles.bgDiv} />
        {/*<img className={styles.angel} src="images/angel.png" />*/}
      </div>
      <Info />
      <Credit />
    </div>
  );
}
