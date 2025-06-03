import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import AnimatedSection from '../../components/AnimatedSection'
import { useData } from '../../context/DataContext'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Projects = () => {
  const { projects } = useData()
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
            {projects
              .sort((a, b) => a.index - b.index)
              .map((project) => (
                <SwiperSlide
                  className="relative mx-0.5 flex animate-toAppearPlus flex-col items-center justify-center bg-transparent text-center"
                  key={project.name}
                >
                  <img
                    onMouseOver={() => handleMouseOver(project.name)}
                    onMouseOut={() => handleMouseOut(project.name)}
                    style={{
                      opacity: isMobileOrMouseOver
                        ? '0.07'
                        : isMouseOver[project.name]
                          ? '0.07'
                          : '1',
                      transition: 'opacity 1s ease, z-index 0.3s ease'
                    }}
                    className="block h-full w-full rounded-md opacity-10 hover:opacity-80"
                    src={project.imagem}
                    alt={project.alt}
                  />
                  <div className="absolute top-16 flex w-full flex-col items-center gap-2 md:gap-3">
                    <div
                      onMouseOver={() => handleMouseOver(project.name)}
                      onMouseOut={() => handleMouseOut(project.name)}
                      style={{
                        opacity: isMobileOrMouseOver
                          ? '1'
                          : isMouseOver[project.name]
                            ? '1'
                            : '0',
                        transition: 'opacity 1s ease'
                      }}
                      className="div-info flex w-3/5 flex-col md:gap-3"
                    >
                      <h5 className="text-lg">{project.name}</h5>
                      {project.status ? (
                        <span className="text-rose-400">{project.status}</span>
                      ) : (
                        ''
                      )}
                      <p className="mb-[6px] text-xs leading-none md:text-sm">
                        {project.description}
                      </p>
                      <p className="text-xs leading-none md:text-sm">
                        <span className="text-rose-400">Tecnologias:</span>
                        <br />
                        {project.technologies || project.frontendTechnologies}
                        <br />
                        <br />
                        {project.backendTechnologies}
                      </p>
                    </div>
                    {project.project_link && (
                      <div className="flex flex-row items-center justify-center gap-[.3rem] md:gap-1">
                        <button className="flex h-auto w-12 items-center justify-center rounded-full bg-blue-500 p-1 hover:bg-purple-500 active:bg-purple-700 md:w-28">
                          <a
                            className="text-sss text-white md:text-xs"
                            target="_blank"
                            href={project.project_link}
                            rel="noreferrer"
                          >
                            Ver Projeto
                          </a>
                        </button>
                        {project.repository_link && (
                          <button className="flex h-auto w-12 items-center justify-center rounded-full bg-blue-500 p-1 hover:bg-purple-500 active:bg-purple-700 md:w-28">
                            <a
                              className="text-sss text-white md:text-xs"
                              target="_blank"
                              href={project.repository_link}
                              rel="noreferrer"
                            >
                              Ver Repositório
                            </a>
                          </button>
                        )}
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
