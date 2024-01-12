import React from 'react'
import {images} from '../../constants'
import './Joinform.css'


const Joinform = () => {
  return (
    <div className='maindiv flex w-full justify-end mx-40'>
      <div className='student'>
          <img src={images.student} className=' object-contain'/>
      </div>
      <div className='joinform flex flex-col justify-center items-center py-6 rounded-md'>
        <div className='flex '>
          <img src={images.tick} className=' object-contain px-2'/>
          <h2 className=' text-yellow-500 font-bold text-3xl '>Calculate Pricing</h2>
        </div>
        <p className='py-3 text-white'>Just Select Correct Options and Calculate Best Price</p>
        <div className=' flex flex-col justify-center items-center space-y-6 px-2 w-full'>
        {/* 1 */}
          <select className="select select-bordered select-sm w-full max-w-lg">
            <option disabled selected>--Please Select Academic Level--</option>
            {
              ['Masters','Undergraduate','PhD'].map((item)=>(
                <option>{item}</option>
              ))
            }
          </select>
          {/* 2 */}
          <select className="select select-bordered select-sm w-full max-w-lg">
            <option disabled selected>--Please Select Domain--</option>
            {
              ['Accounting & Finance','Advertising/Public Relations','Animal/Planet Biology','Anthropology','Archaeology','Architecture','Art','BioInformatics','Biology Studies','Business','Business Analytics','Chemistry','Children & Young People','Civil','Civil Litigation',].map((item)=>(
                <option>{item}</option>
              ))
            }
          </select>
          {/* 3 */}
          <select className="select select-bordered select-sm w-full max-w-lg">
            <option disabled selected>--Please Select Desired Service--</option>
            {
              ['Assignment','Coursework ','Essay','Dissertation','High Index Journal','PhD Admission Proposal'].map((item)=>(
                <option>{item}</option>
              ))
            }
          </select>
          {/* 4 */}
          <select className="select select-bordered select-sm w-full max-w-lg">
            <option disabled selected>--Select No. of Words/Pages--</option>
            {
              ['1000 words ~ 4 pages','1500 words ~ 6 pages','2000 words ~ 8 pages','2500 words ~ 10 pages','3000 words ~ 12 pages','3500 words ~ 14 pages','4000 words ~ 16 pages','4500 words ~ 18 pages','5000 words ~ 20 pages','5500 words ~ 22 pages'].map((item)=>(
                <option>{item}</option>
              ))
            }
          </select>
          {/* 5 */}
          <select className="select select-bordered select-sm w-full max-w-lg">
            <option disabled selected>--Select Tool--</option>
            {
              ['None','SPSS','STATA','Eviews','Nvivo','Xls Analysis','R Programming'].map((item)=>(
                <option>{item}</option>
              ))
            }
          </select>

          <input type='email' placeholder='Email id:' className=' max-w-lg w-full rounded-md' required/>
          <input type='tel' placeholder='Valid mobile number:' className=' max-w-lg w-full rounded-md' required/>
          <input type='email' placeholder='Deadline: dd/mm/yy' className=' max-w-lg w-full rounded-md' required />

          <button className=' flex bg-yellow-600 px-5 py-2 font-bold text-white rounded-md'>Click To Calculate <img src={images.calicon}/></button>
          <p className='font-bold text-lg text-white'>Result is all that Matters!</p>
        </div>
      </div>
    </div>
  )
}

export default Joinform