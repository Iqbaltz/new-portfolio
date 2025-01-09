/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Readings = () => {
  return (
    <section className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Latest Books</span>
      </h1>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4 my-20">
        <Card title="Sheetal is Nisha" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Nisha is Munni" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Munni is Aditi" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative relative flex justify-center items-center dark:border-white/[0.2] mx-auto p-4 border border-black/[0.2] w-full max-w-sm h-[30rem] group/canvas-card"
    >
      <Icon className="-top-3 -left-3 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="-bottom-3 -left-3 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="-top-3 -right-3 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="-right-3 -bottom-3 absolute w-6 h-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="flex justify-center items-center group-hover/canvas-card:opacity-0 mx-auto w-full text-center transition group-hover/canvas-card:-translate-y-4 duration-200">
          {icon}
        </div>
        <h2 className="group-hover/canvas-card:text-white relative z-10 opacity-0 group-hover/canvas-card:opacity-100 mt-4 font-bold text-black text-xl dark:text-white transition group-hover/canvas-card:-translate-y-2 duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover/canvas-card:text-white w-10 h-10 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Readings;
