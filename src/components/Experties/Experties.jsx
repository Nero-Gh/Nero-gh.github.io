import React from "react";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Experties = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <a href="" className="anchor" id="services"></a>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((skills, i) => {
            return (
              <motion.div
                variants={fadeIn("left", "tween", (i + 1) * 0.2, 1)}
                className={css.skills}
                key={i}
              >
                <div className="flexCenter" style={{ background: skills.bg }}>
                  <skills.icon size={25} color="white" />
                </div>
                <div>
                  <span>{skills.name} </span>
                  <span className="secondaryText">
                    {" "}
                    Projects {skills.projects}{" "}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.RightSide}
        >
          <span className="primaryText">What do I help?</span>
          {WhatDoIHelp.map((help, i) => {
            return <span key={i}>{help}</span>;
          })}
          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">500+</span>
              <span className="secondaryText">Project Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">100+</span>
              <span className="secondaryText">Happy Clients😊</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experties;
