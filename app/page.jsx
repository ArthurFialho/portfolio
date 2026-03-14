"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Ballpit from "@/components/bgs/Ballpit";

const Home = () => {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 1, backgroundColor: '#1c1c22' }}>
        <Ballpit
          count={135}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          colors={[0x66D2CE, 0x2DAA9E, 0x1c1c22]}
        />
      </div>
      <section className="h-full relative z-10 mt-24">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xlpt-8 xl:pb-24">
            {/* {text} */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Full Stack Software Developer & Designer</span>
              <h1 className="h1 mb-6">
                Hello! I'm <br />
                <span className="title-name">Arthur Fialho</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am a professional in UI/UX design and minimalist projects.
                Back-end and front-end developer who writes clean and elegant
                code, crafting amazing digital experiences.
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
    </>
  );
};

export default Home;
