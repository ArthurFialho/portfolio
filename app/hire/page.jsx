"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import ShapeGrid from "@/components/bgs/ShapeGrid";
import Stepper, { Step } from "@/components/Stepper";
import CardSwap, { Card } from "@/components/CardSwap";
import { Button } from "@/components/ui/button";
import { FaQuoteLeft, FaChevronDown } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import PixelTrail from "@/components/PixelTrail";
import BorderGlow from "@/components/BorderGlow";

const faqs = [
  {
    question: "Do you work remotely?",
    answer:
      "Yes, 100%. I work remotely with clients worldwide. All communication is done via email, WhatsApp, Slack, or video calls — whatever fits your workflow best.",
  },
  {
    question: "What is the average project timeline?",
    answer:
      "It depends on scope. A landing page takes 1–2 weeks. A full web app typically takes 4–10 weeks. I always define a clear timeline in the proposal before we start.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. If your project involves sensitive information, I'm happy to sign an NDA before any technical discussions begin.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "My main stack is React, Next.js, TypeScript, Node.js, and PostgreSQL/MySQL. I also work with REST APIs, Docker, and cloud services like AWS and Vercel.",
  },
  {
    question: "Do you offer post-delivery support?",
    answer:
      "Yes. I offer a 30-day free bug-fix window after delivery. Beyond that, we can set up a monthly maintenance plan depending on your needs.",
  },
  {
    question: "How do payments work?",
    answer:
      "Typically 50% upfront and 50% on delivery. For longer projects, we split into milestones. I accept bank transfer, PayPal, and crypto.",
  },
];

const testimonials = [
  {
    quote:
      "Arthur delivered the project ahead of schedule with zero bugs in production. Genuinely one of the best freelancers I've worked with — clear communication throughout.",
    name: "Lucas Scholomer",
    role: "CTO",
    company: "Fintech Startup",
  },
  {
    quote:
      "Profissional, responsivo e com atenção real ao detalhe. Nosso app ficou muito além do esperado. A experiência de trabalhar com ele foi ótima do começo ao fim.",
    name: "Vânia Macedo",
    role: "Product Manager",
    company: "Manoel Macedo",
  },
  {
    quote:
      "Hired Arthur for backend support on a critical deadline. He jumped in, understood the codebase fast, and delivered clean, well-documented code.",
    name: "Mitch Sullivan",
    role: "Lead Developer",
    company: "Financial Company",
  },
];

const companies = [
  { name: "SolarView", initials: "SV" },
  { name: "Cotemig", initials: "COT" },
  { name: "Geocode", initials: "GEO" },
  { name: "Azapfy", initials: "AZ" },
];

