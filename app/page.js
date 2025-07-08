// import Image from "next/image";
import styles from "./styles/Home.module.css";
import MediaSwiper from "./Components/MediaSwiper";

export default function Home() {
  return (
    <section className={styles.trailers}>
      <MediaSwiper />
    </section>
  );
}
