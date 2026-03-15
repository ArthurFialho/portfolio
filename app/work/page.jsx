"use client";

import { motion } from "framer-motion";
import React from "react";
import InfiniteMenu from "@/components/InfiniteMenu";
import RippleGrid from "@/components/bgs/RippleGrid";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const projects = [
  {
    image: "/assets/work/manoelmacedo.png",
    title: "Manoel Macedo",
    description:
      "I built the official website for Manoel Macedo Art Gallery, creating a modern platform to improve the gallery's digital visibility and organize artists, artworks, and content.",
    live: "https://manoelmacedo.com.br/",
    github: "https://manoelmacedo.vercel.app/",
  },
  {
    image: "/assets/work/bookslider.png",
    title: "BookSlider",
    description:
      "An open source front-end project I developed using React, Tailwind CSS, and Three.js. I created an interactive, responsive, and immersive 3D book to explore new web experiences and experiment with 3D graphics.",
    live: "https://booksliderproject.vercel.app/",
    github: "https://github.com/ArthurFialho/booksliderproject",
  },
  {
    image: "/assets/work/ogani.png",
    title: "Ogani",
    description:
      "Ogani was developed as a reproduction of a website, at Cotemig high school, in 2024.",
    live: "https://arthurfialho.github.io/reproducaodesiteogani/",
    github: "https://github.com/ArthurFialho/reproducaodesiteogani",
  },
  {
    image: "/assets/work/sodacan.png",
    title: "SocaCan",
    description:
      "This project is SocaCan. It was built using Next.js, Node.js, and Tailwind CSS, featuring smooth CSS animations. The main goal of this project was to enhance my learning experience.",
    live: "https://arthurfialho.github.io/sodacan/",
    github: "https://github.com/ArthurFialho/sodacan",
  },
  {
    image: "/assets/work/portfoliodev.png",
    title: "PortfolioDev",
    description:
      "This was my second hosted portfolio, built with CSS and JavaScript animations. It is fully responsive, features an interactive design based on UI/UX principles, and includes a dark mode.",
    live: "https://arthurfialho.github.io/portfoliodev/",
    github: "https://github.com/ArthurFialho/portfoliodev",
  },
  {
    image: "/assets/work/bikcraft.png",
    title: "Bikcraft",
    description:
      "This was also developed during my first Origamid course. At the end of it. Is about electric bikes.",
    live: "https://arthurfialho.github.io/bikcraft/",
    github: "https://github.com/ArthurFialho/bikcraft",
  },

];

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          backgroundColor: "#1c1c22",
        }}
      >
        <RippleGrid
          enableRainbow={false}
          gridColor="#66D2CE"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>
      <motion.section
        initial={false}
        animate={{ opacity: 1 }}
        className="flex-1 flex flex-col justify-center py-12 xl:px-0 relative z-10 mt-24"
      >
        <div className="container mx-auto px-4">
          <div className="relative h-[400px] sm:h-[500px] xl:h-[600px] min-h-[350px]">
            <InfiniteMenu items={projects} scale={1} />
          </div>
        </div>
      </motion.section>
      <div className="relative z-[100] shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default Work;
