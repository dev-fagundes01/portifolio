import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import Background from "./../../src/assets/background.jpg";

function Home() {

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="grid place-items-center
    align-items-center my-20"
    >
      <div className="flex gap-8 flex-col my-0 opacity-0 animate-toAppear md:flex-row">
        <div
          className="flex
    align-items-center justify-center flex-col animate-mainShake"
        >
          <Link to="/sobre">
            <h1 className="leading-normal text-2xl md:text-5xl ml-1 gm:ml-0 widest">
              <span className="text-base md:text-4xl">Oi!, eu sou</span>
              <br />
              Diego <span className="text-purple-600">Fagundes</span>
              <br />
              Programador <span className="text-purple-700">Front-End</span>
            </h1>
          </Link>
        </div>
        <Link to="/projetos" className="flex justify-center">
          <img
            className="h-28 rounded-small md:h-64 animate-shake hover:animate-shakeHover"
            src={Background}
            alt="img-background"
          />
        </Link>
      </div>
    </motion.section>
  );
}
export default Home;
