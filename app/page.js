import Image from "next/image";
import styles from "./styles/Home.module.css";
import MediaSwiper from "./Components/MediaSwiper";

export default function Home() {
  return (
    <div className="main">
      <section className={styles.trailers}>
        <MediaSwiper />
      </section>
      <section className={styles.explore}>
        <h1 className={styles.exploreText}>EXPLORE</h1>
      </section>
    </div>
  );
}
