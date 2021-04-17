import "../styles/global.scss";
import adobeloader from "../adobefont";
import { useEffect, useState } from "react";
import autoprefixer from "autoprefixer";

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
      Loading...
      {progressStr}
    </div>
  );
}

const imageURLs = [
  "/images/bg.png",
  "/images/bubble.png",
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

  const onImageLoad = () => {
    loadedNum++;
    setProgress((loadedNum / imageURLs.length) * 100);
    if (loadedNum == imageURLs.length) {
      setComplete(true);
    }
  };

  useEffect(() => {
    if (process.browser) {
      adobeloader(document);

      imageURLs.forEach((url) => {
        const image = new Image();
        image.src = url;
        image.onload = onImageLoad;
      });
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
