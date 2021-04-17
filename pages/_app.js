import "../styles/global.scss";
import adobeloader from "../adobefont";
import { useEffect, useState } from "react";
import autoprefixer from "autoprefixer";

function Loading() {
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
  let loadedNum = 0;

  const onImageLoad = () => {
    loadedNum++;
    console.log(loadedNum);
    if (loadedNum == imageURLs.length) {
      //setComplete(true);
      console.log("complete");
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
  console.log(loadedNum);
  return <>{isLoadComplete ? <Component {...pageProps} /> : <Loading />}</>;
}

export default MyApp;
