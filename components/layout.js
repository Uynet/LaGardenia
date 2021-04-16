import styles from "./layout.module.scss";

export const siteTitle = "LaGardenia";

function Info() {
  return (
    <div>
      <div style={{ fontSize: 40 }}>シ16 秋M3 こんにちは 4/25 Release</div>
    </div>
  );
}

export default function Layout() {
  return (
    <div>
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
    </div>
  );
}
