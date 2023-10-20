import { Link } from 'react-router-dom'

import Background from './../../src/assets/background.png'

function Home() {
  return (
    <section
      className="grid place-items-center
    align-items-center min-h-full my-20"
    >
      <div className="flex gap-8 flex-col md:flex-row my-0">
        <div
          className="flex
    align-items-center justify-center flex-col"
        >
          <h3 className="text-base md:text-4xl">Oi!, eu sou</h3>

          <Link to="/sobre">
            <h2 className="leading-normal text-2xl md:text-6xl widest">
              Diego <span className="text-rose-900">Fagundes</span>
            </h2>
          </Link>

          <h2 className="leading-normal text-base md:text-4xl w-auto">
            Programador Front-End
          </h2>
        </div>
        <Link to="/projetos">
          <img
            className="h-28 md:h-64 animate-shake hover:animate-shakeHover"
            src={Background}
            alt="img-background"
          />
        </Link>
      </div>
    </section>
  )
}
export default Home
