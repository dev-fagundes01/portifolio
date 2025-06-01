import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import AnimatedSection from '../../components/AnimatedSection'
import Conversor from '../../imgs/projects/conversor.png'
import EmBreve from '../../imgs/projects/em-breve.jpg'
import iMovi from '../../imgs/projects/iMovi.png'
import DevMovies from '../../imgs/projects/movies.png'
import TodolistFirebase from '../../imgs/projects/todolist-firebase.png'
import UserList from '../../imgs/projects/user-list.png'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const infoProjects = [
  {
    projectsImage: DevMovies,
    alt: 'imagem do projeto dev movies',
    projectsName: 'DevMovies',
    description:
      'Um site que você poderá pesquisar por filmes e series, ver os trailers, quais são os populares, vão estrear e muito mais.',
    technologies:
      ' React.js, Javascript, styled-components, HTML e o Axios para consumir uma api publica.',
    links1: 'https://dev-movies-df.netlify.app',
    links2: 'https://github.com/DiegoSilva1919/dev-movies'
  },
  {
    projectsImage: UserList,
    alt: 'imagem do projeto User List',
    projectsName: 'User List',
    description:
      'Você poderá cadastrar usuários e, em uma página dedicada, visualizar, editar ou excluir seus registros conforme necessário.',
    technologies:
      ' React.js, Node.js, MongoDB, Prisma, JavaScript, styled-components e HTML',
    links1: 'https://react-app-devclub.netlify.app/',
    links2: 'https://github.com/dfagundes01/user-list'
  },
  {
    projectsImage: EmBreve,
    alt: 'imagem do projeto User List',
    projectsName: 'Hamburgueria',
    status: 'Em Breve',
    description: 'Projeto será feito em React.js e Node.js',
    frontendTechnologies:
      'Front-End: Axios, Styled-Components, React-Toastify, Mui-Material, Hook-Form, Yup, Context-Api',
    backendTechnologies:
      'Back-End: Docker, Express, Token JWT, Multer, Yup, Bcrypt, Mongoose, Sequelize, PostgreSQL, MongoDB'
  },
  {
    projectsImage: TodolistFirebase,
    alt: 'imagem do projeto todolist firebase ',
    projectsName: 'TodoList',
    description: 'Projeto feito com javascript vanilla e Firebase',
    technologies: ' JavaScript, CSS, HTML e Firebase.',
    links1: 'https://todolist-2c452.firebaseapp.com/',
    links2:
      'https://github.com/dfagundes2001/todoList-firebase?tab=readme-ov-file'
  },
  {
    projectsImage: Conversor,
    alt: 'imagem do projeto conversor',
    projectsName: 'Conversor de Moedas',
    description:
      'Nele podera converter o Real em Dolar Americano, Euro e Bitcoin.',
    technologies: ' JavaScript, CSS, HTML.',
    links1: 'https://conversor-df.netlify.app',
    links2: 'https://github.com/DiegoSilva1919/conversor'
  },
  {
    projectsImage: iMovi,
    alt: 'imagem do projeto iMovi',
    projectsName: 'iMovi',
    description:
      'Você vai ver um layout moderno de uma empresa do ramo de construção com informações da empresa, design de projetos e outras coisas.',
    technologies: ' Framework Bootstrap.',
    links1: 'https://i-movi-xi.vercel.app/',
    links2: 'https://github.com/DiegoSilva1919/iMovi'
  }
]

const Projects = () => {
  const [isMouseOver, setIsMouseOver] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isMobileOrMouseOver, setIsMobileOrMouseOver] = useState(
    window.innerWidth < 768
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsMobileOrMouseOver(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMouseOver = (projectsName) => {
    setIsMouseOver((prev) => ({ ...prev, [projectsName]: false }))
  }

  const handleMouseOut = (projectsName) => {
    setIsMouseOver((prev) => ({ ...prev, [projectsName]: true }))
  }

  return (
    <section className="relative h-screen" id="projetos">
      <AnimatedSection>
        <div className="flex flex-col items-center gap-3 bg-transparent pt-24">
          <h2 className="text-2xl text-sky-500 md:text-5xl">
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
            className="block h-60 w-9/12 animate-toAppear opacity-0 md:hidden"
            style={
              isMobile
                ? { '--swiper-navigation-size': '20px' }
                : { '--swiper-navigation-size': '40px' }
            }
          >
            {infoProjects.map((projects) => (
              <SwiperSlide
                className="relative mx-0.5 flex animate-toAppearPlus flex-col items-center justify-center bg-transparent text-center"
                key={projects.projectsName}
              >
                <img
                  onMouseOver={() => handleMouseOver(projects.projectsName)}
                  onMouseOut={() => handleMouseOut(projects.projectsName)}
                  style={{
                    opacity: isMobileOrMouseOver
                      ? '0.07'
                      : isMouseOver[projects.projectsName]
                        ? '0.07'
                        : '1',
                    transition: 'opacity 1s ease, z-index 0.3s ease'
                  }}
                  className="block h-full w-full rounded-md opacity-10 hover:opacity-80"
                  src={projects.projectsImage}
                  alt={projects.alt}
                />
                <div className="absolute top-16 flex w-full flex-col items-center gap-2 md:gap-3">
                  <div
                    onMouseOver={() => handleMouseOver(projects.projectsName)}
                    onMouseOut={() => handleMouseOut(projects.projectsName)}
                    style={{
                      opacity: isMobileOrMouseOver
                        ? '1'
                        : isMouseOver[projects.projectsName]
                          ? '1'
                          : '0',
                      transition: 'opacity 1s ease'
                    }}
                    className="div-info flex w-3/5 flex-col md:gap-3"
                  >
                    <h5 className="text-lg">{projects.projectsName}</h5>
                    {projects.status ? (
                      <span className="text-rose-400">{projects.status}</span>
                    ) : (
                      ''
                    )}
                    <p className="mb-[6px] text-xs leading-none md:text-sm">
                      {projects.description}
                    </p>
                    <p className="text-xs leading-none md:text-sm">
                      <span className="text-rose-400">Tecnologias:</span>
                      <br />
                      {projects.technologies || projects.frontendTechnologies}
                      <br />
                      <br />
                      {projects.backendTechnologies}
                    </p>
                  </div>
                  {projects.links1 && (
                    <div className="flex flex-row items-center justify-center gap-[.3rem] md:gap-1">
                      <button className="flex h-auto w-10 items-center justify-center rounded-full bg-blue-500 p-1 hover:bg-purple-500 active:bg-purple-700 md:w-20">
                        <a
                          className="text-sss text-white md:text-xs"
                          target="_blank"
                          href={projects.links1}
                          rel="noreferrer"
                        >
                          Projeto
                        </a>
                      </button>
                      <button className="flex h-auto w-10 items-center justify-center rounded-full bg-blue-500 p-1 hover:bg-purple-500 active:bg-purple-700 md:w-20">
                        <a
                          className="text-sss text-white md:text-xs"
                          target="_blank"
                          href={projects.links2}
                          rel="noreferrer"
                        >
                          Repositório
                        </a>
                      </button>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AnimatedSection>
    </section>
  )
}

export default Projects
