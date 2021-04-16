import styles from "./layout.module.scss";

export const siteTitle = "LaGardenia";

export default function Layout() {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.imgFlame} src="images/flame.png" />
        <img className={styles.loadingLogo} src="images/logo.png" />
        {/*<div className={styles.screen1} />*/}
      </div>
    </div>
  );
}
