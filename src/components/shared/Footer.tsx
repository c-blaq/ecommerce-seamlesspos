import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface ISocials {
  name: string;
  icon: React.JSX.Element;
  href: string;
}

const Footer = () => {
  const SOCIALS: ISocials[] = [
    {
      name: "Twitter(X)",
      icon: <FaXTwitter />,
      href: "https://twitter.com/_Babayeju",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/c-blaq/shop-ease",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/fathi-babayeju",
    },
  ];

  return (
    <footer className="p-5 border-t border-black/50 text-xs sm:text-sm">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-4 justify-between items-center">
        <h3 className="whitespace-nowrap">
          &copy;2024 Fathi. All rights reserved
        </h3>

        <div className="flex gap-5 items-center">
          {SOCIALS.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="hover:text-gray-500 transition duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
