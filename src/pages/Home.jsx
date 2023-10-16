import { Link } from 'react-router-dom'

import Background from './../../src/assets/background.png'

function Home() {
  return (
    <section
      className="min-h-max grid place-items-center
    align-items-center 3xl:min-h-screen"
    >
      <div className="flex flex-col gap-8 my-12 3xl:flex-row 3xl:my-0">
        <div
          className="flex place-items-center
    align-items-center justify-center flex-col gap-3 3xl:gap-80"
        >
          <h3 className="text-xl 3xl:w-55 3xl:text-9xl">Oi!, eu sou</h3>

          <Link to="/sobre">
            <h2 className="leading-normal text-3xl text-center 3xl:text-13xl widest">
              Diego <span className="text-rose-900">Fagundes</span>
            </h2>
          </Link>

          <h2 className="leading-normal text-xl 3xl:text-9xl 3xl:w-auto">
            Programador Front-End
          </h2>
        </div>
        <Link to="/projetos">
          <img
            className="h-32 3xl:h-65 animate-shake hover:animate-shakeHover"
            src={Background}
            alt="img-background"
          />
        </Link>
      </div>
    </section>
  )
}
export default Home
