import React from "react";
import ground_1 from "../assets/intro/ground_1.mp4";
import ground_2 from "../assets/intro/ground_2.mp4";
import ground_3 from "../assets/intro/ground_3.mp4";

const Intro = () => {
  return (
    <div>
      <section
        id="section-intro"
        className="w-full h-[250vh] bg-[#EBEBEB]"
      >
        <div className="sticky top-0 w-full h-[calc(var(--vh,1vh)*100)] bg-gray-500 overflow-hidden shadow-[var(--shadow)] rounded-none transform-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full bg-[#EBEBEB] block"
          >
            <source
              src={ground_1}
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="sc-iKTcqh w-full h-full absolute top-0 left-0 bg-[#EBEBEB] block"
          >
            <source
              src={ground_2}
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="sc-iKTcqh fLlljr bg-[#EBEBEB] hidden"
          >
            <source
              src={ground_3}
              type="video/mp4"
            />
          </video>
          <div className="w-full h-[100vh] flex absolute top-0 left-0 flex-col justify-end">
            <div className="grid grid-cols-[repeat(6,1fr)] gap-4">
              <div className="item-one grid ml-[2rem]">
                <h4 id="header-reveal">
                  <span
                    className="header-sequence-2 overflow-hidden inline-block relative"
                  >
                    <span className="inline-block underline transform-none will-change-auto">
                      Get into <br />
                      the state of zen
                    </span>
                  </span>
                </h4>
                <h1 className="mt-[2rem]">
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      Dive{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      into{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      the{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      "State{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      of{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      Zen"{" "} <br />
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      with{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      ceremonial-grade{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      Matcha.{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      Achieve{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      mindfulness{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      throughout{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      the{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      day,{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      enhancing{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      focus,{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      calm,{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      and{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      a{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      deep{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      sense{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      of{" "}
                    </span>
                  </div>
                  <div className="relative overflow-hidden inline-block whitespace-pre header-sequence-1 text-[2rem]">
                    <span className="inline-block transform-none will-change-auto">
                      presence.{" "}
                    </span>
                  </div>
                </h1>
              </div>
              <div className="item-two grid ml-[2rem]">
                <h4>
                  <span
                    className="header-sequence-2 overflow-hidden inline-block relative"
                  >
                    <span className="inline-block no-underline transform-none will-change-auto">
                      Founded <br />
                      2024
                    </span>
                  </span>
                </h4>
              </div>
              <div className="item-three grid ml-[2rem] mb-[2rem]">
                <h4>
                  <span
                    className="header-sequence-2 overflow-hidden inline-block relative"
                  >
                    <span className="inline-block no-underline transform-none will-change-auto">
                      Origin of Product <br />
                      Japan
                    </span>
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
