import AnimatedSection from '../../components/AnimatedSection'
import Download from './../../imgs/others/download.png'
import Livros from './../../imgs/personal/livros.png'
import Sports from './../../imgs/personal/sports.png'
import Xadrez from './../../imgs/personal/xadrez.jpeg'

function AboutMe() {
  return (
    <section
      className="h-screen grid place-items-center items-center"
      id="sobre"
    >
      <AnimatedSection>
        <div className="flex flex-col items-center mt-3 opacity-0 md:flex-row md:ml-11 md:mt-0 animate-toAppear">
          <img
            className="h-28 md:h-64 rounded-default border-4 p-2 border-sky-300 border-solid animate-toAppearPlus"
            src="https://github.com/dev-fagundes01.png"
            alt="imf-foto"
          />
          <div className="flex flex-col ml-2 w-4/5 md:ml-10 md:gap-2">
            <h2 className="text-xl md:text-5xl text-sky-400">Sobre mim</h2>
            <h3 className="text-base md:text-3xl">Escada, Pernambuco</h3>
            <p className="text-xs md:mt-1 md:text-xl md:w-4/5">
              Desenvolvedor web com experiência em JavaScript e React, além de
              outras tecnologias. Estou constantemente expandindo meus
              conhecimentos para me tornar um desenvolvedor Full-Stack, com foco
              em organização, boas práticas e eficiência no desenvolvimento de
              soluções. Ao longo da minha jornada, desenvolvi projetos pessoais
              e realizei trabalhos freelance, sempre aplicando as melhores
              técnicas e aprendizados adquiridos.
              <br />
              <br />
              Atualmente, faço parte da comunidade DevClub, onde contribuo
              ativamente no desenvolvimento de projetos, aprimorando minhas
              habilidades e ajudando outros desenvolvedores. Sempre que
              possível, busco colaborar com projetos open-source, acreditando na
              importância do aprendizado contínuo e no compartilhamento de
              conhecimento.
            </p>
            <div>
              <h3 className="text-lg md:text-3xl text-sky-400">
                Interesses e Hobbies:
              </h3>
              <div className="grid grid-cols-3 grid-rows-2 place-items-center md:gap-1 md:mt-0.9 md:mb-1.1">
                <img
                  className="h-8 md:h-14 rounded-full"
                  src={Sports}
                  alt="Sports-icon"
                />
                <p className="order-4 m-3 text-ss md:text-base">Esportes</p>
                <img
                  className="h-8 md:h-14 rounded-full"
                  src={Xadrez}
                  alt="Xadrez-icon"
                />
                <p className="order-5 m-3 text-ss md:text-base">Xadrez</p>
                <img
                  className="order-3 h-8 md:h-14 rounded-full"
                  src={Livros}
                  alt="Livros-icon"
                />
                <p className="order-6 m-3 text-ss md:text-base">Livros</p>
              </div>
            </div>
            <a
              className="flex items-center hover:text-rose-900 duration-700 text-ss md:text-xl"
              href="https://1drv.ms/b/s!Alq6MThgER89kKBpQD3JbxtO962XoQ?e=yBgbaO"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-full mr-1 h-3 md:h-8"
                src={Download}
                alt="img-download"
              />
              Currículo
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
export default AboutMe
