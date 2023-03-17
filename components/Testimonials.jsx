import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/testimonials.module.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import { motion } from "framer-motion";
const Testimonials = () => {
  const testiRef = useRef();
  const [translateValue, setTranslateValue] = useState(0);
  const [active, setActive] = useState(0);

  const moveRight = () => {
    if (translateValue >= 0) {
      setTranslateValue(-1 * (300 * (testiRef.current.children.length - 1)));
      setActive(testiRef.current.children.length - 1);
    } else {
      setTranslateValue((pre) => pre + 300);
      setActive((pre) => pre - 1);
    }
  };

  useEffect(() => {
    if (translateValue < 0) {
      testiRef.current.style.transform = `translateX(${-1 * translateValue}px)`;
    } else {
      testiRef.current.style.transform = `translateX(-${translateValue}px)`;
    }
  }, [translateValue]);

  useEffect(() => {
    if (active < 0 || active > testiRef.current.children.length - 1) return;
    Array.from(testiRef.current.children)[active].style.backgroundColor =
      "white";
  }, [active]);

  const moveLeft = () => {
    if (translateValue <= -1 * (300 * (testiRef.current.children.length - 1))) {
      setTranslateValue(0);
      setActive(0);
    } else {
      setTranslateValue((pre) => pre - 300);
      setActive((pre) => pre + 1);
    }
  };

  const TestiDiv = () => {
    return (
      <div className={styles.testiDiv}>
        <span>
          <FaInstagram />
        </span>
        <p>
          تطبيق سهل جدا ومفيد ، لقد قمت بالشراء والبيع من خلاله أنصح باستخدامه
          وبشدة
        </p>
      </div>
    );
  };

  return (
    <div id="اراء" className={styles.testi}>
      <div className={`${styles.testiContent} container`}>
        <img
          className={styles.rightArrow}
          onClick={moveRight}
          src={rightArrow.src}
        />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          ref={testiRef}
        >
          <TestiDiv />
          <TestiDiv />
          <TestiDiv />
          <TestiDiv />
          <TestiDiv />
          <TestiDiv />
          <TestiDiv />
          <TestiDiv />
        </motion.div>
        <img
          className={styles.leftArrow}
          src={leftArrow.src}
          onClick={moveLeft}
        />
      </div>
    </div>
  );
};

export default Testimonials;
