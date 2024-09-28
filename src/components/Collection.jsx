import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import collection from "../assets/collection.svg";
import box_premium from "../assets/collection/box_premium.mp4";
import box_daily from "../assets/collection/box_daily.mp4";

const Collection = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  // const y1 = useTransform(scrollYProgress, [0.6, 1], ["0", "12"]);
  const y2 = useTransform(scrollYProgress, [0, 0.3], ["180%", "-100%"]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.6], ["130%", "-170%"]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 150   ]);

  return (
    <div ref={scrollRef}>
      <section
        id="scroll-container"
        className="h-[calc(var(--vh,1vh)*600)]"
      >
        <div
          id="slide-container"
          className="w-full h-[calc(var(--vh,1vh)*100)] bg-[#EBEBEB] sticky overflow-hidden top-0"
        >
          <div
            className={`slide w-full h-[calc(var(--vh,1vh)*100)] absolute top-0 left-0 flex flex-col justify-center `}
          >
            <motion.div className={`sc-kkmypM bAVSov flex justify-center items-center `}>
                <motion.img style={{ scale }} src={collection} alt="" />
            </motion.div>
          </div>
          <motion.div
            className="slide w-full h-[calc(var(--vh,1vh)*100)] absolute top-0 left-0 flex place-content-center flex-col justify-center transform-none"
            style={{ y: y2 }}
          >
            <a
              href="https://yamamatcha.com/products/daily-matcha"
              target="_blank"
              rel="noreferrer"
              className="for-video w-full h-full rounded-md absolute top-0 left-0 flex place-content-center"
            >
              <div className="sc-dnaUSb gyURjT w-[20vw] h-[50vh] flex justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full rounded-md object-cover"
                >
                  <source
                    src={box_premium}
                    type="video/mp4"
                  />
                </video>
              </div>
            </a>
          </motion.div>
          <motion.div
            className="slide w-full h-[calc(var(--vh,1vh)*100)] absolute top-0 left-0 flex place-content-center transform-none"
            style={{ y: y3 }}
          >
            <a
              href="https://yamamatcha.com/products/premium-matcha"
              target="_blank"
              rel="noreferrer"
              className="for-video w-full h-full rounded-md absolute top-0 left-0 flex place-content-center"
            >
              <div className="sc-dnaUSb gyURjT flex justify-center w-[20vw] h-[50vh]  transform-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-md"
                >
                  <source
                    src={box_daily}
                    type="video/mp4"
                  />
                </video>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
