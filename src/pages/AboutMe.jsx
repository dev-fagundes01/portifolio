import Dowload from './../../src/assets/download.png'
import Foto from './../../src/assets/foto.png'

function AboutMe() {
  return (
    <section className="grid place-items-center items-center min-h-screen">
      <div className="flex flex-col items-center h-60 3xl:flex-row">
        <img
          className="h-32 3xl:h-55 rounded-default border-4 p-2 border-red-600 border-solid "
          src={Foto}
          alt="imf-foto"
        />
        <div className="w-4/5 flex flex-col gap-0 pt-10 ml-10 3xl:w-50 3xl:gap-12 4xl:w-40">
          <h2 className="text-3xl 3xl:text-11xl text-red-600">Sobre mim</h2>
          <h3 className="text-xl 3xl:text-9xl 3xl:leading-normal">
            Escada, Pernambuco
          </h3>
          <p className="my-5 text-sm 3xl:text-7xl 3xl:leading-normal">
            Sou Desenvolvedor Front-End, com conhecimento em HTML, CSS,
            Javascript, React.js, Node.js e sempre estudando para ser
            Full-Stack. Com essas tecnologias já desenvolvi alguns projetos
            pessoais. Trabalho com desenvolvimento web em uma comunidade onde
            tenho a oportunidade para ajudar aqueles que precisar e aperfeiçoar
            meus conhecimentos.
          </p>
          <a
            className="flex items-center text-sm hover:text-rose-900 duration-700 3xl:text-5xl"
            href="https://1drv.ms/f/s!Alq6MThgER89hXQKuzfY350PiVOA?e=6aK1Tj"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="h-5 rounded-full 3xl:h-20"
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
