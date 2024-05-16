/* eslint-disable prettier/prettier */
import { useState } from "react";

import { motion } from "framer-motion";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Burger from "../../src/img/Captura de tela burger.png";
import Conversor from "../../src/img/Captura de tela conversor.png";
import iMovi from "../../src/img/Captura de tela iMovi.png";
import DevMovies from "../../src/img/Captura de tela movies.png";
import StorePS from "../../src/img/Captura de tela Playstation-Store.png";

const infoProjects = [
  {
    projectsImage: DevMovies,
    alt: "img-devmovies",
    projectsName: "DevMovies",
    description:
      "Um site que você poderá pesquisar por filmes e series, ver os trailers, quais são os populares,que vão estrear e muito mais.",
    technologies:
      " React.js, Javascript, CSS, HTML e o Axios para consumir uma api publica.",
    links1: "https://dev-movies-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/dev-movies",
  },
  {
    projectsImage: Burger,
    alt: "img-hamburgueria",
    projectsName: "Hamburgueria",
    description:
      "Você fara o seu pedido e iremos colocar em uma outra pagina onde você poderá ver e excluir se quiser.",
    technologies: " React.js, Node.js, JavaScript, CSS e HTML",
    links1: "https://hamburgueria-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/hamburgueria",
  },
  {
    projectsImage: Conversor,
    alt: "img-conversor",
    projectsName: "Conversor de Moedas",
    description:
      "Nele podera converter o Real em Dolar Americano, Euro e Bitcoin.",
    technologies: " JavaScript, CSS, HTML.",
    links1: "https://conversor-df.netlify.app",
    links2: "https://github.com/DiegoSilva1919/conversor",
  },
  {
    projectsImage: iMovi,
    alt: "img-iMovi",
    projectsName: "iMovi",
    description:
      "Você vai ver um layout moderno de uma empresa do ramo de construção com informações da empresa, design de projetos e outras coisas.",
    technologies: " Framework Bootstrap.",
    links1: "https://i-movi-xi.vercel.app/",
    links2: "https://github.com/DiegoSilva1919/iMovi",
  },
  {
    projectsImage: StorePS,
    alt: "img-Playstation-Store",
    projectsName: "Store-PS",
    description:
      "Um site da Playstation-Store com layout diferente e responsivo.",
    technologies: " JavaScript, CSS e HTML.",
    links1: "https://dfagundes2001.github.io/playstation-store/",
    links2: "https://github.com/DiegoSilva1919/playstation-store",
  },
  {
    projectsName: "TodoList-Firebase: Em Desenvolvimento",
    description: "Projeto feito com javascript vanilla e Firebase",
    technologies: " JavaScript, CSS, HTML, React e Firebase.",
  },
  {
    projectsName: "Dashboard Financeiro: EmBreve",
    description: "Projeto será feito em React.js.",
    technologies: " TypeScript, CSS, HTML e React.",
  },
];

const Projects = () => {
  const [isMouseOver, setIsMouseOver] = useState(true);

  const handleMouseOver = (projectsName) => {
    setIsMouseOver((prev) => ({ ...prev, [projectsName]: false }));
  };

  const handleMouseOut = (projectsName) => {
    setIsMouseOver((prev) => ({ ...prev, [projectsName]: true }));
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="h-auto relative"
    >
      <div className="flex flex-col items-center bg-transparent">
        <h2 className="text-2xl md:text-5xl text-sky-500 mb-2.2">
          Principais Projetos
        </h2>
        <Swiper
          slidesPerView={1}
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
              className="relative text-center bg-transparent flex justify-center items-center flex-col mx-2.2"
              key={projects.projectsName}
            >
              <img
                onMouseOver={() => handleMouseOver(projects.projectsName)}
                onMouseOut={() => handleMouseOut(projects.projectsName)}
                style={{
                  opacity: isMouseOver[projects.projectsName] ? "0.20" : "1",
                }}
                className="block w-full h-full rounded-md opacity-10 hover:opacity-80"
                src={projects.projectsImage}
                alt={projects.alt}
              />
              <div
                onMouseOver={() => handleMouseOver(projects.projectsName)}
                onMouseOut={() => handleMouseOut(projects.projectsName)}
                style={{
                  opacity: isMouseOver[projects.projectsName] ? "1" : "0",
                }}
                className="absolute top-16 flex flex-col w-3/5 gap-3"
              >
                <h5 className="text-lg">{projects.projectsName}</h5>
                <p className="text-sm leading-none">{projects.description}</p>
                <p className="text-sm leading-none">
                  <span className="text-rose-400 ">
                    Tecnologias usadas no projeto:
                  </span>
                  {projects.technologies}
                </p>
              </div>
              <div className="absolute bottom-9 flex items-center justify-center gap-1 flex-row">
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
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={3}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="hidden h-60 w-9/12 opacity-0 animate-toAppear md:block"
        >
          {infoProjects.map((projects) => (
            <SwiperSlide
              className="relative text-center bg-transparent flex justify-center items-center flex-col mx-0.5"
              key={projects.projectsName}
            >
              <img
                onMouseOver={() => handleMouseOver(projects.projectsName)}
                onMouseOut={() => handleMouseOut(projects.projectsName)}
                style={{
                  opacity: isMouseOver[projects.projectsName] ? "0.20" : "1",
                }}
                className="block w-full h-full rounded-md opacity-10 hover:opacity-80"
                src={projects.projectsImage}
                alt={projects.alt}
              />
              <div
                onMouseOver={() => handleMouseOver(projects.projectsName)}
                onMouseOut={() => handleMouseOut(projects.projectsName)}
                style={{
                  opacity: isMouseOver[projects.projectsName] ? "1" : "0",
                }}
                className="absolute top-8 flex flex-col w-3/5 "
              >
                <h5 className="md:text-2xl flex justify-center">
                  {projects.projectsName}
                </h5>
                <p className="text-lg leading-none">{projects.description}</p>
                <p className="text-lg leading-none mt-3.5">
                  <span className="text-rose-400 ">
                    Tecnologias usadas no projeto:
                  </span>
                  {projects.technologies}
                </p>
              </div>
              <div className="absolute bottom-9 flex items-center justify-center gap-1 flex-row">
                <button className="flex items-center justify-center bg-blue-500 rounded-full p-1 w-20 h-auto hover:bg-red-500 active:bg-red-700">
                  <a
                    className="text-sm"
                    target="_blank"
                    href={projects.links1}
                    rel="noreferrer"
                  >
                    Projeto
                  </a>
                </button>
                <button className="flex items-center justify-center bg-blue-500 rounded-full p-1 w-20 h-auto hover:bg-red-500 active:bg-red-700">
                  <a
                    className="text-sm"
                    target="_blank"
                    href={projects.links2}
                    rel="noreferrer"
                  >
                    Repositório
                  </a>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Projects;
