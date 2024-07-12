import Image from "next/image"

export async function getData() {
  const res = await fetch('https://dummyjson.com/products')


  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}



export default async function Products() {
  const allProducts = await getData()
  return (
    <div>
      <h1 className="font-bold text-3xl">All Product data:</h1>

<div className="flex flex-wrap text-[14px]">
  {
    allProducts.products.map((product)=>(
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

    </div>
  )
}



