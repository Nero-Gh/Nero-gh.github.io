import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a href="" className="anchor" id="portfolio"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.header}`}>
          <div>
            <span className="primaryText">Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>

          <span className={` secondaryText ${css.view}`}>View More</span>
        </div>

        {/* project images */}
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./showCase11.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./showCase22.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./showCase33.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.11, 0.6)}
            src="./showCase44.jpg"
            alt="project"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
