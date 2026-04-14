"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import BallpitToggle from "@/components/BallpitToggle";
import Threads from "@/components/bgs/Threads";
import SplashCursor from "@/components/SplashCursor";

const Ballpit = dynamic(() => import("@/components/bgs/Ballpit"), { ssr: false });

const ACCENT_THREADS_RGB = [102 / 255, 210 / 255, 206 / 255];

const Home = () => {
  const [ballpitEnabled, setBallpitEnabled] = useState(false);

  return (
    <>
      {!ballpitEnabled && (
        <SplashCursor
          RAINBOW_MODE={false}
          COLOR="#66D2CE"
          DYE_RESOLUTION={512}
          SIM_RESOLUTION={64}
          SHADING={false}
          PRESSURE_ITERATIONS={10}
          DENSITY_DISSIPATION={4}
          VELOCITY_DISSIPATION={3}
        />
      )}
      <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: 1, backgroundColor: "#1c1c22" }}>
        <AnimatePresence mode="wait">
          {ballpitEnabled ? (
            <motion.div
              key="ballpit"
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
            >
              <Ballpit
                count={135}
                gravity={0.01}
                friction={0.9975}
                wallBounce={0.95}
                followCursor={false}
                colors={[0x66d2ce, 0x2daa9e, 0x1c1c22]}
              />
            </motion.div>
          ) : (
            <motion.div
              key="threads"
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
            >
              <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction
                color={ACCENT_THREADS_RGB}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <BallpitToggle enabled={ballpitEnabled} onToggle={() => setBallpitEnabled((prev) => !prev)} />
      <section className="h-full relative z-10 mt-28 sm:mt-32 xl:mt-28 pt-8 sm:pt-12 xl:pt-16">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* {text} */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Engineer & <span className="text-accent">Full Stack Developer</span></span>
              <h1 className="h1 mb-6">
                Hello! I'm <br />
                <span className="title-name">Arthur Fialho</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Software Engineer with a full stack mindset and a problem-first approach.
                I don't get attached to languages, i get attached to results.
                Currently building things that work, from both ends of the stack.
              </p>
              {/* {btn and socials} */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a
                  href="/assets/Currículo _ Arthur Fialho - Dev. Full Stack (2).pdf"
                  download="Curriculo_Arthur_Fialho_Dev_Full_Stack.pdf"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white hover:border-white transition-all duration-500"
                    aria-label="Download my CV"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>

                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:border-white transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* {photo} */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
      <div className="relative z-[100] mt-28 xl:mt-28">
        <Footer />
      </div>
    </>
  );
};

export default Home;
