"use client";
import React from "react";
import { motion } from "framer-motion";
import { timelineData } from "@/src/lib/data";
import Image from "next/image";
import { BiArrowFromRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

type ThingsProps = (typeof timelineData)[number] & {
  index: number;
};

export const Things: React.FC<ThingsProps> = ({
  title,
  description,
  icon,
  idk,
  image,
  link,
  index,
}) => {
  return (
    <motion.div
      className={`flex w-full justify-center gap-4 sm:gap-0 450px:justify-evenly items-center ${
        index === 1 ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 items-center">
          <Image src={icon} alt="sla"></Image>
          <h5 className="text-sm lg:text-base">{idk}</h5>
        </div>
        <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-neutral-200">
          {title}
        </h3>

        <p className="font-bold flex text-gray-600 max-w-[200px] md:max-w-[350px] lg:max-w-[500px] text-xs md:text-sm lg:text-base">
          {description}
        </p>
        <p className="flex text-xs md:text-sm items-center gap-4">
          {link}
          <BsArrowRight className="mt-1" />
        </p>
      </div>
      <Image
        src={image}
        alt="sla"
        className="size-32 md:size-44 lg:size-80"
      ></Image>
    </motion.div>
  );
};
