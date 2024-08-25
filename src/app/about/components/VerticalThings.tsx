import { timelineData } from "@/src/lib/data";
import React from "react";
import { Things } from "./Things";

export default function VerticalThings() {
  return (
    <section className="w-full">
      <ul className="flex w-full flex-col justify-center items-center gap-10 mt-40">
        {timelineData.map((item, index) => (
          <Things key={index} {...item} index={index} />
        ))}
      </ul>
    </section>
  );
}
