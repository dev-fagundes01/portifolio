/* eslint-disable import-helpers/order-imports */
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import DevMovies from '../../src/img/Captura de tela movies.png'
import Burger from '../../src/img/Captura de tela burger.png'
import Conversor from '../../src/img/Captura de tela conversor.png'
import iMovi from '../../src/img/Captura de tela iMovi.png'
import StorePS from '../../src/img/Captura de tela Playstation-Store.png'

// eslint-disable-next-line import-helpers/order-imports
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

const infoProjects = [
  {
    projectsImage: DevMovies,
    alt: 'img-devmovies',
    projectsName: 'DevMovies',
    description:
      'Um site que você poderá pesquisar por filmes e series, ver os trailers, quais são os populares,que vão estrear e muito mais.',
    technologies:
      'Tecnologias usadas no projeto: React.js, Javascript, CSS, HTML e o Axios para consumir uma api publica.',
    links1: 'https//dev-movies-df.netlify.app',
    links2: 'https//github.com/DiegoSilva1919/dev-movies'
  },
  {
    projectsImage: Burger,
    alt: 'img-hamburgueria',
    projectsName: 'Hamburgueria',
    description:
      'Você fara o seu pedido e iremos colocar em uma outra pagina onde você poderá ver e excluir se quiser.',
    technologies:
      'Tecnologias usadas no projeto: React.js, Node.js, JavaScript, CSS e HTML',
    links1: '//hamburgueria-df.netlify.app',
    links2: '//github.com/DiegoSilva1919/hamburgueria'
  },
  {
    projectsImage: Conversor,
    alt: 'img-conversor',
    projectsName: 'Conversor',
    description:
      'Nele podera converter o Real em Dolar Americano, Euro e Bitcoin.',
    technologies: 'Tecnologias usadas no projeto JavaScript, CSS, HTML.',
    links1: 'https://conversor-df.netlify.app',
    links2: 'https://github.com/DiegoSilva1919/conversor'
  },
  {
    projectsImage: iMovi,
    alt: 'img-iMovi',
    projectsName: 'iMovi',
    description:
      'Você vai ver um layout moderno de uma empresa do ramo de construção com informações da empresa, design de projetos e outras coisas.',
    technologies: 'Esse projeto foi feito com o framework Bootstrap.',
    links1: 'https://i-movi-xi.vercel.app/',
    links2: 'https://github.com/DiegoSilva1919/iMovi'
  },
  {
    projectsImage: StorePS,
    alt: 'img-Playstation-Store',
    projectsName: 'Store-PS',
    description:
      'Um site da Playstation-Store com layout diferente e responsivo.',
    technologies: 'Tecnologias usadas no projeto JavaScript, CSS e HTML.',
    links1: 'https://diegosilva1919.github.io/playstation-store/',
    links2: 'https://github.com/DiegoSilva1919/playstation-store'
  },
  {
    projectsName: 'EmBreve',
    description: 'Projeto feito em React.js.',
    technologies: 'Tecnologias usadas no projeto TipeScript, CSS e HTML.'
  }
]

const Projects = () => {
  return (
    <section className="h-auto  relative 3xl:py-5 3xl:pt-80">
      <div className="flex flex-col items-center bg-transparent text-sn text-blue-100 m-0 p-0">
        <h2 className="text-2xl mb-1 3xl:text-8xl 3xl:mb-20">
          Principais Projetos
        </h2>
        <Swiper
          slidesPerView={2}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="h-60 w-9/12"
        >
          {infoProjects.map((projects) => (
            <SwiperSlide
              className="relative text-center text-lg bg-transparent flex justify-center items-center flex-col 3xl:mx-20"
              key={projects.projectsName}
            >
              <img
                className="block w-full h-full rounded-3xl opacity-10 hover:opacity-80"
                src={projects.projectsImage}
                alt={projects.alt}
              />
              <div className="absolute flex flex-col gap-3 w-20 3xl:gap-10 3xl:h-650 3xl:w-3/5 3xl:mb-20">
                <h5 className="text-sm 3xl:text-9xl 3xl:mb-5">
                  {projects.projectsName}
                </h5>
                <p className="text-xx leading-3 3xl:text-6xl 3xl:leading-none">
                  {projects.description}
                </p>
                <p className="text-xx leading-3 3xl:text-6xl 3xl:leading-none">
                  {projects.technologies}
                </p>
                <div className="flex flex-col items-center justify-center gap-1 3xl:flex-row">
                  <button className="flex items-center justify-center bg-blue-700 rounded-full w-9 h-4 3xl:p-3 3xl:w-52 3xl:h-auto hover:bg-red-500 active:bg-red-700">
                    <a
                      className="text-nx 3xl:text-4xl"
                      target="_blank"
                      href={projects.links1}
                      rel="noreferrer"
                    >
                      Projeto
                    </a>
                  </button>
                  <button className="flex items-center justify-center bg-blue-700 rounded-full w-9 h-4 3xl:p-3 3xl:w-52 3xl:h-auto hover:bg-red-500 active:bg-red-700">
                    <a
                      className="text-nx 3xl:text-4xl"
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
    </section>
  )
}

export default Projects
