import React from 'react'
import './Copyright.css'
import {images} from "../../constants"

const Copyright = () => {
  return (
    <div className='copyright'>
        <div className='flex space-x-2'>
            <img src={images.fbicon} className=' border border-white rounded-full'/>
            <img src={images.yticon} className=' border border-white rounded-full'/>
            <img src={images.instaicon} className=' border border-white rounded-full'/>
            <img src={images.pinteresticon} className=' border border-white rounded-full'/>
            <img src={images.linkedinicon} className=' border border-white rounded-full'/>
            <img src={images.googleicon} className=' border border-white rounded-full'/>
            <img src={images.wp} className=' border border-white rounded-full'/>
        </div>
        <div className='text-center py-2'>
            <a href='#' className=' text-blue-800'>Corporate Address:</a>
            <p>10 Upper Bank Street London, London E145GH  United Kingdom</p>
            <p>Telephone: + 44 (0)20 3290 0046</p>
            <p>Copyright © 2001-2024 Projectsdeal. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Copyright