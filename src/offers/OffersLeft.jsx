import React, { useState } from 'react'
import { Http } from '../components/Axios'
// import {OfferList} from '../components/MenuList'
import { Link } from 'react-router-dom'

function OffersLeft({setCurrent}) {

    const [items, setItems] = useState ([])
   
    function selectItem(id){
        setCurrent(id)
    }

    Http.get('OfferList')
        .then((res) => setItems(res.data))

        


  return (
    <section className='h-[calc(100svh-80px)] overflow-y-scroll w-4/12'>
        {
            items.map((item, i) => (
                <Link to={`/offers/${id}`} key={i} className='flex items-center gap-2' onClick={() => selectItem(i)}>
                    <img src={item.imgSrc} alt={item.h1} className='w-36' />
                    <div>
                        <h1 className='font-black'>{item.h1}</h1>
                        <p>{item.p.slice(0, 50) + '...'}</p>
                    </div>
                </Link>
            ))
        }
    </section>
  )
}

export default OffersLeft