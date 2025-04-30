/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaDochub, FaFilePdf, FaLocationArrow } from "react-icons/fa6";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="pt-32 pb-20">
      <div>
        <Spotlight
          className="-top-40 md:-top-20 -left-10 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full w-[50vw] h-[80vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 w-[50vw] h-[80vh]" fill="blue" />
      </div>

      <div className="top-0 left-0 absolute flex justify-center items-center bg-grid-black/[0.2] dark:bg-grid-white/[0.03] bg-white dark:bg-black-100 w-full h-screen">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex justify-center items-center bg-white dark:bg-black-100 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="z-10 relative flex justify-center my-20">
        <div className="flex flex-col justify-center items-center max-w-[89vw] md:max-w-[2xl] lg:max-w-[60vw]">
          <h2 className="max-w-80 text-blue-100 text-xs text-center uppercase tracking-widest">
            Personal Web Portfolio
          </h2>

          <TextGenerateEffect
            className="text-[40px] md:text-5xl lg:text-6xl text-center"
            words="Living, Learning, Leveling Up One Day At a Time"
          />

          <p className="mb-4 text-sm md:text-lg lg:text-2xl text-center md:tracking-wider">
            Hi! I&apos;m Iqbal, a software engineer based in Indonesia.
          </p>

          <a href="/CV Muhammad Iqbal - Software Engineer.pdf" download>
            <MagicButton
              title="Download My CV"
              position="right"
              icon={<FaFilePdf />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
