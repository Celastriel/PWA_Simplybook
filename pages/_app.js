import  Head from 'next/head'
import { useEffect } from 'react';
import '../styles/globals.css'
import  getToken  from '../lib/token';
import { Navbar } from '../components/Navbar';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    (async function data(){
      const token = await getToken()
      if(window !== undefined){
        localStorage.setItem('token',token.token)
        localStorage.setItem('refresh_token',token.refresh_token)
      }
    })();  
  },[])

  return <><Head><meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' /></Head>
  <Layout>
  <Component {...pageProps}/>
  </Layout>
  </>
}

export default MyApp
