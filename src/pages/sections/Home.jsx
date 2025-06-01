import AnimatedSection from '../../components/AnimatedSection'
import Background from '../../imgs/others/background.jpg'

function Home() {
  return (
    <section className="flex h-screen items-center justify-center" id="início">
      <AnimatedSection>
        <div className="flex animate-toAppear flex-col gap-8 md:flex-row">
          <div className="align-items-center flex animate-mainShake flex-col justify-center hover:animate-stopAppear">
            <h1 className="ml-1 text-2xl leading-normal md:text-5xl gm:ml-0">
              Desenvolvedor <span className="text-purple-700">Web</span>
              <br />
              <span className="flex w-64 text-lg text-purple-600 md:w-40 md:text-2xl">
                Explorando o desconhecido, entregando o excepcional. Tecendo
                linhas de código para formar obras-primas digitais.
              </span>
            </h1>
          </div>
          <img
            className="h-28 animate-shake rounded-small hover:animate-shakeHover md:h-64"
            src={Background}
            alt="img-background"
          />
        </div>
      </AnimatedSection>
    </section>
  )
}
export default Home
