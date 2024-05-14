import React from 'react'

const allProduct = [
  {id:'1', productName:"Product A", price:120},
  {id:'2', productName:"Product B", price:220},
  {id:'3', productName:"Product C", price:390}
]

const ProductsPage = () => {
  return (
    <div className='flex flex-col items-center justify-start mx-auto h-screen'>
        <h1 className='text-3xl text-gray-500 m-5'>All Products</h1>
        {allProduct.map((product)=>(
          <div key={product.id} className='flex flex-row justify-evenly mx-auto w-2/5'>
            <h1>
              {product.productName}
            </h1>
            <p>{product.price}</p>
          </div>
        ))

        }
    </div>
  )
}

export default ProductsPage