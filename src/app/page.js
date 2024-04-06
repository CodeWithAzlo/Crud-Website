import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.linkContainer}>
        <h1 className={styles.tag}>MY CRUD WEBSITE USING NEXT JS</h1>
        <Link href={"/addproduct"} className={styles.links}>
          GO TO POST PRODUCT PAGE....
        </Link>
        <Link href={"/showProducts"} className={styles.links}>
          Show the Products....
        </Link>
      </div>
    </main>
  );
}
