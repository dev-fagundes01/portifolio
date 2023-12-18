/* eslint-disable prettier/prettier */
import React from "react";

import GitHub from "./../../assets/github.png";
import Linkedin from "./../../assets/linkedin.png";
import Whatsapp from "./../../assets/WhatsApp-Carousel.jpg";

const Footer = () => {
  return (
    <div className="flex flex-row gap-2 justify-start fixed bottom-2 p-2 md:p-3">
      <a
        className="bg-rose-900 flex items-center justify-center rounded-full hover:scale-125 hover:duration-1000 h-4 w-4 md:h-8 md:w-8"
        href="https://www.linkedin.com/in/diego-fagundes-da-silva-694ab71b3/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="rounded-full h-3 md:h-5"
          src={Linkedin}
          alt="img-linkedin"
        />
      </a>
      <a
        className="bg-rose-900 flex items-center justify-center rounded-full hover:scale-125 hover:duration-1000 h-4 w-4 md:h-8 md:w-8"
        href="https://github.com/dfagundes2001"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="rounded-full h-3 md:h-5"
          src={GitHub}
          alt="img-github"
        />
      </a>
      <a
        className="bg-rose-900 flex items-center justify-center rounded-full hover:scale-125 hover:duration-1000 h-4 w-4 md:h-8 md:w-8"
        href="https://wa.me/qr/EBYVIZJRG3FPF1"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="rounded-full h-3 md:h-5"
          src={Whatsapp}
          alt="img-whatsapp"
        />
      </a>
    </div>
  );
};

export default Footer;
