"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiDotnet,
  SiPhp,
  SiDocker,
  SiRabbitmq,
  SiCloudflare,
  SiGo,
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
      fieldValue: "+55 (31)99786-7386",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "arthurfialhodeveloper@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian|🇧🇷",
    },
    {
      fieldName: "Education",
      fieldValue: "Software Engineering at PUC-MG",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available 🟢",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese, English, German",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Experience isn't a list of job titles. It's the sum of every problem that forced me to learn something new, every deadline that required a decision, and every system I had to understand before I could fix it. Here's the trail.",
  items: [
    {
      company: (
        <a href="https://solarview.com.br" target="_blank">
          SolarView
        </a>
      ),
      position: "Full-stack Software Developer Junior II",
      duration: "January 2026 - Present",
    },
    {
      company: (
        <a href="https://azapfy.com.br" target="_blank">
          Azapfy
        </a>
      ),
      position: "Back-end Development Intern",
      duration: "July 2025 - December 2025",
    },
    {
      company: (
        <a href="https://codemaps.com.br" target="_blank">
          Geocode Systems
        </a>
      ),
      position: "Full-stack Development Intern",
      duration: "September 2024 - June 2025",
    },
    {
      company: (
        <a href="https://cotemig.com.br" target="_blank">
          Cotemig
        </a>
      ),
      position: "Python & Front-End Tutor for Beginners",
      duration: "June 2024 - September 2024",
    },
    {
      company: "Self-Employed",
      position: "Freelance Full Stack Developer",
      duration: "January 2024 - Present",
    }
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "After completing my technical course in computer networks and architecture and project management at COTEMIG, I am continuing my undergraduate studies in software engineering at PUC-MG. Furthermore, I have a lot of certifications in the field of software engineering and development.",
  items: [
    {
      instituition: (
        <a href="https://www.pucminas.br/destaques/Paginas/default.aspx" target="_blank">
          PUC-MG
        </a>
      ),
      degree: "Software Engineering Bachelor's Degree",
      duration: "Jan. 2026 - Present",
    },
    {
      instituition: (
        <a href="https://cotemig.com.br" target="_blank">
          Cotemig
        </a>
      ),
      degree: "Technical Course in Programming and IT",
      duration: "Feb. 2023 - December 2025",
    },
    {
      instituition: (
        <a href="https://origamid.com" target="_blank">
          Origamid
        </a>
      ),
      degree: "HTML & CSS Complete Course",
      duration: "2023",
    },
    {
      instituition: (
        <a href="https://origamid.com" target="_blank">
          Origamid
        </a>
      ),
      degree: "Javascript Complete Course",
      duration: "2024",
    },
    {
      instituition: (
        <a href="https://origamid.com" target="_blank">
          Origamid
        </a>
      ),
      degree: "UI/UX Complete Course",
      duration: "2024",
    },
    {
      instituition: (
        <a href="https://cisco.com" target="_blank">
          Cisco
        </a>
      ),
      degree: "Introduction To CyberSecurity",
      duration: "2024",
    },
    {
      instituition: (
        <a href="https://cisco.com" target="_blank">
          Cisco
        </a>
      ),
      degree: "Introdution to Data Science",
      duration: "2024",
    },
    {
      instituition: (
        <a href="https://cisco.com" target="_blank">
          Cisco
        </a>
      ),
      degree: "Introduction To Internet of Things",
      duration: "2024",
    },
    {
      instituition: (
        <a href="https://cisco.com" target="_blank">
          Cisco
        </a>
      ),
      degree: "Network Defence",
      duration: "2025",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I don't have a favorite language. I have a favorite outcome: software that works, that scales, and that someone else can maintain after I'm gone. The tools I use are the ones that get there fastest without cutting corners.",
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
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiRabbitmq />,
      name: "RabbitMQ",
    },
    {
      icon: <SiCloudflare />,
      name: "Cloudflare",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiGo />,
      name: "Golang",
    },
    {
      icon: <SiDotnet />,
      name: "C#(.NET)",
    },
    {
      icon: <SiPhp />,
      name: "php",
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
      icon: <SiPostgresql />,
      name: "PostgreSQl",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    }
  ],
};

/** Experience + problems solved per skill (carousel slides). Keys must match skillList `name`. */
const SKILL_DETAILS = {
  "HTML 5": {
    experience:
      "I structure pages with semantic HTML—landmarks, headings, and forms that behave correctly for assistive tech. At Geocode and in freelance work I shipped dashboards and marketing pages where clean markup made CSS and JS integration predictable.",
    problems: [
      "Refactored legacy templates to semantic sections and labels, fixing inconsistent tab order and improving Lighthouse accessibility scores.",
      "Normalized form markup across a multi-page flow so validation and error announcements worked the same in every step.",
    ],
  },
  "CSS 3": {
    experience:
      "I build responsive layouts with Flexbox/Grid, animations where they help UX, and maintainable class strategies (including Tailwind on newer stacks). I care about how interfaces feel on real devices, not only on a desktop mockup.",
    problems: [
      "Eliminated layout shift and overflow bugs on mobile by auditing breakpoints and replacing fixed heights with fluid patterns.",
      "Implemented complex responsive grids for data-heavy views without breaking alignment between cards and tables.",
    ],
  },
  javascript: {
    experience:
      "JavaScript is my day-to-day language for browser and Node: async flows, modules, and debugging production issues. I lean on clear patterns so code stays readable when requirements change.",
    problems: [
      "Tracked down race conditions in async data loading and consolidated state handling so UI updates matched server responses.",
      "Reduced bundle size and improved load time by splitting features and lazy-loading non-critical scripts.",
    ],
  },
  typescript: {
    experience:
      "I use TypeScript wherever a codebase grows beyond a few files—shared types between API and UI, safer refactors, and fewer surprises in CI. I balance strictness with pragmatism so delivery does not stall.",
    problems: [
      "Introduced shared DTO types across services and front-end, catching contract mismatches before deploy.",
      "Gradually typed a JS codebase module by module, prioritizing boundaries and public APIs first.",
    ],
  },
  "react.js": {
    experience:
      "I compose UIs with React—hooks, context where appropriate, and attention to re-renders and data flow. I have shipped internal tools and customer-facing features in React-heavy codebases.",
    problems: [
      "Split oversized components into focused pieces and memoized hot paths to fix interaction lag on large lists.",
      "Aligned server and client state for forms and wizards so users never saw stale data after mutations.",
    ],
  },
  Docker: {
    experience:
      "I containerize services for repeatable builds and smoother handoffs between dev and deploy. Dockerfiles and compose files are part of how I document how an app actually runs.",
    problems: [
      "Standardized local environments so new contributors could run the full stack with one command.",
      "Debugged image size and layer caching issues to speed up CI pipelines without changing application logic.",
    ],
  },
  RabbitMQ: {
    experience:
      "I have worked with message queues for decoupling producers and consumers, retries, and back-pressure aware workers. Understanding delivery guarantees mattered when failures had to be visible and recoverable.",
    problems: [
      "Tuned consumer concurrency and dead-letter handling so spikes did not silently drop work.",
      "Documented queue topology and failure modes so on-call could trace a message end-to-end.",
    ],
  },
  Cloudflare: {
    experience:
      "I use Cloudflare for DNS, TLS, caching, and edge protections. It is often the first line of defense and the lever for faster global delivery without rewriting the origin app.",
    problems: [
      "Configured cache rules and purging so deployments did not serve stale assets to users.",
      "Reduced origin load during traffic spikes by leaning on CDN caching for static and semi-static content.",
    ],
  },
  AWS: {
    experience:
      "I work with core AWS building blocks—storage, compute, IAM, and networking—always with least privilege and cost awareness. I prefer infrastructure that teammates can reason about months later.",
    problems: [
      "Tightened IAM policies and rotated credentials as part of hardening a service exposed to the internet.",
      "Chose storage and lifecycle rules so log and media costs stayed predictable as usage grew.",
    ],
  },
  Golang: {
    experience:
      "I use Go for efficient services and CLIs—simple deployment, strong concurrency primitives, and static binaries. It fits well for APIs and workers that must stay stable under load.",
    problems: [
      "Implemented concurrent workers with clear shutdown semantics to avoid goroutine leaks during deploys.",
      "Profiled hot paths and reduced allocations in a handler that was CPU-bound at peak traffic.",
    ],
  },
  "C#(.NET)": {
    experience:
      "I have built and maintained .NET APIs and integrations—dependency injection, configuration, and structured logging. Enterprise expectations around errors and observability shaped how I designed endpoints.",
    problems: [
      "Stabilized flaky integration tests by isolating external dependencies and fixing async test deadlocks.",
      "Improved error responses and correlation IDs so support could trace issues from client to server logs.",
    ],
  },
  php: {
    experience:
      "PHP still powers a lot of the web; I have maintained and extended PHP codebases, focused on security (SQL injection, XSS), and clear layering when business rules grew.",
    problems: [
      "Wrapped legacy queries with prepared statements and input validation to close known vulnerability classes.",
      "Extracted duplicated view logic into reusable partials to speed up feature work and reduce bugs.",
    ],
  },
  "next.js": {
    experience:
      "Next.js is my go-to for React apps with routing, SSR/SSG choices, and API routes when appropriate. I care about Core Web Vitals and how framework choices affect SEO and perceived speed.",
    problems: [
      "Chose rendering strategies per route so marketing pages stayed static while dashboards stayed dynamic.",
      "Fixed hydration mismatches caused by client-only data and timezone formatting.",
    ],
  },
  "tailwind.css": {
    experience:
      "Tailwind keeps styling consistent and fast to iterate—design tokens via config, responsive utilities, and fewer one-off CSS files. I pair it with component discipline so class lists do not become unreadable.",
    problems: [
      "Established shared spacing and typography scales so new screens matched the rest of the product.",
      "Refactored repeated utility chains into small components without losing Tailwind’s flexibility.",
    ],
  },
  "node.js": {
    experience:
      "Node backs many of my APIs and scripts—Express-style stacks, middleware, validation, and integration with databases and queues. I watch for memory usage, event-loop health, and proper error propagation.",
    problems: [
      "Added structured logging and request IDs across services to debug intermittent 500s in production.",
      "Fixed memory growth by closing connections and clearing timers in long-lived worker processes.",
    ],
  },
  PostgreSQl: {
    experience:
      "PostgreSQL is my default relational database—schema design, indexes, transactions, and migrations. I write queries with explain plans in mind and avoid N+1 access patterns at the source.",
    problems: [
      "Added missing indexes and rewrote queries that scanned large tables on every request.",
      "Designed migrations with zero-downtime steps for high-traffic tables (add column, backfill, switch reads).",
    ],
  },
  MySQL: {
    experience:
      "I have worked with MySQL for LAMP-style stacks and hosted services—replication basics, charset issues, and pragmatic indexing. When the data model fights the queries, I fix the model or the access pattern.",
    problems: [
      "Resolved deadlock-prone update ordering by batching writes and aligning transaction boundaries.",
      "Migrated a fragile hand-written SQL area to parameterized queries and clearer repository methods.",
    ],
  },
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
import GridMotion from "@/components/bgs/GridMotion";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import { FiBriefcase, FiTarget } from "react-icons/fi";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

function buildSkillCarouselItems(skillName, detail) {
  const fallback = {
    id: `${skillName}-fallback`,
    title: skillName,
    description:
      "I use this skill in production and freelance work. More specific write-ups are coming soon—feel free to ask in a message.",
    icon: <FiBriefcase className="h-[16px] w-[16px] text-white" />,
  };
  if (!detail) return [fallback];
  return [
    {
      id: `${skillName}-exp`,
      title: "Experience",
      description: detail.experience,
      icon: <FiBriefcase className="h-[16px] w-[16px] text-white" />,
    },
    {
      id: `${skillName}-prob`,
      title: "Problems I solved",
      description: detail.problems.map((p) => `• ${p}`).join("\n\n"),
      icon: <FiTarget className="h-[16px] w-[16px] text-white" />,
    },
  ];
}

const Resume = () => {
  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [activeSkillName, setActiveSkillName] = useState(null);
  const [carouselBase, setCarouselBase] = useState(300);

  const activeDetail = activeSkillName ? SKILL_DETAILS[activeSkillName] : null;
  const carouselItems = useMemo(() => {
    if (!activeSkillName) return [];
    return buildSkillCarouselItems(activeSkillName, activeDetail);
  }, [activeSkillName, activeDetail]);

  useEffect(() => {
    const update = () => {
      setCarouselBase(Math.min(300, Math.max(260, window.innerWidth - 48)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 1, opacity: 0.3, backgroundColor: '#1c1c22' }}>
        <GridMotion
          items={[
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop",
          ]}
          gradientColor="#66D2CE"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.5, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 relative z-10 mt-24"
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
                              <p className="text-white/60 hover:text-accent transition-all">{item.company}</p>
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
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
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
                              <p className="text-white/60 hover:text-accent transition-all">
                                {item.instituition}
                              </p>
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
                                <TooltipTrigger asChild>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setActiveSkillName(skill.name);
                                      setSkillModalOpen(true);
                                    }}
                                    className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group cursor-pointer border border-transparent outline-none transition-colors hover:border-accent/30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                                  >
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">
                                    {skill.name} — click for details
                                  </p>
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

      <Dialog.Root
        open={skillModalOpen}
        onOpenChange={(open) => {
          setSkillModalOpen(open);
          if (!open) setActiveSkillName(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[200] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:duration-500 data-[state=closed]:duration-400" />
          <Dialog.Content
            className={cn(
              "fixed left-1/2 top-1/2 z-[201] max-h-[min(92vh,880px)] w-[min(100vw-1.5rem,440px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto",
              "rounded-xl border border-[#232329] bg-primary p-5 shadow-xl outline-none",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=open]:duration-500 data-[state=closed]:duration-400 ease-out"
            )}
          >
            <Dialog.Title className="sr-only">
              {activeSkillName ? `Skill: ${activeSkillName}` : "Skill details"}
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              Experience and problems solved with this technology.
            </Dialog.Description>
            <Dialog.Close
              type="button"
              className="absolute right-4 top-4 z-10 rounded-md p-1 outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close"
            >
              <IoMdClose className="text-3xl text-accent" />
            </Dialog.Close>
            {activeSkillName && carouselItems.length > 0 && (
              <div className="flex flex-col">
                <div className="border-b border-[#232329] pb-6 text-center">
                  <h3 className="pr-8 text-4xl font-bold capitalize text-white">
                    {activeSkillName}
                  </h3>
                  <p className="mt-2 text-sm text-accent">
                    Experience & problems
                  </p>
                </div>
                <div
                  className="mt-6 flex w-full items-center justify-center"
                  style={{
                    height: "min(520px, calc(100vh - 11rem))",
                    position: "relative",
                  }}
                >
                  <Carousel
                    key={activeSkillName}
                    items={carouselItems}
                    baseWidth={carouselBase}
                    autoplay={false}
                    autoplayDelay={3000}
                    pauseOnHover={false}
                    loop={false}
                    round={false}
                  />
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="relative z-[100]">
        <Footer />
      </div>
    </>
  );
};

export default Resume;
