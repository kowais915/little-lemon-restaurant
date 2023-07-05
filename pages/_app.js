import Layout from '@/components/Layout'
import '@/styles/globals.css'

import {useState} from 'react';
import store  from '../store.js';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import {ThemeProvider } from '../context/themeContext.js'
export default function App({ Component, pageProps }) {


  return(

    <Provider store={store}>
      <ThemeProvider>
    
        <Layout >

            <Component {...pageProps} />


        </Layout>
        </ThemeProvider>
    </Provider>
  )
 


}
