import { getData } from '@/app/components/Products';
import Image from 'next/image';
import React from 'react'

export default async function page({params}) {
  const categoryName=params.categoryName;
  const allProducts = await getData()
  const categoryProduct=allProducts.products.filter((product)=>product.category===categoryName)

  return (
    <div className="flex flex-wrap text-[14px]">
    {
      categoryProduct.map((product)=>(
        <div className="border border-red-600 w-[30%] p-3 m-3 rounded">
          <div>
          <Image src={product.thumbnail} width={150} height={150}/>
          </div>
          <h1>Title:{product.title}</h1>
          <h1>Category:{product.category}</h1>
          <h1>Price:{product.price}</h1>
        </div>
      ))
    }
  </div>
  )
}
