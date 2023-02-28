import React from "react";
import css from "./People.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { comments, sliderSettings } from "../../utils/data";
import Slider from "react-slick";

const People = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a href="" className="anchor" id="testimonial"></a>
      <motion.div
        variants={footerVariants}
        className={`ypaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">What People Say</span>
          <p style={{ marginTop: "2rem" }}>
            {/* I'm grateful that I had the to work with you */}I got a job that
            was in accordance with my skills and abilities
          </p>
          <p>
            {/* Man you are such a life saver, may God bless your hastle */}
            The process was very easy and fast😊
          </p>
        </div>

        {/* carousel */}
        <div className={`yPaddings ${css.comments}`}>
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default People;