const stepContent = [
  {
    title: "Brief",
    description:
      "We start with a discovery call or a detailed questionnaire. I listen carefully to understand your goals, audience, technical requirements, and timeline.",
    points: [
      "Understand your vision and goals",
      "Identify technical requirements",
      "Discuss timeline and budget",
      "No commitment required",
    ],
  },
  {
    title: "Proposal",
    description:
      "I'll put together a detailed proposal with scope, milestones, pricing, and estimated delivery date. Everything is transparent before we start — no surprises.",
    points: [
      "Detailed scope of work",
      "Clear milestones and deadlines",
      "Transparent pricing breakdown",
      "Revisions before signing",
    ],
  },
  {
    title: "Development",
    description:
      "I work in sprints and keep you updated every step of the way. You'll have access to a staging environment so you can track real progress and provide feedback.",
    points: [
      "Weekly progress updates",
      "Staging environment access",
      "Continuous feedback loop",
      "Agile and iterative approach",
    ],
  },
  {
    title: "Delivery",
    description:
      "After thorough testing, I deploy your project and hand it over with full documentation. 30-day post-launch support included — you're not left alone after delivery.",
    points: [
      "Full QA and testing",
      "Deployment to production",
      "Documentation handoff",
      "30-day free support",
    ],
  },
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ delay: 0.06 * index, duration: 0.4 }}
      className="border border-white/10 rounded-xl overflow-hidden bg-[#27272c]/40 backdrop-blur-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <FaChevronDown className="text-accent" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HirePage = () => {
  const cardSwapRef = useRef(null);
  const [cardSwapWidth, setCardSwapWidth] = useState(420);

  useEffect(() => {
    const el = cardSwapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setCardSwapWidth(Math.min(420, entry.contentRect.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* Background */}
      <div
        className="pointer-events-none"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          backgroundColor: "#1c1c22",
        }}
      >
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#2F293A"
          hoverFillColor="#222"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <div className="relative z-10 mt-28 [overflow-x:clip]">

        {/* Hero */}
        <section className="py-12 xl:py-16">
          <div className="container mx-auto text-center mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
              className="space-y-6"
            >
              <span className="inline-block text-accent text-sm uppercase tracking-widest">
                Current available for work &nbsp;
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
                Let&apos;s Build Something{" "}
                <br className="hidden sm:block" />
                <span className="text-accent">Together</span>
              </h1>
              <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
                From idea to deployment — full stack, clear communication, delivered on time.
                Here&apos;s everything you need to know before reaching out.
              </p>
              <div className="pt-2">
                <Link href="/contact">
                  <Button className="border border-accent text-primary hover:bg-accent hover:text-white hover:border-white transition-all duration-500 uppercase px-8 py-6 text-base">
                    Start a conversation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Clients Say */}
        <section className="py-12 xl:py-22 [overflow-x:clip]">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-20 items-start xl:items-center">

              {/* Left: title + logos */}
              <div className="w-full xl:flex-1 xl:max-w-md space-y-8 text-center xl:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3"
                >
                  <h2 className="text-3xl xl:text-4xl font-bold">What Clients Say</h2>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                    Real words from people who worked with me, <br />not just about the result,
                    but about the experience of working together.
                  </p>
                </motion.div>

                <div className="space-y-3">
                  <p className="text-white/40 text-xs uppercase tracking-widest">
                    Organizations I&apos;ve worked in/with
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {companies.map((company, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                        className="flex items-center gap-3 bg-[#27272c]/60 border border-white/10 rounded-xl p-3 hover:border-accent/40 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-bold text-xs shrink-0">
                          {company.initials}
                        </div>
                        <span className="text-white/70 text-sm">{company.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: CardSwap */}
              <motion.div
                ref={cardSwapRef}
                className="w-full xl:flex-1 relative h-[300px] sm:h-[380px] xl:h-[460px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{ duration: 0.5 }}
              >
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={4000}
                  pauseOnHover={true}
                  width={cardSwapWidth}
                  height={260}
                  easing="elastic"
                >
                  {testimonials.map((t, i) => (
                    <Card
                      key={i}
                      className="p-6 flex flex-col justify-between"
                      style={{ backgroundColor: "#27272c", borderColor: "#3f3f46" }}
                    >
                      <div>
                        <FaQuoteLeft className="text-accent text-xl mb-3 opacity-50" />
                        <p className="text-white/85 text-sm leading-relaxed">{t.quote}</p>
                      </div>
                      <div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
                        <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold text-sm shrink-0">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold">{t.name}</p>
                          <p className="text-white/50 text-xs">{t.role} · {t.company}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Work Process */}
        <section className="py-20 xl:py-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl xl:text-4xl font-bold mb-3">Work Process</h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
                A clear and transparent process so you always know what to expect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="w-full max-w-lg mx-auto bg-[#27272c]/70 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <Stepper
                className="flex flex-col items-center justify-center p-2 w-full"
                initialStep={1}
                backButtonText="Previous"
                nextButtonText="Next"
                nextButtonProps={{
                  className:
                    "duration-350 flex items-center justify-center rounded-full bg-accent py-1.5 px-3.5 font-medium tracking-tight text-primary transition hover:opacity-80 active:opacity-60",
                }}
                backButtonProps={{
                  className:
                    "duration-350 rounded px-2 py-1 transition text-white/50 hover:text-white",
                }}
              >
                {stepContent.map((step, i) => (
                  <Step key={i}>
                    <div className="py-2 space-y-2">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-accent">{step.title}</h3>
                      </div>
                      <p className="text-white/80 leading-relaxed text-sm">{step.description}</p>
                      <ul className="space-y-2 mt-3">
                        {step.points.map((point, j) => (
                          <li key={j} className="flex items-center gap-2 text-white/70 text-sm">
                            <BsCheckCircleFill className="text-accent shrink-0 text-xs" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Step>
                ))}
              </Stepper>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 xl:py-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl xl:text-4xl font-bold mb-3">FAQ</h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
                Common questions before starting a project. No surprises.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 xl:py-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.5 }}
            >
            <BorderGlow
              edgeSensitivity={20}
              glowColor="178 54 62"
              backgroundColor="#27272c"
              borderRadius={28}
              glowRadius={50}
              glowIntensity={1.2}
              coneSpread={30}
              animated={false}
              colors={['#66D2CE', '#2DAA9E', '#026070', '#8cbeb3']}
              className="max-w-3xl mx-auto"
            >
            <div
              className="text-center p-8 sm:p-12 xl:p-16 space-y-5"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div style={{ height: "500px", position: "absolute", inset: 0 }}>
                <PixelTrail
                  gridSize={50}
                  trailSize={0.1}
                  maxAge={250}
                  interpolate={5}
                  color="#66D2CE"
                  gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
                  gooeyEnabled
                  gooStrength={2}
                />
              </div>
              <div style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}>
                <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold">Ready to start?</h2>
                <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto mt-5">
                  Send me a message and we&apos;ll set up a quick call.<br />
                  No commitment just a
                  conversation about what you need and how i can solve your problem.
                </p>
                <div style={{ pointerEvents: "auto" }}>
                  <Link href="/contact">
                    <Button className="border mt-5 border-accent text-primary hover:bg-accent hover:text-white hover:border-white transition-all duration-500 uppercase px-8 py-6 text-base">
                      Get in touch →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            </BorderGlow>
            </motion.div>
          </div>
        </section>

      </div>

      <div className="relative z-[100]">
        <Footer />
      </div>
    </>
  );
};

export default HirePage;
