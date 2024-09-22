import { useEffect, useState } from "react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import UserList from "../../src/imgs/projects/user-list.png";
import Conversor from "../../src/imgs/projects/conversor.png";
import DevBills from "../../src/imgs/projects/dev-bills.png";
import iMovi from "../../src/imgs/projects/iMovi.png";
import EmBreve from "../../src/imgs/projects/em-breve.jpg";
import DevMovies from "../../src/imgs/projects/movies.png";
import TodolistFirebase from "../imgs/projects/todolist-firebase.png";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

const infoProjects = [
  {
    projectsImage: DevBills,
    alt: "imagem do projeto dev bills",
    projectsName: "DevBills",
    description:
      "Um painel financeiro onde você pode criar e gerenciar suas transações, especificando valores, datas, tipos de transações e categorias personalizadas.",
    technologies:
      " React, TypeScript, Docker, MongoDB, Node, Express, styled-components e HTML.",
    links1: "https://devbills-front.vercel.app/",
    links2: "https://github.com/dfagundes01/devbills-front",
  },
  {
    projectsImage: DevMovies,
    alt: "imagem do projeto dev movies",
    projectsName: "DevMovies",
    description:
      "Um site que você poderá pesquisar por filmes e series, ver os trailers, quais são os populares,que vão estrear e muito mais.",
    technologies:
      " React.js, Javascript, styled-components, HTML e o Axios para consumir uma api publica.",
    links1: "https://dev-movies-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/dev-movies",
  },
  {
    projectsImage: UserList,
    alt: "imagem do projeto User List",
    projectsName: "User List",
    description:
      "Você poderá cadastrar usuários e, em uma página dedicada, visualizar, editar ou excluir seus registros conforme necessário.",
    technologies: " React.js, Node.js, MongoDB, Prisma, JavaScript, styled-components e HTML",
    links1: "https://react-app-devclub.netlify.app/",
    links2: "https://github.com/dfagundes01/user-list",
  },
  {
    projectsImage: EmBreve,
    alt: "imagem do projeto User List",
    projectsName: "Hamburgueria",
    status: "Em Breve",
    description: "Projeto será feito em React.js e Node.js",
    frontendTechnologies: "Front-End: Axios, Styled-Components, React-Toastify, Mui-Material, Hook-Form, Yup, Context-Api",
    backendTechnologies: "Back-End: Docker, Express, Token JWT, Multer, Yup, Bcrypt, Mongoose, Sequelize, PostgreSQL, MongoDB"
  },
  {
    projectsImage: TodolistFirebase,
    alt: "imagem do projeto todolist firebase ",
    projectsName: "TodoList",
    description: "Projeto feito com javascript vanilla e Firebase",
    technologies: " JavaScript, CSS, HTML e Firebase.",
    links1: "https://todolist-2c452.firebaseapp.com/",
    links2: "https://github.com/dfagundes2001/todoList-firebase?tab=readme-ov-file",
  },
  {
    projectsImage: Conversor,
    alt: "imagem do projeto conversor",
    projectsName: "Conversor de Moedas",
    description:
      "Nele podera converter o Real em Dolar Americano, Euro e Bitcoin.",
    technologies: " JavaScript, CSS, HTML.",
    links1: "https://conversor-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/conversor",
  },
  {
    projectsImage: iMovi,
    alt: "imagem do projeto iMovi",
    projectsName: "iMovi",
    description:
      "Você vai ver um layout moderno de uma empresa do ramo de construção com informações da empresa, design de projetos e outras coisas.",
    technologies: " Framework Bootstrap.",
    links1: "https://i-movi-xi.vercel.app/",
    links2: "https://github.com/DiegoSilva1919/iMovi",
  },
];

const Projects = () => {
  const [isMouseOver, setIsMouseOver] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handleMouseOver = (projectsName) => {
    setIsMouseOver((prev) => ({ ...prev, [projectsName]: false }));
  };

  const handleMouseOut = (projectsName) => {
    setIsMouseOver((prev) => ({ ...prev, [projectsName]: true }));
  };

  return (
    <section
      className="h-screen relative"
      id="projetos">
      <AnimatedSection>
        <div className="pt-24 flex flex-col items-center gap-3 bg-transparent">
          <h2 className="text-2xl md:text-5xl text-sky-500">
            Principais Projetos
          </h2>
          <Swiper
            slidesPerView={isMobile ? 1 : 2}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="block h-60 w-9/12 opacity-0 animate-toAppear md:hidden"
          >
            {infoProjects.map((projects) => (
              <SwiperSlide
                className="relative text-center bg-transparent flex justify-center items-center flex-col mx-0.5 animate-toAppearPlus"
                key={projects.projectsName}
              >
                <img
                  onMouseOver={() => handleMouseOver(projects.projectsName)}
                  onMouseOut={() => handleMouseOut(projects.projectsName)}
                  style={{
                    opacity: isMouseOver[projects.projectsName] ? "0.03" : "1",
                    transition: "opacity 1s ease, z-index 0.3s ease"
                  }}
                  className="block w-full h-full rounded-md opacity-10 hover:opacity-80"
                  src={projects.projectsImage}
                  alt={projects.alt}
                />
                <div className="w-full flex flex-col items-center gap-10 absolute top-16">
                  <div
                    onMouseOver={() => handleMouseOver(projects.projectsName)}
                    onMouseOut={() => handleMouseOut(projects.projectsName)}
                    style={{
                      opacity: isMouseOver[projects.projectsName] ? "1" : "0",
                      transition: "opacity 1s ease"
                    }}
                    className="div-info flex flex-col w-3/5 gap-3"
                  >
                    <h5 className="text-lg">{projects.projectsName}</h5>
                    {
                      projects.status ? <span
                        className="text-rose-400">{projects.status}</span> : ''
                    }
                    <p className="text-sm leading-none">{projects.description}</p>
                    <p className="text-sm leading-none">
                      <span className="text-rose-400">
                        Tecnologias
                      </span>
                      <br />
                      {projects.technologies || projects.frontendTechnologies}
                      <br />
                      <br />
                      {projects.backendTechnologies}
                    </p>
                  </div>
                  <div
                    onMouseOver={() => handleMouseOver(projects.projectsName)}
                    onMouseOut={() => handleMouseOut(projects.projectsName)}
                    style={{
                      opacity: isMouseOver[projects.projectsName] ? "1" : "0.85",
                      transition: "opacity 1s ease"
                    }}
                    className="flex items-center justify-center gap-1 flex-row">
                    <button className="flex items-center justify-center bg-blue-500 rounded-full p-1 w-20 h-auto hover:bg-red-500 active:bg-red-700">
                      <a
                        className="text-xs"
                        target="_blank"
                        href={projects.links1}
                        rel="noreferrer"
                      >
                        Projeto
                      </a>
                    </button>
                    <button className="flex items-center justify-center bg-blue-500 rounded-full p-1 w-20 h-auto hover:bg-red-500 active:bg-red-700">
                      <a
                        className="text-xs"
                        target="_blank"
                        href={projects.links2}
                        rel="noreferrer"
                      >
                        Repositório
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;
