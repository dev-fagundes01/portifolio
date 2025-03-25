import React from 'react'

import GitHub from './../imgs/social/github.png'
import Linkedin from './../imgs/social/linkedin.png'
import Whatsapp from './../imgs/social/WhatsApp-Carousel.jpg'

const Footer = () => {
  return (
    <div className="w-screen block fixed bottom-2 p-2 md:p-3">
      <div className="flex flex-row gap-2 justify-start">
        <a
          className="bg-purple-900 flex items-center justify-center rounded-full hover:scale-125 hover:duration-1000 h-4 w-4 md:h-8 md:w-8"
          href="https://www.linkedin.com/in/diego-fagundes-da-silva-694ab71b3/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-full h-3 md:h-5"
            src={Linkedin}
            alt="imagem do linkedin"
          />
        </a>
        <a
          className="bg-purple-900 flex items-center justify-center rounded-full hover:scale-125 hover:duration-1000 h-4 w-4 md:h-8 md:w-8"
          href="https://github.com/dfagundes2001"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-full h-3 md:h-5"
            src={GitHub}
            alt="img-github"
          />
        </a>
        <a
          className="bg-purple-900 flex items-center justify-center rounded-full hover:scale-125 hover:duration-1000 h-4 w-4 md:h-8 md:w-8"
          href="https://wa.me/558191943001"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-full h-3 md:h-5"
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
