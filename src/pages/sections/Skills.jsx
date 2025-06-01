import { useState } from 'react'

import AnimatedSection from '../../components/AnimatedSection'
import Bootstrap from '../../imgs/skills/bootstrap_.svg'
import CSS from '../../imgs/skills/css.png'
import Express from '../../imgs/skills/express-original.svg'
import Git from '../../imgs/skills/git.png'
import HTML from '../../imgs/skills/html.png'
import JS from '../../imgs/skills/js.png'
import Json from '../../imgs/skills/json.png'
import LogoFigma from '../../imgs/skills/LogoFigma.png'
import Mongo from '../../imgs/skills/mongodb_icon.png'
import Node from '../../imgs/skills/node.png'
import Prisma from '../../imgs/skills/prisma.png'
import React from '../../imgs/skills/react.png'
import Responsividade from '../../imgs/skills/responsividade.png'
import Sass from '../../imgs/skills/sass_icon.svg'
import SQL from '../../imgs/skills/sql-server.png'
import Styled from '../../imgs/skills/styled 1.svg'
import Tailwind from '../../imgs/skills/tailwind.png'
import TS from '../../imgs/skills/ts.png'
import Vite from '../../imgs/skills/vite.png'
import Vscode from '../../imgs/skills/vscode.png'
import Yarn from '../../imgs/skills/yarn.png'

const infoSkills = [
  {
    icon: React,
    skillsName: 'React.JS'
  },
  {
    icon: Node,
    skillsName: 'Node.JS'
  },
  {
    icon: Styled,
    skillsName: 'Styled-Component'
  },
  {
    icon: JS,
    skillsName: 'JavaScript'
  },
  {
    icon: CSS,
    skillsName: 'CSS'
  },
  {
    icon: HTML,
    skillsName: 'HTML'
  },
  {
    icon: Json,
    skillsName: 'Json'
  },
  {
    icon: Git,
    skillsName: 'Git'
  },
  {
    icon: Express,
    skillsName: 'Express'
  },
  {
    icon: Bootstrap,
    skillsName: 'Bootstrap'
  },
  {
    icon: TS,
    skillsName: 'TypeScript'
  },
  {
    icon: Sass,
    skillsName: 'Sass'
  },
  {
    icon: Tailwind,
    skillsName: 'Tailwind CSS'
  },
  {
    icon: LogoFigma,
    skillsName: 'Figma'
  },
  {
    icon: Vscode,
    skillsName: 'Vscode'
  },
  {
    icon: Yarn,
    skillsName: 'Yarn'
  },
  {
    icon: Responsividade,
    skillsName: 'Responsividade'
  },
  {
    icon: Vite,
    skillsName: 'Vite'
  },
  {
    icon: Mongo,
    skillsName: 'MongoDB'
  },
  {
    icon: Prisma,
    skillsName: 'Prisma'
  }
]

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const handleMouseEnter = (info) => {
    setHoveredSkill(info)
  }

  const handleMouseLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <section className="grid h-screen items-center" id="habilidades">
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl text-sky-500 md:text-5xl">Habilidades</h2>
          <ul className="flex w-3/5 animate-toAppear flex-wrap justify-center gap-1 opacity-0 md:mt-4 md:w-2/5">
            {infoSkills.map((info) => (
              <li
                className="flex h-12 flex-col items-center md:mx-1 md:h-20 md:w-14"
                key={info.skillsName}
                onMouseEnter={() => handleMouseEnter(info)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className={` ${
                    hoveredSkill === info
                      ? 'justify-center text-center text-xs opacity-100 duration-1000 md:w-40 md:text-lg'
                      : 'text-sss opacity-20 duration-1000'
                  } `}
                >
                  {info.skillsName}
                </span>
                <img
                  className="h-8 w-8 cursor-pointer rounded-small bg-slate-500 md:h-14 md:w-14"
                  alt={info.skillsName}
                  src={info.icon}
                />
              </li>
            ))}
          </ul>
          <div className="animate-toAppearPlus opacity-0">
            <h3>Em Breve</h3>
            <ul className="grid place-items-center">
              <li className="relative flex flex-col items-center">
                <img
                  className="h-8 w-8 rounded-small bg-slate-500 md:h-14 md:w-14"
                  alt="SQL"
                  src={SQL}
                />
                <div className="spin-border md:spin-border-desktop absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-small bg-background md:h-14 md:w-14" />
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
export default Skills
