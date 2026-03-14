"use client";

import { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { GridScan } from "@/components/bgs/GridScan";
import Footer from "@/components/Footer";

import "./pulse.css";

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 group p-6 rounded-xl hover:bg-white/5 transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex justify-between items-center">
        <div className="text-3xl xl:text-4xl font-extrabold text-outline text-transparent group-hover:text-accent transition-all">
          {service.num}
        </div>
        <Link
          target="_blank"
          href={service.href}
          className={`w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-accent group-hover:bg-accent-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45 shrink-0 ${isHovered ? "pulse" : ""
            }`}
        >
          <BsArrowDownRight className="text-primary text-xl xl:text-2xl hover:fill-white transition-all" />
        </Link>
      </div>
      <h2 className="text-2xl xl:text-3xl font-bold text-white group-hover:text-accent transition-all duration-500">
        {service.title}
      </h2>
      <p className="text-white/60 text-sm xl:text-base leading-relaxed">{service.description}</p>
      <div className="border-b border-white/20 w-full"></div>
    </div>
  );
};

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in developing dynamic, responsive websites and web applications. My expertise spans front-end technologies like JavaScript, React, NextJS, Tailwind CSS combined with strong back-end skills in API development using HTTP methods such as POST, GET, and PUT. I focus on creating user-centered solutions with clean code, intuitive design, and seamless system integration.",
    href: "https://www.origamid.com/certificate/c0bc4b1d",
  },
  {
    num: "02",
    title: "Javascript Suport",
    description:
      "With solid experience in JavaScript, I specialize in building dynamic, interactive web applications. I’m proficient in DOM manipulation, asynchronous programming with Promises and async/await, and optimizing performance. I also work with frameworks like React and Node.js, creating efficient, scalable user interfaces and integrating APIs. Always eager to tackle new challenges, I strive to apply best practices and continuously improve my skills.",
    href: "https://www.origamid.com/certificate/9f4be885",
  },
  {
    num: "03",
    title: "UI|UX Design",
    description:
      "I design intuitive user interfaces and seamless user experiences, combining creativity with usability. With a focus on user-centered design principles, I ensure every interaction is engaging and optimized for the best performance across various devices and platforms.",
    href: "https://www.origamid.com/certificate/2d1248f3",
  },
  {
    num: "04",
    title: "Logo Design",
    description:
      "I create unique and memorable logos that visually represent a brand's identity. By combining thoughtful design with creativity, I ensure each logo communicates the essence of the brand in a simple and powerful way.",
    href: "./resume",
  },
  {
    num: "05",
    title: "Database Maintenance",
    description:
      "I design and implement efficient database systems to store and manage data seamlessly. My expertise includes both relational databases like MySQL and PostgreSQL, as well as NoSQL solutions, ensuring optimal performance, scalability, and data integrity for any application.",
    href: "./resume",
  },
  {
    num: "06",
    title: "Hardware Help",
    description:
      "I hold Cisco certifications in IoT, data science, cybersecurity, and computer hardware. These courses have equipped me with skills in IoT programming, data collection, network defense, and cybersecurity management, strengthening my technical expertise for real-world challenges.",
    href: "https://www.netacad.com/pt/profile?&tab=badges",
  },
];

const Services = () => {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 1, backgroundColor: '#1c1c22' }}>
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#66D2CE"
          scanOpacity={0.4}
          scanDuration={6.0}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-16 relative z-10 mt-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 0.5 } }}
            className="mb-16 text-center xl:text-left"
          >
            <h1 className="text-4xl xl:text-5xl font-bold mb-4">My Services</h1>
            <p className="text-white/60 text-lg max-w-2xl">
              What I offer as a Software Engineer and Full Stack Developer.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-16"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </section>
      <div className="relative z-[100]">
        <Footer />
      </div>
    </>
  );
};

export default Services;
