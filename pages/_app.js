import Layout from '@/components/Layout'
import '@/styles/globals.css'

import {useState} from 'react';
import store  from '../store.js';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {

  return(

    <Provider store={store}>
    
        <Layout>

            <Component {...pageProps} />


        </Layout>

    </Provider>
  )
 


}
