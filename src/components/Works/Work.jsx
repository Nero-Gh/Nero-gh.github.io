import React from "react";
import css from "./Work.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import { workExp } from "../../utils/data";

const Work = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a href="" className="anchor" id="experience"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText">Work Experience</span>
        <div className={css.experience}>
          {workExp.map((exp, i) => {
            return (
              <motion.div
                variants={textVariant2}
                key={i}
                className={`flexCenter ${css.exp}`}
              >
                <div className={css.post}>
                  <h2>{exp.place}</h2>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h2>{exp.role}</h2>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}
          <motion.div variants={zoomIn(1, 1)} className={css.progressBar}>
            <motion.div
              variants={fadeIn("down", "tween", 1, 1)}
              className={css.line}
            ></motion.div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#286f6c" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#f2704e" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#eec048" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
