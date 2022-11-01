import React from 'react'
import HodlBot from '../assets/hodlbot.png'

const Built = () => {
  return (
    <div className='bg-gradient' name='built'>

      {/* container */}
      <div className='max-w-[1240px] mx-auto py-28 px-8 w-full h-full flex flex-col gap-8 justify-center items-center text-gray-300'>
        <p className='text-4xl font-bold'>Built on React Owned by you</p>
        <p className='text-center max-w-[700px] mb-8'>We have all been in this industry too long not to make the security of your funds our absolute top priority. We’ve received multiple audits from Open Zeppelin and Trail of Bits, as well as code reviews from white hat researchers.</p>
        <img src={HodlBot} />
      </div>
    </div>
  )
}

export default Built