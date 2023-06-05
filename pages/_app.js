import Layout from '@/components/Layout'
import '@/styles/globals.css'

import {useState} from 'react';
 // import Font Awesome CSS

 import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
 import { config } from "@fortawesome/fontawesome-svg-core";
 config.autoAddCss = false;


export default function App({ Component, pageProps }) {

  const [order, setOrder] = useState([]);
  const [cart, setCart] = useState(1)





  return(
    <Layout  >

        <Component {...pageProps} />

    </Layout>

  )
 


}
