import styles from "./layout.module.scss";

export const siteTitle = "LaGardenia";

export default function Layout() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.intro}>
          <img className={styles.imgFlame} src="images/flame.png" />
          <img className={styles.loadingLogo} src="images/logo.png" />
        </div>
        {/*<div className={styles.screen1} />*/}
        <div className={styles.jacketBG}>
          <img className={styles.bg} src="images/bg.png" />
          <img className={styles.angel} src="images/angel.png" />
        </div>
      </div>
    </div>
  );
}
