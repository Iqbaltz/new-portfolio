import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
};

const MagicButton = ({
  title,
  icon,
  position = "left",
  otherClasses,
  handleClick,
}: Props) => {
  return (
    <button
      onClick={handleClick}
      className="inline-flex relative p-[1px] rounded-lg h-12 overflow-hidden focus:outline-none"
    >
      <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_2s_linear_infinite]" />
      <span
        className={`inline-flex gap-2 justify-center items-center bg-slate-950 backdrop-blur-3xl px-7 rounded-lg w-full h-full font-medium text-sm text-white cursor-pointer ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
