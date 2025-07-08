import React from "react";
import styles from "../styles/About.module.css";
import localFont from "next/font/local";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.img_quote}>
          <div className={styles.quote}>
            <h2 className={styles.initial}>
              <span className={styles.quotes}>“</span>Children shape the
              society. <br />
              We at Sparkers believe that
            </h2>
            <h2 className={styles.tagline}>
              Every Child has a Spark.<span className={styles.quotes}>”</span>
            </h2>
            <div className={styles.tagline_from}>— Bindu Saini</div>
          </div>
          <div className={styles.img}></div>
        </div>
      </section>
      <section className={styles.academy}>
        <div className={styles.academy_head}>
          <h1>The</h1>
          <h1 className={styles.pinkHead}>Academy</h1>
        </div>
        <div className={styles.academy_img_div}>
          <Image
            width={500}
            height={500}
            src="/About/academy.jpeg"
            alt=""
            className={styles.academy_img}
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          consequuntur, alias rerum adipisci ratione laborum? Dolorum, adipisci
          corporis officia veritatis illo commodi id ratione! Minima praesentium
          necessitatibus odio quasi, ex officia dignissimos, nam suscipit neque
          magni rem unde consectetur. Ut similique delectus reiciendis doloribus
          autem at quisquam odit rem sequi deserunt dolorem laborum nam numquam,
          error tempore quibusdam omnis quam aut laboriosam itaque explicabo
          temporibus blanditiis iste recusandae? Voluptate qui quasi fugiat.
        </p>
        <div className={styles.all_about_divs}>
          <div className={styles.about_div}>
            <div className={styles.head_w_text}>
              <h2>The Principal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                illum sint, placeat quibusdam cumque odit tenetur architecto
                magnam voluptatum quia tempora tempore perferendis laboriosam
                quas ducimus, fugiat vitae cum! Delectus quod qui repudiandae,
                vero cupiditate beatae porro. Perferendis ad exercitationem
                expedita similique nihil deserunt fugiat.
              </p>
            </div>
            {/* <div className={styles.inner_img_div}>
              <Image
                width={500}
                height={500}
                src="/About/principal.jpg"
                alt=""
                className={styles.inner_img}
              />
            </div> */}
          </div>
          <div className={styles.about_div}>
            <div className={styles.head_w_text}>
              <h2>The Teachers</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                illum sint, placeat quibusdam cumque odit tenetur architecto
                magnam voluptatum quia tempora tempore perferendis laboriosam
                quas ducimus, fugiat vitae cum! Delectus quod qui repudiandae,
                vero cupiditate beatae porro. Perferendis ad exercitationem
                expedita similique nihil deserunt fugiat.
              </p>
            </div>
            <div className={styles.inner_img_div2}>
              <Image
                width={500}
                height={500}
                src="/About/teachers.jpg"
                alt=""
                className={styles.inner_img2}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// export default About;
