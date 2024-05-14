'use client'
import React, { useState } from 'react'
import NotFoundPage from '@/app/not-found'
import { notFound } from 'next/navigation'
const allProduct = [
  {id:'1', productName:"Product A", price:120},
  {id:'2', productName:"Product B", price:220},
  {id:'3', productName:"Product C", price:390}
]


interface Id{param:{
    id:String
  }
}

const Page = (props:Id) => {
  const id = props.params.id
  const checkId = allProduct.find((product)=>{return(product.id === id)})
  if(!checkId){
    notFound()
  }
  return (
      <div className='text-5xl p-5'>
        {id}
      </div>
  )
}

export default Page