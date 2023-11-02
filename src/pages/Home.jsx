import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import Background from './../../src/assets/background.png'

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="grid place-items-center
    align-items-center my-20"
    >
      <div className="flex gap-8 flex-col md:flex-row my-0">
        <div
          className="flex
    align-items-center justify-center flex-col"
        >
          <Link to="/sobre">
            <h1 className="leading-normal text-2xl md:text-5xl ml-1 widest">
              <span className="text-base md:text-4xl md:ml-3">Oi!, eu sou</span>
              <br />
              Diego <span className="text-rose-900">Fagundes</span>
              <br />
              Programador Front-End
            </h1>
          </Link>
        </div>
        <Link to="/projetos">
          <img
            className="h-28 md:h-64 animate-shake hover:animate-shakeHover"
            src={Background}
            alt="img-background"
          />
        </Link>
      </div>
    </motion.section>
  )
}
export default Home
