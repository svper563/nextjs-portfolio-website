import Script from "next/script"
import Intro from "./components/Intro";
import CertIcons from "./components/CertIcons"
import CertImages from "./components/CertImages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="sky">
        <Navbar/>
        <Intro/>
        <CertImages/>
        <br/>
        <CertIcons/>
      </div>

      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <div className="land">
        <Footer/>
      </div>
     

      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
    </div>
  )
}
