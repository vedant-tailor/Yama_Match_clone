import React from 'react'
import text1 from "../assets/text1.svg";
import header_bubbles from "../assets/header_bubble.mp4";
import {motion, useTransform, useScroll} from "framer-motion"


const Hero = () => {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
    const up1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const up2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div>
        <div className="pl-[2rem]">
        <div
          className="header-display-text"
          
        >
          <div
            id="header-video-container"
            className="absolute bottom-0 rounded-lg z-[1]  -translate-y-[25vh] translate-x-[40vw] w-[40vw]"
            
          >
            
            <motion.video
              className="w-full h-full object-cover rounded-md "
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ rotate: rotate , y: up2}}
            >
              <source src={header_bubbles} type="video/mp4" />
            </motion.video>
          </div>
          <div
            id="header-display-2"
            className="z-[3] relative"
            
          >
            <motion.h4 style={{ y: up1 }} className="mb-2 text-sm relative z-0 transform-none">
              ( CEREMONIAL )
            </motion.h4>
            <motion.img className="mb-10" src={text1} alt="" style={{ y: up1 }} />
          </div>
        </div>
        <div
          className="flex justify-between"
          
        >
          <div className="flex justify-between">
            <div
              className="header-text-one"
              
            >
              <h4 className="">
                <span className="header-reveal-body overflow-hidden inline-block relative">
                  <span className="text-sm no-underline transform-none will-change-auto">
                    ( SCROLL DOWN )
                  </span>
                </span>
              </h4>
            </div>
            <div
              className="header-text-two w-[50%]"
              
            >
              <span className="header-reveal-body overflow-hidden inline-block relative">
                <span className="inline-block no-underline transform-none will-change-auto">
                  <h4 className="text-sm mr-[8vw]">
                    Yama Matcha, founded in 2024, specializes in high-quality
                    matcha products. As a retailer, it offers premium
                    ceremonial-grade matcha powder for those seeking an
                    authentic and mindful tea experience.
                  </h4>
                </span>
              </span>
            </div>
          </div>
          <div
            className="header-text-three mr-[2rem]"
            s
          >
            <h4>
              <span className="header-reveal-body overflow-hidden inline-block relative">
                <span className="text-sm inline-block underline transform-none will-change-auto">
                  EXPLORE
                </span>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero