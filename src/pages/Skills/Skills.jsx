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
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseEnter = (info) => {
    setHoveredSkill(info)
  }

  const handleMouseLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="h-screen grid items-center"
      id="habilidades"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-sky-500 text-2xl md:text-5xl">Habilidades</h2>
        <ul className="flex justify-center w-3/5 gap-1 flex-wrap opacity-0 animate-toAppear md:w-2/5 md:mt-4">
          {infoSkills.map((info) => (
            <li
              className="flex flex-col items-center h-12 md:h-20 md:w-14 md:mx-1 "
              key={info.skillsName}
              onMouseEnter={() => handleMouseEnter(info)}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className={`
                  ${hoveredSkill === info
                  ? "opacity-100 text-center justify-center text-xs duration-1000 md:text-lg md:w-40"
                  : "opacity-20 text-sss duration-1000"
                }
                  `                  
                }
              >
                {info.skillsName}
              </span>
              <img
                className="cursor-pointer rounded-small bg-slate-500 w-8 h-8 md:w-14 md:h-14"
                alt={info.skillsName}
                src={info.icon}
              />
            </li>
          ))}
        </ul>
        <div className="opacity-0 animate-toAppearPlus">
          <h3>Em Breve</h3>
          <ul className="grid place-items-center">
            <LiTS className="relative flex flex-col items-center">
              <img
                className="w-8 h-8 rounded-small bg-slate-500 md:w-14 md:h-14"
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
