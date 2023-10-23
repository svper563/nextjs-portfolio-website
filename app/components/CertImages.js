import Image from "next/image"
import styles from "./Certs.module.css";

export default function CertImages() {
    return (
        <div className={styles.certs}>
            <Image className={styles.cert} src="/Aplus-Logo-Certified-CE-White.png" width={300} height={300} alt="A+ Certified Logo"/>
            <Image className={styles.cert} src="/NetworkPlus Logo Certified CE White.png" width={300} height={300} alt="Network+ Certified Logo"/>
            <Image className={styles.cert} src="/Python Coding Specialist.png" width={300} height={300} alt="Python Coding Specialist Logo"/>
        </div>
    )
}