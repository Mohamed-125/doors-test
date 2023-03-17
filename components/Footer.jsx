import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.svg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import googlePlay from "../assets/google-play.png";
import playStore from "../assets/apple-store.png";
import huawei from "../assets/هواوي.svg";
const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <img src={logo.src} />
      <p>
        منصة أبواب أحدث منصة للبيع والشراء (جديد ومستعمل) بطريقه امنه ومضمونه{" "}
      </p>
      <div>
        <button>
          تحميل للاندرويد
          <img src={googlePlay.src} />
        </button>
        <button>
          تحميل للايفون
          <img src={playStore.src} />
        </button>
        <button>
          تحميل هواوي
          <img src={huawei.src} />
        </button>
      </div>
      <div>
        <a>
          <FaLinkedin />
        </a>
        <a>
          <FaInstagram />
        </a>
        <a>
          <BsTwitter />
        </a>
        <a>
          <BsGoogle />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
