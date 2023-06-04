import Layout from '@/components/Layout'
import '@/styles/globals.css'
 // import Font Awesome CSS

 import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
 import { config } from "@fortawesome/fontawesome-svg-core";
 config.autoAddCss = false;


export default function App({ Component, pageProps }) {

  return(
    <Layout>

        <Component {...pageProps} />

    </Layout>

  )
 


}
