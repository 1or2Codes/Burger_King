import React from 'react'

function Homegoods() {
  return (
    <div className='bg-orange-100 pt-[115px] px-14 pb-[200px]'>
        <div className='flex gap-5 wrap'>
            <div className="w-[50%] ">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/6eaa0164bc3d7dcdb408764aa630088803e2b83a-1000x500.png?w=750&q=40&fit=max&auto=format" alt="" className='rounded-t-2xl'/>
                <div className="bg-white px-6 py-4 rounded-b-2xl">
                    <h1 className='font-bold text-lg'>NEW Halloumi Fries</h1>
                    <div className="flex justify-between items-center">
                        <p className='text-xs w-7/12 font-medium'>100% authentic Cypriot Halloumi, golden and cheesy fries.</p>
                        <button className='px-3 py-3 w-3/12 bg-red-600 text-white rounded-[200px] font-extrabold '> Order Now </button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] ">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/0bee56cce37b1d27cc5c429574c23c8fb2905368-1000x500.png?w=750&q=40&fit=max&auto=format" alt="" className='rounded-t-2xl'/>
                <div className="bg-white px-6 py-4 rounded-b-2xl">
                    <h1 className='font-bold text-lg'>Your favourites, fired up.</h1>
                    <div className="flex justify-between items-center">
                        <p className='text-xs w-7/12 font-medium'>Our classic Chicken Royale and Whopper with a creamy spicy mayo.</p>
                        <button className='px-3 py-3 w-3/12 bg-red-600 text-white rounded-[200px] font-extrabold '> Order Now </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-5 wrap mt-5'>
            <div className="w-[50%] ">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/5f714c93ee0bdac4925dcdccd9292b8a75292b16-1000x500.png?w=750&q=40&fit=max&auto=format" alt="" className='rounded-t-2xl'/>
                <div className="bg-white px-6 py-4 rounded-b-2xl">
                    <h1 className='font-bold text-lg'>$5.99 Doritos Tangy Cheese King Box</h1>
                    <div className="flex justify-between items-center">
                        <p className='text-xs w-7/12 font-medium'>with NEW Tangy Chesse Chicken Fries.</p>
                        <button className='px-3 py-3 w-3/12 bg-red-600 text-white rounded-[200px] font-extrabold '> Order Now </button>
                    </div>
                </div>
            </div>
            <div className="w-[50%]">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/423b0c1100e6ba2a700189d038116a109852f884-1000x500.png?w=750&q=40&fit=max&auto=format" alt="" className='rounded-t-2xl'/>
                <div className='bg-white px-6 py-4 rounded-b-2xl'>
                    <h1 className='font-bold text-lg'>Peppercorn Gourmet Kings</h1>
                    <div className="flex justify-between items-center">
                        <p className='text-xs w-7/12 font-medium'>150g of Aberdeen Angus or Crispy Chicken with a classic Peppercorn mayo</p>
                        <button className='px-3 py-3 w-4/12 bg-red-600 text-white rounded-[200px] font-extrabold '> Discover the range </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Homegoods