import Script from "next/script"
import CertIcons from "./components/CertIcons"

export default function Home() {
  return (
    <>

      <h1 className='header'>Welcome home.</h1>
      <p className='description'>I'll put useful stuff here, eventually.</p>
      <CertIcons/>

      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
    </>
  )
}
