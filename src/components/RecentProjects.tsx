"use client";

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-24" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
        <br /> beyond my full-time work
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-8 mt-10 p-4">
        {projects.map(({ id, title, des, iconLists, img, link }) => (
          <div
            key={id}
            className="flex justify-center items-center w-[80vw] sm:w-[524px] h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex justify-center items-center mb-10 w-[80vw] sm:w-[524px] h-[30vh] sm:h-[36vh] overflow-hidden">
                <div className="relative bg-[#13162d] lg:rounded-3xl w-full h-full overflow-hidden">
                  <Image layout="fill" src="/assets/bg.png" alt="bg-img" />
                </div>
                <Image
                  layout="fill"
                  src={img}
                  alt={title}
                  className="bottom-0 z-10 absolute object-cover"
                />
              </div>
              <h1 className="font-bold text-white text-base md:text-xl lg:text-2xl line-clamp-l">
                {title}
              </h1>
              <p className="font-light lg:font-normal text-sm lg:text-xl line-clamp-2">
                {des}
              </p>
              <div className="flex justify-between items-center mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                      className="flex justify-center items-center bg-black border border-white/[0.2] rounded-full w-8 lg:w-10 h-8 lg:h-10"
                    >
                      <Image
                        layout="fill"
                        src={icon}
                        alt={icon}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex text-purple md:text-xs text-sm lg:text-xl">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
