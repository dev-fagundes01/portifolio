import AnimatedSection from '../../components/AnimatedSection'
import Download from './../../imgs/others/download.png'
import Livros from './../../imgs/personal/livros.png'
import Sports from './../../imgs/personal/sports.png'
import Xadrez from './../../imgs/personal/xadrez.jpeg'

function AboutMe() {
  return (
    <section
      className="grid h-screen place-items-center items-center"
      id="sobre"
    >
      <AnimatedSection>
        <div className="mt-3 flex animate-toAppear flex-col items-center opacity-0 md:ml-11 md:mt-0 md:flex-row">
          <img
            className="h-28 animate-toAppearPlus rounded-default border-4 border-solid border-sky-300 p-2 md:h-64"
            src="https://github.com/dev-fagundes01.png"
            alt="imf-foto"
          />
          <div className="ml-2 flex w-4/5 flex-col md:ml-10 md:gap-2">
            <h2 className="text-xl text-sky-400 md:text-5xl">Sobre mim</h2>
            <h3 className="text-base md:text-3xl">Escada, Pernambuco</h3>
            <p className="text-xs md:mt-1 md:w-4/5 md:text-xl">
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
              <h3 className="text-lg text-sky-400 md:text-3xl">
                Interesses e Hobbies:
              </h3>
              <div className="grid grid-cols-3 grid-rows-2 place-items-center md:mb-1.1 md:mt-0.9 md:gap-1">
                <img
                  className="h-8 rounded-full md:h-14"
                  src={Sports}
                  alt="Sports-icon"
                />
                <p className="order-4 m-3 text-ss md:text-base">Esportes</p>
                <img
                  className="h-8 rounded-full md:h-14"
                  src={Xadrez}
                  alt="Xadrez-icon"
                />
                <p className="order-5 m-3 text-ss md:text-base">Xadrez</p>
                <img
                  className="order-3 h-8 rounded-full md:h-14"
                  src={Livros}
                  alt="Livros-icon"
                />
                <p className="order-6 m-3 text-ss md:text-base">Livros</p>
              </div>
            </div>
            <a
              className="flex items-center text-ss duration-700 hover:text-rose-900 md:text-xl"
              href="https://1drv.ms/b/s!Alq6MThgER89kKBpQD3JbxtO962XoQ?e=yBgbaO"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="mr-1 h-3 rounded-full md:h-8"
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
