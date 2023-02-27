import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innnerWidth ${css.container}`}
      >
        {/* upper Elements */}
        <div className={css.upperElement}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There!, <br /> I'm Bismark
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            I build and design <br /> Websites
          </motion.span>
        </div>
        {/* person image */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("right", "tween", 0.2, 1)}
            src="./person.png"
            alt=""
          />
        </motion.div>

        {/* email */}
        <motion.a
          variants={fadeIn("right", "tween", 0.2, 1)}
          href="mailto:kadogbebismark@gmail.com"
          className={css.email}
        >
          Kadogbebismark@gmail.com
        </motion.a>

        {/* lower Elements */}
        <div className={css.lowerElement}>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.experience}
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>Certified Professional</span>
            <span>UI/UX designer</span>
            <span>Web Developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
