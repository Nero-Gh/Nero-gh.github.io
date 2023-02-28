import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { FaLinkedin } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make somethig <br /> amazing together😎
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="mailto:kadogbebismark@gmail.com"> Saying Hi...👈</a>
          </span>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <div className="secondaryText">Information</div>
            <p>N653 Ohene djan high street, Nsawam, Ghana</p>
          </div>

          <div className={css.menu}>
            <li>
              <a href="https://www.linkedin.com/in/bismark-kadogbe-45342b137">
                <ImLinkedin />
                Bismark Kadogbe
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/bismark.aboagye1">
                <ImFacebook2 />
                Bismark Kadogbe
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/Neroaboagye?t=FaeSXlbg0wD7AsPtKgVk0g&s=09">
                <ImTwitter />
                Bismark Kadogbe
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bismark.aboagye1">
                <ImInstagram />
                Bismark Kadogbe
              </a>
            </li>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
