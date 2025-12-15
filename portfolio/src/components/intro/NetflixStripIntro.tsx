"use client";

import { useEffect } from "react";
import styles from "./netflixIntro.module.css";

interface Props {
  onFinish: () => void;
}

export default function NetflixStripIntro({ onFinish }: Props) {
  useEffect(() => {
    const t = setTimeout(onFinish, 1800);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <span className={styles.text}>Abhishek</span>

        {/* Vertical strips */}
        <div className={styles.strips}>
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={styles.strip}
              style={{ animationDelay: `${i * 0.045}s` }}
            />
          ))}
        </div>

        {/* Light sweep */}
        <span className={styles.sweep} />
      </div>
    </div>
  );
}
