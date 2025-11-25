"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  swiper,
  containerStyles,
  btnStyles,
  iconsStyles,
}) => {
  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} hover:text-white hover:border hover:border-white transition-all`}
        onClick={() => swiper?.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={`${btnStyles} hover:text-white hover:border hover:border-white transition-all`}
        onClick={() => swiper?.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
