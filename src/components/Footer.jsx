import React from 'react'

import GitHub from './../imgs/social/github.png'
import Linkedin from './../imgs/social/linkedin.png'
import Whatsapp from './../imgs/social/WhatsApp-Carousel.jpg'

const Footer = () => {
  return (
    <div className="fixed bottom-2 block w-screen p-2 md:p-3">
      <div className="flex flex-row justify-start gap-2">
        <a
          className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-900 hover:scale-125 hover:duration-1000 md:h-8 md:w-8"
          href="https://www.linkedin.com/in/diego-fagundes-da-silva-694ab71b3/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-3 rounded-full md:h-5"
            src={Linkedin}
            alt="imagem do linkedin"
          />
        </a>
        <a
          className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-900 hover:scale-125 hover:duration-1000 md:h-8 md:w-8"
          href="https://github.com/dfagundes2001"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-3 rounded-full md:h-5"
            src={GitHub}
            alt="img-github"
          />
        </a>
        <a
          className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-900 hover:scale-125 hover:duration-1000 md:h-8 md:w-8"
          href="https://wa.me/558191943001"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-3 rounded-full md:h-5"
            src={Whatsapp}
            alt="img-whatsapp"
          />
        </a>
      </div>
      <div className="w-full text-center text-ss md:text-xs">
        &copy; {new Date().getFullYear()} Diego Fagundes. Todos os direitos
        reservados.
      </div>
    </div>
  )
}

export default Footer
