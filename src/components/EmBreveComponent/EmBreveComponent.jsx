import React, { useState, useEffect } from 'react'

import EmBreve from './../../assets/em-breve.jpg'
import { DivAnimention } from './styles'

const ImageComponent = () => {
  const [isBig, setIsBig] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBig((prevIsBig) => !prevIsBig)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <DivAnimention>
      <div
        className={`flex items-center justify-center ${
          isBig ? 'big' : 'small'
        }`}
      >
        <img
          className="w-250 h250 mb-40 large"
          src={EmBreve}
          alt="img-EmBreve"
        />
      </div>
    </DivAnimention>
  )
}

export default ImageComponent
