import styles from "./layout.module.scss";
import Head from "next/head";

export const siteTitle = "LaGardenia";

function Info() {
  return (
    <div>
      <div className={styles.Label}></div>
    </div>
  );
}
function TrackList() {
  return (
    <div>
      <div className={styles.Label}>TrackList</div>
      <div>曲1</div>
      <div>曲2</div>
      <div>曲3</div>
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
      <div className={styles.Label}>Credits</div>
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
    <div>
      <Head>
        <title>{"LA GARDENIA"}</title>
      </Head>
      <div className={styles.intro}>
        <img className={styles.imgFlame} src="images/flame.png" />
        <img className={styles.loadingLogo} src="images/logo.png" />
      </div>
      {/*<div className={styles.screen1} />*/}
      <div className={styles.jacketBGDummy} />
      <div className={styles.jacketBG}>
        <div className={styles.bgDiv} />
        {/*<img className={styles.angel} src="images/angel.png" />*/}
      </div>
      <div className={styles.container}>
        <Info />
        <TrackList />
        <Credit />
      </div>
    </div>
  );
}
