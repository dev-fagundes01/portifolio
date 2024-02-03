/* eslint-disable react/no-unknown-property */
import { useState } from "react";

import { motion } from "framer-motion";

import Bootstrap from "../../assets/bootstrap_.svg";
import CSS from "../../assets/css.png";
import Express from "../../assets/express-original.svg";
import Git from "../../assets/git.png";
import HTML from "../../assets/html.png";
import Insomnia from "../../assets/insomnia_94603.png";
import JS from "../../assets/js.png";
import Json from "../../assets/json.png";
import LogoFigma from "../../assets/LogoFigma.png";
import Node from "../../assets/node.png";
import React from "../../assets/react.png";
import Responsividade from "../../assets/responsividade.png";
import Sass from "../../assets/sass_icon.svg";
import Styled from "../../assets/styled 1.svg";
import Tailwind from "../../assets/tailwind.png";
import TS from "../../assets/ts.png";
import Vercel from "../../assets/vercel.jpeg";
import Vite from "../../assets/vite.png";
import Vscode from "../../assets/vscode.png";
import Yarn from "../../assets/yarn.png";
import { LiTS } from "./style";

const infoSkills = [
  {
    icon: React,
    skillsName: "React.JS",
  },
  {
    icon: Node,
    skillsName: "Node.JS",
  },
  {
    icon: Styled,
    skillsName: "Styled-Component",
  },
  {
    icon: JS,
    skillsName: "JavaScript",
  },
  {
    icon: CSS,
    skillsName: "CSS",
  },
  {
    icon: HTML,
    skillsName: "HTML",
  },
  {
    icon: Json,
    skillsName: "Json",
  },
  {
    icon: Git,
    skillsName: "Git",
  },
  {
    icon: Express,
    skillsName: "Express",
  },
  {
    icon: Bootstrap,
    skillsName: "Bootstrap",
  },
  {
    icon: Sass,
    skillsName: "Sass",
  },
  {
    icon: Tailwind,
    skillsName: "Tailwind CSS",
  },
  {
    icon: LogoFigma,
    skillsName: "Figma",
  },
  {
    icon: Vscode,
    skillsName: "Vscode",
  },
  {
    icon: Yarn,
    skillsName: "Yarn",
  },
  {
    icon: Responsividade,
    skillsName: "Responsividade",
  },
  {
    icon: Vite,
    skillsName: "Vite",
  },
  {
    icon: Vercel,
    skillsName: "Vercel",
  },
  {
    icon: Insomnia,
    skillsName: "Insomnia",
  },
];

function Habilidades() {
  const [isVisible, setIsVisible] = useState();

  const skillVisibilityToggle = (info) => {
    if (isVisible === info) {
      setIsVisible(null);
    } else {
      setIsVisible(info);
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="grid items-center"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-sky-500 text-2xl md:text-5xl">Habilidades</h2>
        <ul className="flex justify-center w-3/5 gap-1 md:w-2/5 md:gap-2 flex-wrap">
          {infoSkills.map((info) => (
            <li
              className="flex flex-col items-center h-12 md:h-20 md:w-14 md:mx-1 "
              key={info.skillsName}
            >
              <img
                onClick={() => skillVisibilityToggle(info)}
                className="cursor-pointer rounded-small bg-slate-500 w-8 h-8 md:w-14 md:h-14"
                alt={info.skillsName}
                src={info.icon}
              />
              <span
                className={
                  isVisible === info
                    ? "opacity-100 text-center justify-center text-xs md:text-lg duration-1000 md:w-40"
                    : "opacity-20 text-sss duration-1000"
                }
              >
                {info.skillsName}
              </span>
            </li>
          ))}
        </ul>
        <div>
          <h3>Em Breve</h3>
          <ul className="grid place-items-center">
            <LiTS className="relative flex flex-col items-center">
              <img
                onClick={skillVisibilityToggle}
                className="w-8 h-8 md:w-14 md:h-14 rounded-small bg-slate-500"
                alt="TypeScript"
                src={TS}
              />
              <div className="w-8 md:w-14" />
            </LiTS>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
export default Habilidades;
