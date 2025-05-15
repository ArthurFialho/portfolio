"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+55) 3199786-7386",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "afialho305@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Carlos Prates - BH - Brazil",
  },
];

const Contact = () => {
  function formatTelefone(value) {
    let tel = value;

    // Adiciona "(" no início se não tiver
    if (tel.length > 0 && tel[0] !== "(") {
      tel = "(" + tel;
    }

    // Adiciona ")" no índice 3 se não tiver (ex: (12) )
    if (tel.length > 3 && tel[3] !== ")") {
      tel = tel.slice(0, 3) + ")" + tel.slice(3);
    }

    // Adiciona "-" no índice 9 se não tiver (ex: (12) 34567- )
    if (tel.length > 9 && tel[9] !== "-") {
      tel = tel.slice(0, 9) + "-" + tel.slice(9);
    }

    // Limita o tamanho máximo (por exemplo 15 caracteres)
    if (tel.length > 14) {
      tel = tel.slice(0, 14);
    }

    return tel;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_pxwgsni",
        "template_k2vxqyq",
        formData,
        "YDCgglTGYSwfizLTX" // ou "public key" no painel EmailJS
      );
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar a mensagem.");
    }
  };
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent font-extrabold">
                Let's work together!
              </h3>
              <p className="text-white/60">
                I'm always open to new opportunities, collaborations, and
                exciting projects. Whether you have an idea, need a developer,
                or just want to say hello, feel free to reach out. Let's build
                something amazing together!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={(e) =>
                    setFormData({ ...formData, firstname: e.target.value })
                  }
                />

                <Input
                  type="text"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={(e) =>
                    setFormData({ ...formData, lastname: e.target.value })
                  }
                />

                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => {
                    const formatted = formatTelefone(e.target.value);
                    setFormData({ ...formData, phone: formatted });
                  }}
                  maxLength={15} // opcional para evitar digitação além do esperado
                />

                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-accent text-xl">
                        Select a service
                      </SelectLabel>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="backend-frontend-support">
                        Back End/Front End Support
                      </SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="logo-design">Logo Design</SelectItem>
                      <SelectItem value="hire-me">
                        Hire me for a position
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                size="md"
                className="uppercase flex items-center gap-2 border max-w-40 border-accent text-primary hover:bg-accent hover:text-white hover:border-white transition-all duration-500"
              >
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
