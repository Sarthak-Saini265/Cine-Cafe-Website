"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import styles from "../styles/Swiper.module.css";

export default function MediaSwiper() {
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/trailers")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        const modified = data.map((trailer) => ({
          ...trailer,
          src: trailer.src.includes("youtube")
            ? `${trailer.src.replace(
                /(\?.+)?$/,
                "?"
              )}autoplay=1&mute=1&enablejsapi=1&rel=0&controls=0&disablekb=1`
            : trailer.src,
        }));
        setTrailers(modified);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!trailers.length)
    return <div className={styles.empty}>No trailers available</div>;

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 7000, disableOnInteraction: true }}
      loop={true}
      keyboard={{ enabled: true }}
      className={styles.swiper}
    >
      {trailers.map((trailer, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <div className={styles.slideShow}>
            <div className={styles.iframeWrapper}>
              <iframe
                src={trailer.src}
                className={styles.slide}
                title={`Trailer ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                style={{ pointerEvents: "none" }}
              />
            </div>
            <div className={styles.slideCap}>
              <h2>{trailer.caption}</h2>
              <p>{trailer.date}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
