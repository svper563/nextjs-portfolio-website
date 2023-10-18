import Script from "next/script"
import Intro from "./components/Intro";
import CertIcons from "./components/CertIcons"
import CertImages from "./components/CertImages";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Intro/>
      <CertImages/>
      <CertIcons/>
      <Footer/>
     

      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
    </>
  )
}
