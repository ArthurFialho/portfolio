import Link from "next/link";

import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ArthurFialho" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/arthurfialhodev/",
  },
  { icon: <FaWhatsapp />, path: "https://wa.me/5531997867386" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/arthurfialho_/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
