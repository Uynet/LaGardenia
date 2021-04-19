import "../styles/global.scss";
import Head from "next/head";
import adobeloader from "../adobefont";
import { useEffect, useState } from "react";

function Loading(props) {
  const { progress } = props;
  const progressStr = (Math.floor(progress) + "").slice(0, 3) + "%";
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        color: "#777",
      }}
    >
      <Head>
        <title>{"LA GARDENIA"}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="永遠の箱庭" />

        <meta property="og:title" content="LA GARDENIA" />
        <meta property="og:site_name" content="LA GARDENIA" />
        <meta property="og:description" content="永遠の箱庭" />
        <meta property="og:url" content="https://lagardenia.uynet.work" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://lagardenia.uynet.work/images/jacket_omote.png"
        />
        <meta name="twitter:description" content="永遠の箱庭" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LA GARDENIA" />
        <meta
          name="twitter:image"
          content="https://lagardenia.uynet.work/images/jacket_omote.png"
        />
      </Head>
      Loading...
      {progressStr}
    </div>
  );
}

const imageURLs = [
  /*
  "/images/bg-none.png",
  "/images/label.png",
  "/images/bg2.png",
  "/images/bubble.png",
  */
  /*  ---  */
  "/images/bg.png",
  "/images/jacket_omote.png",
  "/images/angel-mini.png",
  "/images/flame.png",
  "/images/flame-LT.png",
  "/images/logo.png",
  "/images/line.png",
];
function MyApp({ Component, pageProps }) {
  let [isLoadComplete, setComplete] = useState(false);
  let [progress, setProgress] = useState(0);
  let loadedNum = 0;
  let isFontLoaded = false;

  const onImageLoad = () => {
    loadedNum++;
    setProgress((loadedNum / imageURLs.length) * 100);
    if (loadedNum == imageURLs.length) {
      setComplete(true);
    }
  };

  const checkFontLoad = () => {
    const loaded =
      document.documentElement.className.split(" ").indexOf("wf-active") > 0;
    if (!loaded) setTimeout(checkFontLoad, 500);
    else {
      isFontLoaded = true;
      setProgress(0);
      load();
    }
  };
  const load = () => {
    imageURLs.forEach((url) => {
      const image = new Image();
      image.src = url;
      image.onload = onImageLoad;
    });
  };

  useEffect(() => {
    if (process.browser) {
      adobeloader(document);
      checkFontLoad();

      return;
    }
  }, []);
  return (
    <>
      {isLoadComplete ? (
        <Component {...pageProps} />
      ) : (
        <Loading progress={progress} />
      )}
    </>
  );
}

export default MyApp;
