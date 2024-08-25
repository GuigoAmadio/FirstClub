import React from "react";
import { squares } from "@/src/lib/data";
import { Square } from "./square";

export default function Squares() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-10 mt-40">
      {squares.map((squares, index) => (
        <Square key={index} {...squares} />
      ))}
    </section>
  );
}
