import styles from "./layout.module.scss";
import Head from "next/head";

export const siteTitle = "LaGardenia";

function Copyright() {
  return (
    <div>
      <div className={styles.copyright}>
        Copyright© 2021 uynet.work All Rights Reserved.
      </div>
    </div>
  );
}
function Info() {
  return (
    <div>
      <div className={styles.Label}>Info</div>
    </div>
  );
}

function Track(props) {
  const { title, credit } = props;
  return (
    <div className={styles.track}>
      <div className={styles.trackName}>{title}</div>
      <div className={styles.trackCredit}>{credit}</div>
    </div>
  );
}
function TrackList() {
  return (
    <div>
      <div className={styles.Label}>TrackList</div>
      <Track
        title="ミルキーホワイト"
        credit="/ Lyrics:まりあ歩 / Vocal:初音ミク"
      />
      <Track title="Utopia Garden" />
      <Track title="Noname History" />
      <Track title="此岸ノ華" />
      <Track title="Astral Heaven" />
      <Track title="Ever Rezort" credit="/ Arrange:しーけー" />
      <Track title="Falewell" />
    </div>
  );
}

function Flames() {
  return (
    <div>
      <img
        src="/images/flame-LT.png"
        className={styles.flameLT + " " + styles.flame}
      />
      <img
        src="/images/flame-LT.png"
        className={styles.flameRT + " " + styles.flame}
      />
      <img
        src="/images/flame-LT.png"
        className={styles.flameLB + " " + styles.flame}
      />
      <img
        src="/images/flame-LT.png"
        className={styles.flameRB + " " + styles.flame}
      />
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
function checkDevice() {
  const ut = navigator.userAgent;
  if (
    ut.indexOf("iPhone") > 0 ||
    ut.indexOf("iPod") > 0 ||
    (ut.indexOf("Android") > 0 && ut.indexOf("Mobile") > 0)
  ) {
    return "SP";
  } else if (ut.indexOf("iPad") > 0 || ut.indexOf("Android") > 0) {
    return "TABLET";
  } else {
    return "PC";
  }
}

export default function Layout() {
  const isSp = checkDevice() == "SP";

  return (
    <div>
      <Head>
        <title>{"LA GARDENIA"}</title>
      </Head>
      <div className={styles.intro}>
        <img className={styles.imgFlame} src="images/flame.png" />
        <img className={styles.loadingLogo} src="images/logo.png" />
        <Flames />
      </div>
      <div className={styles.jacketBGDummy} />
      <div className={styles.jacketBG}>
        <div className={styles.bgDiv} />
      </div>
      <div className={styles.block} />
      <div className={styles.container}>
        <Info />
        <TrackList />
        <Credit />
        <img
          src="images/angel-mini.png"
          className={styles.mini}
          width="200px"
        />
        <Copyright />
      </div>
    </div>
  );
}
