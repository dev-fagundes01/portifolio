/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";

import Dowload from "./../../src/assets/download.png";
import Livros from "./../../src/assets/livros.png";
import Sports from "./../../src/assets/sports.png";
import Xadrez from "./../../src/assets/xadrez.jpeg";

function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="grid place-items-center items-center"
    >
      <div className="flex flex-col items-center mt-3 opacity-0 animate-toAppear md:flex-row md:ml-5 md:mt-0">
        <img
          className="h-28 md:h-64 rounded-default border-4 p-2 border-sky-300 border-solid "
          src="https://github.com/dfagundes2001.png"
          alt="imf-foto"
        />
        <div className="flex flex-col ml-10 w-4/5 md:gap-2">
          <h2 className="text-xl md:text-5xl text-sky-400">Sobre mim</h2>
          <h3 className="text-lg md:text-3xl">Escada, Pernambuco</h3>
          <p className="text-sm md:mt-1 md:text-xl md:w-4/5">
            Sou Desenvolvedor Front-End, com conhecimento em HTML, CSS,
            Javascript, React.js, Node.js e sempre estudando para ser Full-Stack
            na{" "}
            <b>
              <a href="https://www.linkedin.com/school/dev-club-devs/mycompany/">
                DevClub
              </a>
            </b>
            , um bootcamp completo que ensina tudo que um full-stack precisa ter
            e muito mais. Com essas tecnologias já desenvolvi alguns projetos
            pessoais. Trabalho com desenvolvimento web na comunidade onde tenho
            a oportunidade para ajudar aqueles que precisar e aperfeiçoar meus
            conhecimentos.
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
              src={Dowload}
              alt="img-dowload"
            />
            Currículo
          </a>
        </div>
      </div>
    </motion.section>
  );
}
export default AboutMe;
