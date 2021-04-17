import "../styles/global.scss";
import adobeloader from "../adobefont";
import { useEffect } from "react";

let isLoadComplete = false;
let loadCompleteImageNum = 0;
const po = () => {
  console.log("complete");
  loadCompleteImageNum++;
  if (loadCompleteImageNum == 1) {
    isLoadComplete = true;
    console.log("complete");
  }
};
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) {
      adobeloader(document);

      const image = new Image();
      image.src = "/images/bg.png";
      image.onload = po;
      console.log(image);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
