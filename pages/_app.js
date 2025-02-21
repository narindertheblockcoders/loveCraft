
import '../styles/globals.css'
import  'bootstrap/dist/css/bootstrap.css'
import Footer from '../Component/ui/Footer'
import Navbar from '../Component/ui/Navbar'
import '../styles/globals.css'
import Head from 'next/head';
 import Script from 'next/script'
import BussinessModal from '../Component/ui/Modals/BussinessModal'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
// useEffect(()=>{
//   if (window.innerWidth < 768) {
//     if (screen.orientation.type) {
//       screen.orientation.lock.push=("portrait")
//       // typetopush = ("portrait-primary")
//       console.log(screen.orientation.lock)  
//     }
//   }
  
// },[])
  
  return<>
  
  <Head>
  {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover,  orientation=portrait"/>
    
  <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
 
  </Head>

    <BussinessModal/>
  <Script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
  crossOrigin="anonymous"/>
  <Navbar/>
      <Component {...pageProps}  />
    <Footer/>
  </>
}

export default MyApp
