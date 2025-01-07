import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Bruno Rossi</h1>
        <p>Bruno Rossi is a software engineeer and localization program manager with a passion for building globalization-friendly apps.</p>
      </main>
    </div>
  );
}
