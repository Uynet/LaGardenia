import "../styles/global.scss";
import adobeloader from "../adobefont";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) adobeloader(document);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
