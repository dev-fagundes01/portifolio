import { useState } from "react";

import Bootstrap from "../../imgs/skills/bootstrap_.svg";
import CSS from "../../imgs/skills/css.png";
import Express from "../../imgs/skills/express-original.svg";
import Git from "../../imgs/skills/git.png";
import HTML from "../../imgs/skills/html.png";
import JS from "../../imgs/skills/js.png";
import Json from "../../imgs/skills/json.png";
import LogoFigma from "../../imgs/skills/LogoFigma.png";
import Node from "../../imgs/skills/node.png";
import React from "../../imgs/skills/react.png";
import Responsividade from "../../imgs/skills/responsividade.png";
import Sass from "../../imgs/skills/sass_icon.svg";
import Styled from "../../imgs/skills/styled 1.svg";
import Tailwind from "../../imgs/skills/tailwind.png";
import TS from "../../imgs/skills/ts.png";
import Prisma from "../../imgs/skills/prisma.png";
import Mongo from "../../imgs/skills/mongodb_icon.png";
import SQL from "../../imgs/skills/sql-server.png";
import Vite from "../../imgs/skills/vite.png";
import Vscode from "../../imgs/skills/vscode.png";
import Yarn from "../../imgs/skills/yarn.png";
import { LiTS } from "./style";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";

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
    icon: TS,
    skillsName: "TypeScript",
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
    icon: Mongo,
    skillsName: "MongoDB",
  },
  {
    icon: Prisma,
    skillsName: "Prisma",
  },
];

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseEnter = (info) => {
    setHoveredSkill(info)
  }

  const handleMouseLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <section
      className="h-screen grid items-center"
      id="habilidades">
      <AnimatedSection>
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
                  alt="SQL"
                  src={SQL}
                />
                <div className="w-8 md:w-14" />
              </LiTS>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
export default Skills;
