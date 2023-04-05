import React from 'react';
import { storeData } from '../../Assets/Data/Products';
import ProductSectionItem from './ProductSectionItem';

const ProductSection = () => {
  return (
    <div>
        <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
            <h2 className='text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none'>
                Summer Sale 40%
            </h2>
        </div>
        <div className='grid grid-cols-3 py-10 justify-items-center gap-4 mx-auto max-w-7xl cursor-pointer'>
            {storeData.slice(0,6).map((product,index)=>{
                return <div key={index}>
                    <ProductSectionItem 
                    id={product.id} 
                    name={product.name}
                    img={product.img}
                    text={product.text}
                    price={product.price}
                    color={product.color}
                    size={product.size}
                    
                    ></ProductSectionItem>
                </div>
            })}
        </div>
    </div>
  )
}

export default ProductSection;