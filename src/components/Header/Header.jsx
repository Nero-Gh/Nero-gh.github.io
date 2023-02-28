import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltLeft, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutSideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutSideAlerter({
    menuRef,
    setMenuOpened,
  });
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={headerVariants}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Bismark</div>
        <ul
          ref={menuRef}
          className={`flexCenter ${css.menu}`}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+233 247 642 813</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        {/* for medium and small sceen */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltLeft size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
