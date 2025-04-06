"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiPython,
  SiTypescript,
} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Arthur Fialho",
    },
    {
      fieldName: "Phone",
      fieldValue: "+55 (31) 99786-7386",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "afialho305@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian|🇧🇷",
    },
    {
      fieldName: "Education",
      fieldValue: "Technical Course at COTEMIG",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available 🟢",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese, English, French",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I work as an intern at Geocode, developing software solutions focused on mapping and communication. I have experience in programming, UI/UX design, and databases, and I'm passionate about logo design.",
  items: [
    {
      company: "Geocode Systems",
      position: "Full-stack Development Intern",
      duration: "September 2024 - Present",
    },
    {
      company: "Cotemig",
      position: "Python & Front-End Tutor for Beginners",
      duration: "June 2024 - September 2024",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "January 2023 - March 2024",
    },
    {
      company: "Tech Academy Brazil",
      position: "Freelance Web Developer",
      duration: "September 2023 - Nov. 2023",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I'm currently in my third year of technical studies at COTEMIG, where I participate as both a student and a mentor in CodeClub. I’ve also completed HTML & CSS (2023) and JavaScript (2024) courses at Origamid, enhancing my web development skills.",
  items: [
    {
      instituition: "Origamid",
      degree: "HTML & CSS Complete Course",
      duration: "2023",
    },
    {
      instituition: "Origamid",
      degree: "Javascript Complete Course",
      duration: "2024",
    },
    {
      instituition: "Cotemig",
      degree: "Technical Course in Programming and IT",
      duration: "February 2023 - December 2025",
    },
    {
      instituition: "Cotemig",
      degree: "CodeClub - Studant",
      duration: "2024",
    },
    {
      instituition: "The Odin Project",
      degree: "Complete React Course",
      duration: "December 2024 - Present",
    },
    {
      instituition: "Cisco",
      degree: "Introduction To CyberSecurity",
      duration: "2024",
    },
    {
      instituition: "Cisco",
      degree: "Data Science",
      duration: "2024",
    },
    {
      instituition: "Cisco",
      degree: "Introduction To IoT",
      duration: "2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have strong skills in front-end and back-end development, with a focus on modern technologies like React, Next.js, and Node.js.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNodedotjs />,
      name: "node.js",
    },
    {
      icon: <SiFigma />,
      name: "Figma",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQl",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <div className="flex flex-col">
            <div className="text-center xl:text-left mb-8 xl:mb-12">
              <h1 className="text-5xl font-bold">Why hire me?</h1>
              <p className="text-white/60 text-xl mt-6 max-w-[600px] mx-auto xl:mx-0">
                Here you can explore my work{" "}
                <span className="text-accent">experience</span>,{" "}
                <span className="text-accent">education</span>,{" "}
                <span className="text-accent">skills</span> and more.
              </p>
            </div>
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
          </div>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <a href="https://www.cotemig.com.br" target="blank">
                              <p className="text-white/60 hover:text-accent transition-all">
                                {item.instituition}
                              </p>
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
