import React from 'react'
import './About.css'
import {images} from '../../constants'

const About = () => {
  return (
    <div className='about flex justify-evenly items-start text-white'>
      <div>
        <h3 className='flex items-start'><img src={images.home}/>About Us</h3>
        <p>Established in 2001, Projectsdeal was conceived with the vision to provide the best dissertation writing services in the UK through well-written dissertation, thesis, essay, research paper, term paper and book report, that will enable our clients secure a good career and make their parents proud.</p>
        <p>Thanks to your continued love and support, we have recently added 134 new professional experts on board in addition to our current team.</p>
        <a href="#">More about Projectsdeal</a>
      </div>
      <div>
        <h3 className='flex items-start'><img src={images.laptop}/>We are the Only Legitimate Dissertation Writing Service that is Trusted & Ranked on Inc, Safe to Order Online:</h3>
        <img src={images.inc}/>
        <p> 020 3290 0046</p>
        <a href="#">CONTACT US</a>
      </div>
      <div>
        <h3 className='flex items-center'><img src={images.chat}/> Dissertation Related Services</h3>
        <ul>
          <li><a>Dissertation Related Services</a></li>
          <li><a>Dissertation Topics</a></li>
          <li><a>Do My Dissertation</a></li>
          <li><a>Dissertation Proposal Writing Service</a></li>
          <li><a>Literature Review Writing Service</a></li>
          <li><a>Masters Dissertation Writing Service</a></li>
          <li><a>PhD Dissertation Writing Service</a></li>
        </ul>
        <button className='p-2 bg-sky-600 uppercase text-white rounded-lg my-12'>Calculate Dissertation Writing Cost</button>
      </div>
      <div>
        <h3 className='flex items-center'><img src={images.news}/>For Urgent Deadline</h3>
        <a href='#'>Whatsapp: +44 7447 882377</a>
      </div>
    </div>
  )
}

export default About