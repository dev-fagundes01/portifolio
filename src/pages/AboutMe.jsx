import Dowload from './../../src/assets/download.png'
import Foto from './../../src/assets/foto.png'

function AboutMe() {
  return (
    <section className="grid place-items-center items-center">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="h-28 md:h-56 rounded-default border-4 p-2 border-red-600 border-solid "
          src={Foto}
          alt="imf-foto"
        />
        <div className="flex flex-col ml-10 w-4/5 md:pt-10 md:gap-2">
          <h2 className="text-xl md:text-5xl text-red-600">Sobre mim</h2>
          <h3 className="text-lg md:text-3xl">Escada, Pernambuco</h3>
          <p className="my-1 text-sm md:text-xl md:w-4/5">
            Sou Desenvolvedor Front-End, com conhecimento em HTML, CSS,
            Javascript, React.js, Node.js e sempre estudando para ser
            Full-Stack. Com essas tecnologias já desenvolvi alguns projetos
            pessoais. Trabalho com desenvolvimento web em uma comunidade onde
            tenho a oportunidade para ajudar aqueles que precisar e aperfeiçoar
            meus conhecimentos.
          </p>
          <a
            className="flex items-center hover:text-rose-900 duration-700 text-sm md:text-xl"
            href="https://1drv.ms/f/s!Alq6MThgER89hXQKuzfY350PiVOA?e=6aK1Tj"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-full h-4 md:h-5"
              src={Dowload}
              alt="img-dowload"
            />
            Currículo
          </a>
        </div>
      </div>
    </section>
  )
}
export default AboutMe
