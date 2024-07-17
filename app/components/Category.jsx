import React from 'react'
import Products, { getData } from './Products'
import Link from 'next/link'

async function Category() {
  const allProducts= await getData()
  const allCategories= [...new Set(allProducts.products.map((product)=>product.category))]
  return (
    <div className='flex p-5'>
      <div className='w-[20%]'>
        <h1 className='font-bold text-[25px]'>All Categories:</h1>{
          allCategories.map((category)=>(
            <div>
              <Link href={`/category/${category}`} >  
              <h1>{category}</h1>
              </Link>
            </div>
          ))
        }
        {/* {
          allProducts.products.map((product)=>(
            <div>
              <h1>{product.category}</h1>
              </div>
          ))
        } */}
      </div>
      <div className='w-[80%]'>
        <Products />
      </div>
    </div>
  )
}

export default Category
