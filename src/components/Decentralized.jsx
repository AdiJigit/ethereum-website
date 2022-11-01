import React from 'react'
import DecentralizedImg from '../assets/decentralized.png'
import LogoSearch from '../assets/logos_search.png'
import LogoBitcoin from '../assets/logos_bitcoin.png'
import LogoWebkit from '../assets/logos_webkit.png'
import LogoGruop44 from '../assets/group-44.png'


const Decentralized = () => {
  return (
    <div className='bg-gradient' name='decentralized'>

      {/* container */}
      <div className='max-w-[1240px] mx-auto py-[130px] px-8 grid sm:grid-cols-2 gap-8 text-gray-300'>
        <div>
          <img src={DecentralizedImg} />
        </div>
        <div>
          <p className='text-4xl max-w-[500px] font-bold'>Fully decentralized of Completely secure</p>
          <p className='py-8'>We have all been in this industry too long not to make the security of your funds our absolute top priority. We’ve received multiple audits from Open Zeppelin and Trail of Bits, as well as code reviews from white hat researchers.</p>

          {/* grid group */}
          <div className='grid sm:grid-cols-2 text-gray-500'>
            <div>
              <div className='flex items-center gap-4 m-4'>
                <img src={LogoWebkit} />
                <p>Constant reviews and testing of our platform</p>
              </div>
              <div className='flex items-center gap-4 m-4'>
                <img src={LogoGruop44} />
                <p>Constant reviews and testing of our platform</p>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-4 m-4'>
                <img src={LogoSearch} />
                <p className='text-gray-500'>Constant reviews and testing of our platform</p>
              </div>
              <div className='flex items-center gap-4 m-4'>
                <img src={LogoBitcoin} />
                <p>Constant reviews and testing of our platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Decentralized