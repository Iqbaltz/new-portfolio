import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-10" id="testimonials">
      {/* <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1> */}
      <div className="flex flex-col items-center max-lg:mt-10">
        {/* <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        /> */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <React.Fragment key={id}>
              <div
                key={id}
                className="flex items-center gap-2 max-w-32 md:max-w-60"
              >
                <img src={img} alt={name} className="w-5 md:w-10" />
                <img
                  src={nameImg}
                  alt={name}
                  className="w-20 md:w-24"
                  width={id === 4 || id === 5 ? 100 : 150}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
