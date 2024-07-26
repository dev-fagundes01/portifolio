
import Background from "./../../src/assets/background.jpg";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";

function Home() {

  return (
    <section
      className="h-screen flex items-center justify-center"
      id="início">
      <AnimatedSection>
        <div className="flex gap-8 flex-col animate-toAppear md:flex-row">
          <div
            className="flex
    align-items-center justify-center flex-col animate-mainShake hover:animate-stopAppear"
          >
            <a>
              <h1 className="leading-normal text-2xl md:text-5xl ml-1 gm:ml-0">
                Programador <span className="text-purple-700">Front-End</span>
                <br />
                <span className="w-64 text-lg text-purple-600 flex md:w-40 md:text-2xl">Explorando o desconhecido, entregando o excepcional. Tecendo linhas de código para formar obras-primas digitais.</span>
              </h1>
            </a>
          </div>
          <a className="flex justify-center">
            <img
              className="h-28 rounded-small md:h-64 animate-shake hover:animate-shakeHover"
              src={Background}
              alt="img-background"
            />
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
export default Home;
