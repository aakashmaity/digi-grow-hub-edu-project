import React from 'react'
import {images} from '../../constants'
import {Joinform} from '../../components'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero flex relative mt-20'>
        <img src={images.trusted} className=' object-contain absolute -top-20 left-0 py-8'/>
        <Joinform/>
    </div>
  )
}

export default Hero