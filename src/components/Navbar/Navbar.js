import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='w-full bg-yellow-500 '>
      <ul className='block text-sm'>
        {
          ['Home','Dissertation','Coursework Help','Reasearch Paper Help','Dissertation Topics','Dissertation Examples','Dissertation Structure','Essay Help','PhD Proposal','PhD Thesis','Assignment Help','Blog'].map((item)=>(
            <li key={item} className='active p-3 inline-block'>
              <a href="#">{item}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar