import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="gap-10 grid grid-cols-1 md:grid-cols-4 mt-12 w-full">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 dark:border-slate-800 text-white"
          >
            <div className="flex lg:flex-row flex-col lg:items-center gap-2 py-6 p-3 md:p-5 lg:p-10">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5">
                <h1 className="font-bold text-start text-xl md:text-2xl">
                  {card.title}
                </h1>
                <p className="mt-3 font-semibold text-start text-white-100">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;