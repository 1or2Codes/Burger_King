import React, { useState } from 'react'
import OffersLeft from '../offers/OffersLeft'
import OffersMain from '../offers/OffersMain'
import Navbar from '../components/Navbar'

function Offers() {

  const [current, setCurrent] = useState(0)
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <OffersLeft setCurrent={setCurrent} />
        <OffersMain current={current} />
      </div>
    </div>

  )
}

export default Offers