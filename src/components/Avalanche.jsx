import React from 'react'
import Careers from '../assets/careers.png'
import Group50 from '../assets/group50.png'
import Group51 from '../assets/group51.png'
import Group52 from '../assets/group52.png'
import Group53 from '../assets/group53.png'

const Avalanche = () => {
  return (
    <div className='bg-gradient' name='avalanche'>

      {/* container */}
      <div className='max-w-[1240px] mx-auto py-28 px-8 grid sm:grid-cols-2 gap-8 text-gray-300'>
        <div>
          <p className='text-3xl font-bold py-12'>Take full advantage of everything Arbitrum and Avalanche have to offer.</p>
          <div className='flex items-center gap-8'>
            <img className='p-4' src={Group50} />
            <p>Say goodbye to eye-watering gas fees</p>
          </div>
          <div className='flex items-center gap-8'>
            <img className='p-4' src={Group51} />
            <p>Execute your trades instantly</p>
          </div>
          <div className='flex items-center gap-8'>
            <img className='p-4' src={Group52} />
            <p>Trade from any device</p>
          </div>
          <div className='flex items-center gap-8'>
            <img className='p-4' src={Group53} />
            <p>Gain leveraged exposure on unique token pairs</p>
          </div>
        </div>
        <div>
          <img src={Careers} />
        </div>
      </div>
    </div>
  )
}

export default Avalanche