import "typeface-oswald";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/animate.css";
import "@/css/font-awesome.min.css";
import "@/css/icons.css";
import "@/css/preset.css";
import "@/css/theme.css";
import "@/css/responsive.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-WKQW932" });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
