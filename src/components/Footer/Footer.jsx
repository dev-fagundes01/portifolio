import React from 'react'

import GitHub from './../../assets/github.png'
import Linkedin from './../../assets/linkedin.png'
import Whatsapp from './../../assets/WhatsApp-Carousel.jpg'

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 justify-center 3xl:flex-row 3xl:gap-30 3xl:justify-start">
      <a
        className="h-4 w-4 bg-rose-900 flex items-center justify-center rounded-full hover:scale-125 hover:duration-1000 3xl:h-28 3xl:w-28"
        href="https://www.linkedin.com/in/diego-fagundes-da-silva-694ab71b3/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="rounded-full h-3 3xl:h-70"
          src={Linkedin}
          alt="img-linkedin"
        />
      </a>
      <a
        className="h-4 w-4 bg-rose-900 flex items-center justify-center rounded-full hover:scale-125 hover:duration-1000 3xl:h-28 3xl:w-28"
        href="https://github.com/DiegoSilva1919"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="rounded-full h-3 3xl:h-70"
          src={GitHub}
          alt="img-github"
        />
      </a>
      <a
        className="h-4 w-4 bg-rose-900 flex items-center justify-center rounded-full hover:scale-125 hover:duration-1000 3xl:h-28 3xl:w-28"
        href="https://wa.me/qr/EBYVIZJRG3FPF1"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="rounded-full h-3 3xl:h-70"
          src={Whatsapp}
          alt="img-whatsapp"
        />
      </a>
    </div>
  )
}

export default Footer
