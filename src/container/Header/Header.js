import React, { useState } from 'react'
import {images} from '../../constants'
import './Header.css'
import {Navbar} from '../../components'

const Header = () => {

    const [toggle , setToggle] = useState(false);

    function HandleMenu(){
        if(toggle){
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

  return (
    <div>
        <div className=' bg-sky-950 px-10 py-4 flex justify-between'>
            <img src={images.logo}/>
            <p className='ad text-white font-normal text-lg'><i>No. 1 Dissertation Writing Services in UK, <span className=' text-yellow-500'> Since 2001!</span></i><span className='mx-4 p-1 bg-sky-700'>Call +44 20 32900046</span></p>
            <div className='menu px-2 rounded-lg' onClick={()=> HandleMenu()}>
                <img src={images.menu} className=''/>
            </div>
        </div>
        <div className='navbar-link'>
            <Navbar />
        </div>
        <div className=' bg-yellow-600'>
            { toggle && (
                <ul className='navbar-menu'>
                {
                  ['Home','Dissertation','Coursework Help','Reasearch Paper Help','Dissertation Topics','Dissertation Examples','Dissertation Structure','Essay Help','PhD Proposal','PhD Thesis','Assignment Help','Blog'].map((item)=>(
                    <li key={item} className='active flex justify-start p-2'>
                      <a href="#" onClick={()=> setToggle(false)}>{item}</a>
                    </li>
                  ))
                }
                </ul>
                )
            }
        </div>
    </div>
  )
}

export default Header