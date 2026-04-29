"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import DotGrid from "@/components/bgs/DotGrid";
import Footer from "@/components/Footer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGlobe, FaGraduationCap } from "react-icons/fa";
import RotatingText from "@/components/RotatingText";

const info = [
  { icon: <FaPhoneAlt />,      title: "Phone",   description: "(+55) 3199786-7386" },
  { icon: <FaEnvelope />,      title: "Email",   description: "arthurfialhodeveloper@gmail.com", breakAll: true },
  { icon: <FaMapMarkerAlt />,  title: "Address", description: "Carlos Prates - BH - Brazil" },
];

const extraInfo = [
  { icon: <FaBriefcase />,     title: "Freelance",  description: "Available 🟢" },
  { icon: <FaGlobe />,         title: "Languages",  description: "Portuguese, English, German" },
  { icon: <FaGraduationCap />, title: "Education",  description: "Software Engineering at PUC-MG" },
];

const fadeIn = (delay) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.4, ease: "easeOut" },
});

const Contact = () => {
  function formatTelefone(value) {
    let tel = value;
    if (tel.length > 0 && tel[0] !== "(") tel = "(" + tel;
    if (tel.length > 3 && tel[3] !== ")") tel = tel.slice(0, 3) + ")" + tel.slice(3);
    if (tel.length > 9 && tel[9] !== "-") tel = tel.slice(0, 9) + "-" + tel.slice(9);
    if (tel.length > 14) tel = tel.slice(0, 14);
    return tel;
  }

  const [formData, setFormData] = useState({
    firstname: "", lastname: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send("service_pxwgsni", "template_k2vxqyq", formData, "YDCgglTGYSwfizLTX");
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar a mensagem.");
    }
  };

  return (
    <>
      <div
        className="pointer-events-none"
        style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: 1, backgroundColor: "#1c1c22" }}
      >
        <DotGrid
          dotSize={5} gap={15} baseColor="#271E37" activeColor="#66D2CE"
          proximity={120} interactive className="!p-0 min-h-0"
        />
      </div>

      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-16 relative z-10 mt-24">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-end gap-8">

            {/* Form */}
            <motion.div {...fadeIn(0.2)} className="w-full xl:flex-1 order-1 xl:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-6 sm:p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-2xl sm:text-4xl text-accent font-extrabold">
                  Let's work together!
                </h3>
                <p className="text-white/60 text-sm sm:text-base">
                  I'm always open to new opportunities, collaborations, and exciting projects.
                  Whether you have an idea, need a developer, or just want to say hello,
                  feel free to reach out. Let's build something amazing together!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="Firstname" value={formData.firstname}
                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
                  <Input type="text" placeholder="Lastname" value={formData.lastname}
                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
                  <Input type="email" placeholder="Email address" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  <Input type="tel" placeholder="Phone number" value={formData.phone} maxLength={15}
                    onChange={(e) => setFormData({ ...formData, phone: formatTelefone(e.target.value) })} />
                  <div className="self-start w-full">
                    <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel className="text-accent text-xl">Select a service</SelectLabel>
                          <SelectItem value="web-dev">Web Development</SelectItem>
                          <SelectItem value="backend-frontend-support">Back End/Front End Support</SelectItem>
                          <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                          <SelectItem value="logo-design">Logo Design</SelectItem>
                          <SelectItem value="hire-me">Hire me for a position</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea className="h-[200px]" placeholder="Type your message here."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button size="md" className="uppercase flex items-center gap-2 border max-w-40 border-accent text-primary hover:bg-accent hover:text-white hover:border-white transition-all duration-500">
                  Send message
                </Button>
              </form>
            </motion.div>

            {/* Info panel */}
            <div className="w-full xl:flex-1 flex flex-col items-center xl:items-end order-2 xl:order-none gap-4">

              {/* Rotating text — hidden on mobile */}
              <motion.div
                {...fadeIn(0.35)}
                className="hidden sm:flex flex-wrap items-center justify-center xl:justify-end gap-2 text-white font-semibold w-full"
              >
                <span className="text-lg xl:text-xl">What's up! I'm Arthur, a creative</span>
                <RotatingText
                  texts={["Fullstack", "Software", "Engineer"]}
                  mainClassName="px-2 md:px-3 bg-accent text-primary overflow-hidden py-1 flex items-center justify-center rounded-lg leading-none text-lg xl:text-xl"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden flex items-center"
                  elementLevelClassName="leading-none"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </motion.div>

              {/* Contact info */}
              <motion.ul
                {...fadeIn(0.5)}
                className="flex flex-col gap-5 bg-[#27272c]/80 backdrop-blur-sm p-6 xl:p-10 rounded-xl w-full"
              >
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-[46px] h-[46px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center shrink-0">
                      <div className="text-xl xl:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/60 text-sm">{item.title}</p>
                      <h3 className={`text-sm sm:text-base xl:text-xl ${item.breakAll ? "break-all" : ""}`}>
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}
              </motion.ul>

              {/* Extra info */}
              <motion.ul
                {...fadeIn(0.65)}
                className="flex flex-col gap-3 bg-[#27272c]/80 backdrop-blur-sm p-6 rounded-xl w-full"
              >
                {extraInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-[40px] h-[40px] xl:w-[56px] xl:h-[56px] bg-[#27272c] text-accent rounded-md flex items-center justify-center shrink-0">
                      <div className="text-lg xl:text-xl">{item.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/60 text-xs xl:text-sm">{item.title}</p>
                      <h3 className="text-sm xl:text-base">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </motion.ul>

            </div>
          </div>
        </div>
      </section>

      <div className="relative z-[100]">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
