"use client"; // <-- Add this at the top to mark as Client Component

import React, { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.allNav}>
      <div className={styles.nav}>
        <div className={styles.profile}>
          <div className={styles.logoContainer}>
            {/* <Image src="/logo.png" alt="Logo" width={50} height={50} className={styles.logo} /> */}
          </div>
          <div className={styles.profileName}>D Cine Logo</div>
        </div>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/movies" className={styles.link}>
            Movies
          </Link>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact Us
          </Link>
          <Link href="/contact" className={`${styles.link} ${styles.enroll}`}>
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <Image
            src="/Home/menu.png"
            height={50}
            width={50}
            alt="Menu"
            className={styles.mobileMenu}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu (Conditional) */}
      {visible && (
        <div className={styles.menu}>
          <div className={styles.menuList}>
            <Link
              href="/"
              className={styles.menuLink}
              onClick={() => setVisible(false)}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={styles.menuLink}
              onClick={() => setVisible(false)}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={styles.menuLink}
              onClick={() => setVisible(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={styles.menuLink}
              onClick={() => setVisible(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className={`${styles.menuLink} ${styles.menuEnroll}`}
              onClick={() => setVisible(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
