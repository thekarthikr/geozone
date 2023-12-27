"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import {ArrowRight} from 'lucide-react'

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ServicesSliceDefaultItem } from "@/prismicio-types";
import { PrismicNextLink } from "@prismicio/next";



export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;


const ServicesLink = ({ slice }: ServicesProps): JSX.Element => {


  return (
    <section className=" p-4 md:p-8 mt-5">
      <div className="mx-auto max-w-6xl">
        {slice.items.map(({ title,description,image,link },idx) => (
          <Link
            key={idx}
            title={title}
            description={description}
            image={image}
         link={link}          
          />
        ))}
      </div>
    </section>
  );
};



const Link = ({ title, description,image,link }: ServicesSliceDefaultItem) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <PrismicNextLink field={link}>
     
    <motion.div
   
  
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-200 dark:border-neutral-700 py-4 transition-colors duration-500 hover:dark:border-neutral-50 hover:border-neutral-400 md:py-8"
    >
      <div>
        <motion.h2
          transition={{
            type: "spring",
          }}
          className="relative block text-3xl font-bold text-foreground-700 transition-colors duration-500 group-hover:text-gray-800 dark:group-hover:text-neutral-50 md:text-5xl"
        >
          {title} 
        </motion.h2>

        <p className="relative= mt-2 block text-base text-gray-700 dark:text-gray-400 transition-colors duration-500 group-hover:text-gray-800 dark:group-hover:text-neutral-50">
          {description}
        </p>
      </div>

      <motion.div
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
      >
        <Image
          width={250}
          height={250}
          src={image.url||''}
          alt={image.alt || ""}
        />
      </motion.div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <ArrowRight className="text-5xl text-foreground-800" />
      </motion.div>
    </motion.div>
    </PrismicNextLink>

  );
};

export default ServicesLink;
