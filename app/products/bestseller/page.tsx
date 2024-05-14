import React from 'react'

const bestsellerProducts = [
    {id:"4", productName:"Product D", price: 99},
    {id:"5", productName:"Product E", price: 199},
]

function BestsellerPage() {
  return (
    <div className='flex flex-col items-center justify-start mx-auto h-screen'>
        <h1 className='text-3xl text-gray-500 m-5'>The Best Product</h1>
        {bestsellerProducts.map((product)=>(
            <div key={product.id} className='flex flex-row justify-evenly mx-auto w-2/5'>
                <h1>{product.productName}</h1>
                <p>{product.price}</p>
            </div>
        ))

        }
    </div>
  )
}

export default BestsellerPage