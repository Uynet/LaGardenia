import styles from "./layout.module.scss";
import Head from "next/head";
import Link from "next/link";

export const siteTitle = "LaGardenia";

function Copyright() {
  return (
    <div>
      <div className={styles.copyright}>
        {"Copyright© 2021 uynet All Rights Reserved."}
      </div>
    </div>
  );
}
function Store() {
  return (
    <div>
      <div className={styles.Label}>Store</div>
      <div className={styles.store}>comming soon...</div>
    </div>
  );
}

function Info() {
  return (
    <div>
      <div className={styles.Label}>Info</div>
      <div className={styles.info}></div>
    </div>
  );
}

function Track(props) {
  const { num, title, credit } = props;
  return (
    <div className={styles.track}>
      <div
        style={{
          display: "inline",
        }}
      >
        {num + " : "}
      </div>
      <div className={styles.trackName}>{title}</div>
      <div className={styles.trackCredit}>{credit}</div>
    </div>
  );
}

function SoundCloudEmbed() {
  return (
    <>
      <iframe
        width="100%"
        height="200"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912073345&color=%233144a1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: 10,
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        <a
          href="https://soundcloud.com/uynet"
          title="uynet"
          target="_blank"
          style={{
            color: "#cccccc",
            textDecoration: "none",
          }}
        >
          uynet
        </a>
        <a
          href="https://soundcloud.com/uynet/stella_xfd"
          title="STELLA"
          target="_blank"
          style={{
            color: "#cccccc",
            textDecoration: "none",
          }}
        >
          STELLA
        </a>
      </div>
    </>
  );
}

function TrackList() {
  return (
    <div>
      <div className={styles.Label}>TrackList</div>
      <div className={styles.trackList}>
        <Track
          num="1"
          title="ミルキーホワイト"
          credit="/ Lyrics:まりあ歩 / Vocal:初音ミク"
        />
        <Track num="2" title="Utopia Garden" />
        <Track num="3" title="Noname History" />
        <Track num="4" title="此岸ノ華" />
        <Track num="5" title="Astral Heaven" />
        <Track num="6" title="Ever Rezort" credit="/ Arrange:しーけー" />
        <Track num="7" title="Falewell" />
        <SoundCloudEmbed />
      </div>
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
  const { link, name, role } = props;
  return (
    <div className={styles.creditArea}>
      <a href={link}>
        <div className={styles.creditRole}>{role}</div>
        <div className={styles.creditName}>{name}</div>
      </a>
    </div>
  );
}

function Credit() {
  return (
    <div>
      <div className={styles.Label}>Credits</div>
      <div className={styles.credits}>
        <CreditArea
          link="https://twitter.com/uynet"
          name="uynet"
          role="Compose"
        />
        <CreditArea
          link="https://twitter.com/7ck_x"
          name="しーけー"
          role="Guest"
        />
        <CreditArea name="まりあ歩" role="Lyrics" />
        <CreditArea
          link="https://twitter.com/_yaigi"
          name="やいぎ"
          role="Design"
        />
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
      <div
        className={styles.container}
        style={{
          background: isSp ? "rgba(255,255,255,0.85)" : "",
        }}
      >
        <TrackList />
        <Info />
        <Store />
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
