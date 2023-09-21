import { Footer } from '@/Components/Shared/Footer/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 


 
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
   <div>
  {/* <NavBar></NavBar> */}
  <Component {...pageProps} />
  <Footer/> 
  </div>
  )
}
