"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import "@/app/globals.css";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "This was also developed during my first Origamid course. At the end of it. Is about electric bikes.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/bikcraft.png",
    live: "https://arthurfialho.github.io/bikcraft/",
    github: "https://github.com/ArthurFialho/bikcraft",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "An open source front-end project I developed using React, Tailwind CSS, and Three.js. I created an interactive, responsive, and immersive 3D book to explore new web experiences and experiment with 3D graphics.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Three.js" },
    ],
    image: "/assets/work/bookslider.png",
    live: "https://booksliderproject.vercel.app/",
    github: "https://github.com/ArthurFialho/booksliderproject",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "Ogani was developed as a reproduction of a website, at Cotemig high school, in 2024.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind.css" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/ogani.png",
    live: "https://arthurfialho.github.io/reproducaodesiteogani/",
    github: "https://github.com/ArthurFialho/reproducaodesiteogani",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "This project is SocaCan. It was built using Next.js, Node.js, and Tailwind CSS, featuring smooth CSS animations. The main goal of this project was to enhance my learning experience.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/sodacan.png",
    live: "https://arthurfialho.github.io/sodacan/",
    github: "https://github.com/ArthurFialho/sodacan",
  },
  {
    num: "05",
    category: "fullstack",
    title: "project 5",
    description:
      "This was my second hosted portfolio, built with CSS and JavaScript animations. It is fully responsive, features an interactive design based on UI/UX principles, and includes a dark mode.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/portfoliodev.png",
    live: "https://arthurfialho.github.io/portfoliodev/",
    github: "https://github.com/ArthurFialho/portfoliodev",
  },
];

const Work = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group border hover:border-accent">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group border hover:border-accent">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[530px] mb-12"
              onSwiper={setSwiperInstance}
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 hover-img">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-[30px]"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                swiper={swiperInstance}
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-[8px]"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
